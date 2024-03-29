import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/header.css';
import logo from '../assets/logo.png'
import tomb from '../assets/tomb.svg'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import twoCoins from '../assets/icons/twoCoins.svg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import icon4 from '../assets/icon4.svg'
import {RiDiscordLine, RiInstagramLine, RiTwitterXLine} from "react-icons/ri";
import LoginModal from "./LoginModal.jsx";
import Dropdown from 'react-bootstrap/Dropdown';

import CoinIcon from "./Icons/CoinIcon.jsx";
import coin from '../assets/coin.png'
import avatar from "../assets/avatar.png"
import SettingsIcon from "./Icons/SettingsIcon.jsx";
import AffiliatesIcon from "./Icons/AffiliatesIcon.jsx";
import TransactionIcon from "./Icons/TransactionIcon.jsx";
import ProfileIcon from "./Icons/ProfileIcon.jsx";
import LogoutIcon from "./Icons/LogoutIcon.jsx";
import HistoryIcon from "./Icons/HistoryIcon.jsx";
import WalletModal from "./WalletModal.jsx";

function Header() {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showWalletModal, setShowWalletModal] = useState(false);

    const [isIconRotated, setIsIconRotated] = useState(false); // State to control icon rotation

    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleShowLoginModal = () => setShowLoginModal(true);

    const handleCloseWalletModal = () => setShowWalletModal(false);
    const handleShowWalletModal = () => setShowWalletModal(true);


    const [volume, setVolume] = useState(50);

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    const [isDropDownOpen, setIsDropDownOpen] = useState(false); // State to control dropdown visibility

    const toggleDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    };


    const getSliderBackground = () => {
        return `linear-gradient(to right, #C6A465 ${volume}%, #9d9d9d ${volume}%)`;
    };

    return (
        <div className={"header"}>
            <Navbar expand="lg" className="p-0">
                <Container fluid className={"px-0 align-items-start"}>
                    <Navbar.Brand className={"logo text-center py-3 m-0"} href="#"><img src={logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <div className="d-flex flex-column flex-grow-1">
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >
                                <Nav.Link>Privacy Policy</Nav.Link>
                                <Nav.Link>Affiliates</Nav.Link>
                                <Nav.Link>Terms of Service</Nav.Link>
                                <Nav.Link>Frequently Asked Questions</Nav.Link>
                                <Nav.Link>Support</Nav.Link>
                                <Nav.Link>Fairness</Nav.Link>
                            </Nav>
                            <div className="d-flex social gap-2 pe-2">
                                <span className={"d-flex align-items-center justify-content-center p-1"}>
                                    <RiTwitterXLine/>
                                </span>
                                <span className={"d-flex align-items-center justify-content-center p-1"}>
                                    <RiInstagramLine/>
                                </span>
                                <span className={"d-flex align-items-center justify-content-center p-1"}>
                                    <RiDiscordLine/>
                                </span>
                            </div>
                        </Navbar.Collapse>
                        <div className={"header-bottom-bar px-4 d-flex align-items-center justify-content-between"}>
                            <div className={"d-flex flex-wrap gap-3 py-2"}>
                                <span><img src={tomb}/></span>
                                <span className={"border"}></span>
                                <span className={"pill px-2 py-1 text-uppercase dropDownClick"}
                                      onClick={toggleDropDown}>
                                    <img className={" iconRotate"} src={icon1}/>
                                    <span className={"px-1"}>GAMES</span>
                                    <img className={"iconRotate" + (isDropDownOpen ? ' rotated' : '')} src={icon2}/>
                                </span>

                                <span className={"volume d-flex align-items-center gap-3"}>
                                    <span><img className={"pe-1"} src={icon4}/></span>
                                    <span className="volume-slider">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={volume}
                                            onChange={handleVolumeChange}
                                            className="slider"
                                            id="volumeSlider"
                                            style={{background: getSliderBackground()}}
                                        />
                                    </span>
                                </span>
                            </div>
                            <div className="walletButton">
                                <div className="borderColor position-relative">
                                    <div className="position-absolute top-0 bottom-0 end-0 start-0"></div>
                                    <div className="d-flex align-items-center gap-5 position-relative">
                                        <div className={"bal gap-2 d-flex align-items-center"}>
                                            <img src={twoCoins}/>
                                            <span>157.00</span>
                                        </div>
                                        <div onClick={handleShowWalletModal} className={"btn"}>Wallet</div>
                                    </div>
                                </div>
                            </div>
                            <div className={"loginWrapper d-flex flex-wrap gap-4 py-2"}>
                                <span
                                    className={"text-uppercase px-4 py-2 d-flex align-items-center gap-1"}>
                                    <CoinIcon/>
                                    <small className={""}>Free Coins</small>
                                </span>
                                <span onClick={handleShowLoginModal} className={"px-5 py-2 login"}>Login</span>

                                <Dropdown>
                                    <Dropdown.Toggle className={"p-0 border-0 dropdownCustom"}>
                                        <img src={avatar} alt=""/>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className={"menu end-0"}>
                                        <Dropdown.Item className={"d-flex gap-2"}><ProfileIcon/> Profile</Dropdown.Item>
                                        <Dropdown.Item className={"d-flex gap-2"}><SettingsIcon/> Settings</Dropdown.Item>
                                        <Dropdown.Item className={"d-flex gap-2"}><AffiliatesIcon/> Affiliates</Dropdown.Item>
                                        <Dropdown.Item className={"d-flex gap-2"}><TransactionIcon/> Transactions</Dropdown.Item>
                                        <Dropdown.Item className={"d-flex gap-2"}><HistoryIcon/> History</Dropdown.Item>
                                        <Dropdown.Item className={"d-flex gap-2"}><LogoutIcon/> Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>

            {isDropDownOpen && (
                <div className="position-relative">
                    <div className={"dropDown p-3 ms-auto" + (isDropDownOpen ? ' open' : '')}>
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                            <div className="game p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <span>COINFLIP</span>
                                    <span className={"px-2"}>NEW</span>
                                </div>
                                <img src={coin}/>
                            </div>
                            <div className="game p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <span>COINFLIP</span>
                                    <span className={"px-2"}>NEW</span>
                                </div>
                                <img src={coin}/>
                            </div>
                            <div className="game p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <span>COINFLIP</span>
                                    <span className={"px-2"}>NEW</span>
                                </div>
                                <img src={coin}/>
                            </div>
                            <div className="game p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <span>COINFLIP</span>
                                    <span className={"px-2"}>NEW</span>
                                </div>
                                <img src={coin}/>
                            </div>
                            <div className="game p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <span>COINFLIP</span>
                                    <span className={"px-2"}>NEW</span>
                                </div>
                                <img src={coin}/>
                            </div>
                            <div className="game p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <span>COINFLIP</span>
                                    <span className={"px-2"}>NEW</span>
                                </div>
                                <img src={coin}/>
                            </div>
                        </div>
                    </div>
                </div>

            )}

            <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal}/>
            <WalletModal show={showWalletModal} handleClose={handleCloseWalletModal}/>

        </div>
    );
}

export default Header;


