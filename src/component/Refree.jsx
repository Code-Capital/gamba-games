import gameToken from "../assets/gameToken.svg";
import '../css/refree.css';
import refreeIcon from '../assets/icons/refree.svg'
import wallet from "../assets/icons/wallet.svg";
import percentage from "../assets/icons/percentage.svg";
import icon10 from "../assets/icon10.svg";
import React from "react";

function Refree() {
    const refree = [
        {
            name: "Anonymous",
            deposit: "25.00",
            commission: "1.00",
            amount: "10.00",
            status: "ACTIVE",
            date:"01/10/2024",
        },
        {
            name: "Anonymous",
            deposit: "25.00",
            commission: "1.00",
            amount: "10.00",
            status: "INACTIVE",
            date:"01/10/2024",
        },
        {
            name: "Anonymous",
            deposit: "25.00",
            commission: "1.00",
            amount: "10.00",
            status: "ACTIVE",
            date:"01/10/2024",
        },
        {
            name: "Anonymous",
            deposit: "25.00",
            commission: "1.00",
            amount: "10.00",
            status: "ACTIVE",
            date:"01/10/2024",
        },
        {
            name: "Anonymous",
            deposit: "25.00",
            commission: "1.00",
            amount: "10.00",
            status: "INACTIVE",
            date:"01/10/2024",
        },
        {
            name: "Anonymous",
            deposit: "25.00",
            commission: "1.00",
            amount: "10.00",
            status: "ACTIVE",
            date:"01/10/2024",
        },
        {
            name: "Anonymous",
            deposit: "25.00",
            commission: "1.00",
            amount: "10.00",
            status: "ACTIVE",
            date:"01/10/2024",
        },
        {
            name: "Anonymous",
            deposit: "25.00",
            commission: "1.00",
            amount: "10.00",
            status: "INACTIVE",
            date:"01/10/2024",
        },
        {
            name: "Anonymous",
            deposit: "25.00",
            commission: "1.00",
            amount: "10.00",
            status: "ACTIVE",
            date:"01/10/2024",
        },
        {
            name: "Anonymous",
            deposit: "25.00",
            commission: "1.00",
            amount: "10.00",
            status: "INACTIVE",
            date:"01/10/2024",
        },
        {
            name: "Anonymous",
            deposit: "25.00",
            commission: "1.00",
            amount: "10.00",
            status: "ACTIVE",
            date:"01/10/2024",
        },
    ];

    return (
        <div>
            <div className="refreeHistory pt-5">
                <div className="row mx-0">
                    <div className="col-lg-12">
                        <div className={"h2"}>YOUR <span>REFEREES</span></div>
                        <div className="table-responsive mt-3">
                            <table className="table table-striped align-middle">
                                <thead>
                                <tr>
                                    <th scope="col">NAME</th>
                                    <th scope="col">DEPOSITED</th>
                                    <th scope="col">COMMISSION</th>
                                    <th scope="col">LAST DEPOSIT</th>
                                    <th scope="col">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {refree.map((refree, index) => (
                                    <tr key={index}>
                                        <td className={"name"}><img src={refreeIcon}/><span className="ms-1 "> {refree.name}</span></td>
                                        <td><img src={gameToken}/><span className="ms-2"> {refree.deposit}</span></td>
                                        <td><img src={gameToken}/><span className="ms-2">{refree.commission}</span></td>
                                        <td><span>{refree.date}</span><img className="mx-2" src={gameToken}/><span >{refree.amount}</span></td>
                                        <td className={refree.status.toLowerCase()}>{refree.status}</td>

                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-6 mx-auto px-0 mt-5">
                        <div className="conditions py-5">
                            <div className="d-flex align-items-start gap-3 mb-3">
                                <div className="image-box d-flex align-items-center justify-content-center">
                                    <img src={wallet}/>
                                </div>
                                <span>Encourage your friends to use your unique code when they make their deposits.</span>
                            </div>
                            <div className="d-flex align-items-start gap-3 mb-3">
                                <div className="image-box d-flex align-items-center justify-content-center">
                                    <img src={percentage}/>
                                </div>
                                <span>Each player who uses your code will unlock the rakeback feature and unlock the thrilling chance to snag not one, but two epic rewards.</span>
                            </div>
                            <div className="d-flex align-items-start gap-3 mb-3">
                                <div className="image-box d-flex align-items-center justify-content-center">
                                    <img src={icon10}/>
                                </div>
                                <span>Score yourself a slice of the cake with every deposit made by your code users.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Refree;
