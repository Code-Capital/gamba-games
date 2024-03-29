import React from "react";
import '../css/payout.css';
import paymentIcon1 from "../assets/icons/paymentIcon1.svg";
import paymentIcon2 from "../assets/icons/paymentIcon2.svg";
import paymentIcon3 from "../assets/icons/paymentIcon3.svg";
import paymentIcon4 from "../assets/icons/paymentIcon4.svg";
import paymentIcon5 from "../assets/icons/paymentIcon5.svg";
import paymentIcon6 from "../assets/icons/paymentIcon6.svg";
import paymentIcon7 from "../assets/icons/paymentIcon7.svg";
import paymentIcon8 from "../assets/icons/paymentIcon8.svg";
import paymentIcon9 from "../assets/icons/paymentIcon9.svg";
import paymentIcon10 from "../assets/icons/paymentIcon10.svg";
import paymentIcon11 from "../assets/icons/paymentIcon11.svg";
import PaymentHistory from "./PaymentHistory.jsx";


function PayoutMethod() {


    return (
        <div>
            <div className="payoutMethods pt-5">
                <div className="row mx-0">
                    <div className="col-lg-12">
                        <div className="paymentMethods">
                            <div className="h5 pt-3 mb-3">Deposit with your preferred payment method</div>
                            <div className="d-flex align-items-center gap-2 justify-content-center mb-4 overflow-x-scroll">
                                <img src={paymentIcon1}/>
                                <img src={paymentIcon2}/>
                                <img src={paymentIcon3}/>
                                <img src={paymentIcon4}/>
                                <img src={paymentIcon5}/>
                                <img src={paymentIcon6}/>
                                <img src={paymentIcon7}/>
                                <img src={paymentIcon8}/>
                                <img src={paymentIcon9}/>
                                <img src={paymentIcon10}/>
                                <img src={paymentIcon11}/>
                            </div>
                        </div>
                    </div>
                    <PaymentHistory/>
                </div>
            </div>
        </div>
    );
}

export default PayoutMethod;
