import '../css/kingsRoads.scss'
import levelIMage1 from '../assets/levelIMage1.png'
import levelIMage2 from '../assets/levelIMage2.png'
import levelIMage3 from '../assets/levelIMage3.png'
import levelIMage4 from '../assets/levelIMage4.png'
import levelIMage5 from '../assets/levelIMage5.png'

function KingsRoad() {
    return (
        <div>
            <div className="kingsRoadWrapper pt-5">
                <div className="container pt-5">
                    <div className="row mx-0">
                        <div className="col-lg-12">
                            <div className="d-flex align-items-center justify-content-center gap-5">
                                <div className="box text-center">
                                    <div className="imgBox"><img src={levelIMage1} className={"mb-3"}/></div>
                                    <button className={"open btn text-uppercase rounded w-100"}>open</button>
                                    <p className={"text-uppercase"}>SQUIRE’S CHEST</p>
                                    <h5>hello</h5>
                                </div>
                                <div className="box text-center">
                                    <div className="imgBox"><img src={levelIMage2} className={"mb-3"}/></div>
                                    <button className={"locked btn text-uppercase rounded w-100"}>Locked</button>
                                    <p className={"text-uppercase"}>SWORDSMAN’S CHEST</p>
                                    <h5 className={"text-uppercase"}>UNLOCKS AT LVL <span>30</span></h5>
                                </div>
                                <div className="box text-center">
                                    <div className="imgBox"><img src={levelIMage3} className={"mb-3"}/></div>
                                    <button className={"locked btn text-uppercase rounded w-100"}>Locked</button>
                                    <p className={"text-uppercase"}>KNIGT’S CHESTT</p>
                                    <h5 className={"text-uppercase"}>UNLOCKS AT LVL <span>60</span></h5>
                                </div>
                                <div className="box text-center">
                                    <div className="imgBox"><img src={levelIMage4} className={"mb-3"}/></div>
                                    <button className={"locked btn text-uppercase rounded w-100"}>Locked</button>
                                    <p className={"text-uppercase"}>NOBLE’S CHEST</p>
                                    <h5 className={"text-uppercase"}>UNLOCKS AT LVL <span>90</span></h5>

                                </div>
                                <div className="box text-center">
                                    <div className="imgBox"><img src={levelIMage5} className={"mb-3"}/></div>
                                    <button className={"locked btn text-uppercase rounded w-100"}>Locked</button>
                                    <p className={"text-uppercase"}>KING’S CHEST</p>
                                    <h5 className={"text-uppercase"}>UNLOCKS AT LVL <span>120</span></h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KingsRoad;