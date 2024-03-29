import logo from '../assets/logo.png';
import mail from '../assets/mail.svg';
import '../css/footer.css';
function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container px-0">
                    <div className="row mx-0 mb-5">
                        <div className="col-lg-12 mx-auto">
                            <div className="footer-banner">
                                <div className="borderColor position-relative">
                                    <div className="position-absolute top-0 bottom-0 end-0 start-0"></div>
                                    <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap position-relative">
                                        <img src={logo}/>
                                        <div className="brand text-center">
                                            <div className={"h2 mb-0"}> <span>GAMBA</span><span>GAMES</span></div>
                                            <div className={"text"}>
                                                Seize the throne and start your legacy today!
                                            </div>
                                        </div>
                                        <img src={logo}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0">
                        <div className="col-lg-4 col-md-12 mb-3">
                            <div className="text">
                                <div className={"d-flex align-items-end  mb-5"}>
                                    <img className={"logo"} src={logo}/>
                                    <div className={"brand h2 mb-0"}>
                                        <span className={"first"}>GAMBA</span>
                                        <span className={"last"}>GAMES</span>
                                    </div>
                                </div>
                                    GambaGames is owned and operated by Gambagames
                                Entertainment Ltd located at Streetname, 77, 7rd Floor,
                                Office 777, 7777, Las Vegas, USA

                            </div>
                            <ul className={"list-unstyled pt-4"}>
                                <li className={"d-flex align-items-center gap-1 mb-2"}><img src={mail}/><span>Gambagames@gmail.com</span></li>
                                <li>© All rights reserved 2024</li>
                            </ul>
                        </div>
                        <div className="col-lg-8 px-0 mb-3">
                            <div className="row mx-0">
                                <div className="col-lg-3 col-6">
                                    <div className="links">
                                        <h5 className={"mb-0"}>GAMES</h5>
                                        <ul className={"list-unstyled"}>
                                            <li>Cases | Case Battles</li>
                                            <li>Mines</li>
                                            <li>Plinko</li>
                                            <li>Dice</li>
                                            <li>Coinflip</li>
                                            <li>Jackpot</li>
                                            <li>Upgrader</li>
                                            <li>Roulette</li>
                                            <li>Crash</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="links">
                                        <h5 className={"mb-0"}>ABOUT US</h5>
                                        <ul className={"list-unstyled"}>
                                            <li>Provably fair</li>
                                            <li>Privacy Policy</li>
                                            <li>Term of Service</li>
                                            <li>Frequently Asked</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="links">
                                        <h5 className={"mb-0"}>COMMUNITY</h5>
                                        <ul className={"list-unstyled"}>
                                            <li>Twitter</li>
                                            <li>Instagram</li>
                                            <li>Discord</li>
                                        </ul>
                                    </div>


                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="links">
                                        <h5 className={"mb-0"}>REWARDS</h5>
                                        <ul className={"list-unstyled"}>
                                            <li>Affiliates</li>
                                            <li>Flash Codes</li>
                                            <li>Daily Case</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center copyrights">
                    © 2024 - 2024 Gambagames.gg All Rights Reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;