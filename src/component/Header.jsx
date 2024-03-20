import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/header.css';
import logo from '../assets/logo.png'
import tomb from '../assets/tomb.svg'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
// import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import {RiDiscordLine, RiInstagramLine, RiTwitterXLine} from "react-icons/ri";

function Header() {
    const [volume, setVolume] = useState(50); // Initial volume value

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
        // You can perform additional actions here, like updating the volume of the audio element
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
                                <span className={"pill px-2 py-1 text-uppercase"}><img className={"pe-1"} src={icon1}/> GAMES <img className={"ps-1"} src={icon2}/></span>
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
                                              style={{ background: getSliderBackground() }}
                                          />
                                      </span>
                                </span>

                            </div>
                            <div className={"loginWrapper d-flex flex-wrap gap-4 py-2"}>
                                <span className={"text-uppercase px-4 py-1 d-flex align-items-center gap-1"}>
                                    <svg width="18" height="10" viewBox="0 0 18 10" fill="#C6A465"
                                         xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_444_22841)"><path
                                        d="M18 2.13727L15.8909 5.31773L15.2671 6.26134L15.1938 6.37103L14.2565 7.78397L13.6472 8.69959L13.3221 9.19436L8.99853 8.91382L4.67798 9.19436L4.3499 8.69959L3.74357 7.78397L2.80616 6.37103L2.73293 6.26134L2.10612 5.31773L0 2.13727L5.22868 4.37657L4.49343 5.48858L5.13785 6.37103L7.83562 6.20535L7.83856 5.31773L6.66398 3.54771L9.00147 0L11.336 3.54771L10.1614 5.31773L10.1644 6.20535L12.8592 6.37103L13.5066 5.48858L12.7714 4.37657L18 2.13727Z"/><path
                                        d="M13.1448 9.45982L12.7872 9.99958L9.00075 9.75303L5.21246 9.99997L4.85498 9.46021L9.00075 9.18994L13.1448 9.45982Z"/></g><defs><clipPath
                                        id="clip0_444_22841"><rect width="18" height="10"
                                                                   fill="white"/></clipPath></defs></svg>
                                    <small>Free Coins</small>
                                </span>
                                <span className={"px-5 py-1"}>Login</span>
                            </div>
                        </div>
                    </div>

                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
