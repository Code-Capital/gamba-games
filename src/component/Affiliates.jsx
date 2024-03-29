import React from 'react';
import '../css/affiliates.css';
import logo from "../assets/logo.png";
import CopyIcon from "./Icons/CopyIcon.jsx";
import workCard1 from "../assets/workCard1.png";
import workCard2 from "../assets/workCard2.png";
import workCard3 from "../assets/workCard3.png";
import workCard4 from "../assets/workCard4.png";
import knight from "../assets/knight.png";
import king from "../assets/king.png";
import noble from "../assets/noble.png";
import swordsman from "../assets/swordsman.png";
import squire from "../assets/squire.png";
import avatar from "../assets/avatar.png";
import icon13 from "../assets/icon13.svg"
import gameToken from "../assets/gameToken.svg";
import ProgressBar from "react-bootstrap/ProgressBar";
import Refree from "./Refree.jsx";
import Stats from "./Stats.jsx";



function Affiliates(props) {
    return (
        <div>
            <div className="affiliatesWrapper py-5">
                <div className="container px-0">
                    <div className="row mx-0">
                        <div className="col-lg-12 mb-3">
                            <div className="affiliateCard">
                                <div className="borderColor position-relative">
                                    <div className="position-absolute top-0 bottom-0 end-0 start-0"></div>
                                    <div
                                        className="row mx-0 justify-content-between flex-wrap position-relative align-items-center">
                                        <div className="col-lg-7">
                                            <div className="h1 mb-2">INVITE FRIENDS TO EARN <br/>
                                                <span>FREE COINS</span></div>
                                            <p>
                                                Join us as an affiliate, earn with every referral! As they play and
                                                deposit,
                                                watch your earnings soar. More referrals mean higher ranks with more
                                                earnings.
                                                Share your code or link and start earning!
                                            </p>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="h5 d-flex align-items-end gap-2 mb-3"><span>YOUR CODE</span><CopyIcon/>
                                                <span>copy link</span></div>
                                            <div className="d-flex align-items-center gap-2">
                                                <input type="text" className={"form-control form-control-lg"}
                                                       placeholder={"Referral Code"}/>
                                                <button className={"btn px-4"}>SAVE</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0 mt-5">
                        <div className="col-lg-3 mb-3">
                            <div
                                className="workCard position-relative d-flex flex-column justify-content-center align-items-center p-3"
                                style={{backgroundImage: `url(${workCard1})`}}>
                                <div className={"h1 mb-4"}>1</div>
                                <div className={"p"}>Create your unique code</div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-3">
                            <div
                                className="workCard position-relative d-flex flex-column justify-content-center align-items-center p-3"
                                style={{backgroundImage: `url(${workCard2})`}}>
                                <div className={"h1 mb-4"}>2</div>
                                <div className={"p"}>Invite your friends</div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-3">
                            <div
                                className="workCard position-relative d-flex flex-column justify-content-center align-items-center p-3"
                                style={{backgroundImage: `url(${workCard3})`}}>
                                <div className={"h1 mb-4"}>3</div>
                                <div className={"p"}>Earn up to 4% of deposits</div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-3">
                            <div
                                className="workCard position-relative d-flex flex-column justify-content-center align-items-center p-3"
                                style={{backgroundImage: `url(${workCard4})`}}>
                                <div className={"h1 mb-4"}>4</div>
                                <div className={"p"}>Rank up to get even more</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex commission mt-5 justify-content-center">
                        <div className="flex-grow-1 mb-3 first align-end">
                            <div className="hover flex-column text-white text-center">
                                <div className="innerHover d-flex align-items-end justify-content-center">
                                    <div className="hide">
                                        <img className={"mb-4"} src={squire}/>
                                        <div className={"h5 text-uppercase"}>SQUIRE</div>
                                    </div>
                                    <div className="show">
                                        <div className={"h1 mb-4"}>1%</div>
                                        <div className={"h5 text-uppercase"}>Commision</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow-1 mb-3 second align-center">
                            <div className="hover flex-column text-white text-center">
                                <div className="innerHover d-flex align-items-center justify-content-center">
                                    <div className="hide">
                                        <img className={"mb-4"} src={knight}/>
                                        <div className={"h5 text-uppercase"}>KNIGHT</div>
                                    </div>
                                    <div className="show">
                                        <div className={"h1 mb-4"}>3%</div>
                                        <div className={"h5 text-uppercase"}>Commision</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow-1 mb-3 third align-start ">
                            <div className="hover flex-column text-white text-center">
                                <div className="innerHover d-flex align-items-start justify-content-center">
                                    <div className="hide">
                                        <img className={"mb-4"} src={king}/>
                                        <div className={"h5 text-uppercase"}>KING</div>
                                    </div>
                                    <div className="show">
                                        <div className={"h1 mb-4"}>5%</div>
                                        <div className={"h5 text-uppercase"}>Commision</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow-1 mb-3 fourth align-center">
                            <div className="hover flex-column text-white text-center">
                                <div className="innerHover d-flex align-items-center justify-content-center">
                                    <div className="hide">
                                        <img className={"mb-4"} src={noble}/>
                                        <div className={"h5 text-uppercase"}>NOBLE</div>
                                    </div>
                                    <div className="show">
                                        <div className={"h1 mb-4"}>4%</div>
                                        <div className={"h5 text-uppercase"}>Commision</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow-1 mb-3 fifth align-end">
                            <div className="hover flex-column text-white text-center">
                                <div className="innerHover d-flex align-items-end justify-content-center">
                                    <div className="hide">
                                        <img className={"mb-4"} src={swordsman}/>
                                        <div className={"h5 text-uppercase"}>SWORDSMAN</div>
                                    </div>
                                    <div className="show">
                                        <div className={"h1 mb-4"}>2%</div>
                                        <div className={"h5 text-uppercase"}>Commision</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0 mb-5">
                        <div className="col-lg-4 mx-auto">
                            <div className="nobleProfile">
                                <div className="borderColor position-relative">
                                    <div className="position-absolute top-0 end-0 start-0 bottom-0"></div>
                                    <div className="d-flex gap-3 mb-0 position-relative">
                                        <div className="img">
                                            <img src={avatar}/>
                                        </div>
                                        <div className="content">
                                            <div className={"h6 d-flex align-items-center gap-2 justify-content-center mb-0"}><img src={icon13}/><span>NOBLE</span><img src={icon13}/></div>
                                            <div className={"h5 mb-2"}>JONASVIAENE</div>
                                            <div className="d-flex align-items-center gap-2 content mb-0 flex-grow-1">
                                                <div className={"icon"}>
                                                    <img src={icon13}/>
                                                </div>
                                                <div className={"progressWapper"}>
                                                    <div className={"d-flex align-items-end gap-2 text mb-1"}>
                                                        <img src={gameToken}/>   <span>200,000.00</span><img src={gameToken}/>
                                                    </div>
                                                    <div>
                                                        <ProgressBar now={45} />
                                                    </div>

                                                    <div className={"text"}>
                                                        <span>REMAINING</span>
                                                    </div>
                                                </div>
                                                <div className={"icon"}>
                                                    <img src={icon13}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0 align-items-center">
                        <div className="col-lg-6 mb-3">
                            <div className="h2 mb-0">YOUR AFFILIATE <span>SUMMARY</span></div>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <div className={"p mb-0"}>Affiliate pay-out is calculated based on the amount of cash deposits that are made by referrals that used your code to make the deposit.</div>
                        </div>
                    </div>
                    <div className="row mx-0 align-items-start mb-5">
                        <div className="col-lg-3 mb-3">
                            <div className="summaryCard p-4">
                                <h5 className={"mb-2"}>167</h5>
                                <h6>DEPOSITORS</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-3">
                            <div className="summaryCard p-4">
                                <h5 className={"mb-2"}>10,342</h5>
                                <h6>TOTAL DEPOSITED</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-3">
                            <div className="summaryCard p-4">
                                <h5 className={"mb-2"}>1,342</h5>
                                <h6>TOTAL EARNED</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-3">
                            <div className="summaryCard p-4 last">
                                <h5 className={"mb-2"}>1,342.00</h5>
                                <h6>CLAIMABLE FUNDS</h6>
                            </div>
                            <div className="claim py-2">
                                CLAIM
                            </div>
                        </div>
                    </div>
                    <Stats/>
                    <Refree/>
                </div>

            </div>
        </div>
    );
}

export default Affiliates;


