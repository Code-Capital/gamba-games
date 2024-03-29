import React, {useEffect, useRef, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import spinnerImage1 from '../assets/spinnerImage1.png';
import spinnerImage2 from '../assets/spinnerImage2.png';
import spinnerImage3 from '../assets/spinnerImage3.png';
import spinnerImage4 from '../assets/spinnerImage4.png';
import spinnerImage5 from '../assets/spinnerImage5.png';
import roulettePin from '../assets/roulletePinColor.svg';

import '../css/spinner.css'
import icon11 from '../assets/icon11.svg';

function MyHorizontalRoulette({show, handleClose}) {

    return (
        <Modal
            className={"spinnerModal"}
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="">
                <div className="position d-flex align-items-center justify-content-between design">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Modal.Body>
                    <div className="h2 py-3"><span>DAILY</span>FREE</div>
                    <div className="position-relative">
                        <div className="spinnerWrapper p-4 align-items-center d-flex justify-content-center overflow-x-scroll ">

                            <div className="singleItem">
                                <img src={spinnerImage1} alt="spinner"/>
                                <div className="text">Item name here</div>
                                <div className="price d-flex gap-1 justify-content-center align-items-center">
                                    <img className={"icon"} src={icon11} alt="icon"/>
                                    <span>1.00</span>
                                </div>
                            </div>
                            <div className="singleItem">
                                <img src={spinnerImage1}/>
                                <div className="text">Item name here</div>
                                <div className="price d-flex gap-1 justify-content-center align-items-center">
                                    <img className={"icon"} src={icon11}/>
                                    <span>1.00</span>
                                </div>
                            </div>
                            <div className="singleItem">
                                <img src={spinnerImage2}/>
                                <div className="text">Item name here</div>
                                <div className="price d-flex gap-1 justify-content-center align-items-center">
                                    <img className={"icon"} src={icon11}/>
                                    <span>1.00</span>
                                </div>
                            </div>
                            <div className="singleItem">
                                <img src={spinnerImage3}/>
                                <div className="text">Item name here</div>
                                <div
                                    className="price d-flex gap-1 justify-content-center align-items-center justify-content-center">
                                    <img className={"icon"} src={icon11}/>
                                    <span>1.00</span>
                                </div>
                            </div>
                            <div className="singleItem">
                                <img src={spinnerImage4}/>
                                <div className="text">Item name here</div>
                                <div className="price d-flex gap-1 justify-content-center align-items-center">
                                    <img className={"icon"} src={icon11}/>
                                    <span>1.00</span>
                                </div>
                            </div>
                            <div className="singleItem">
                                <img src={spinnerImage5}/>
                                <div className="text">Item name here</div>
                                <div className="price d-flex gap-1 justify-content-center align-items-center">
                                    <img className={"icon"} src={icon11}/>
                                    <span>1.00</span>
                                </div>
                            </div>
                            <div className="roulettePin position-absolute">
                                <img src={roulettePin} />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between  flex-wrap gap-3 pt-4 pb-3">
                        <div className="text ">
                            Won items get converted to coins immediately.
                        </div>
                        <button className={"btn px-5"} onClick={handleClose}>
                            CLOSE
                        </button>
                    </div>

                </Modal.Body>
            </div>
        </Modal>
    );
}

export default MyHorizontalRoulette;

