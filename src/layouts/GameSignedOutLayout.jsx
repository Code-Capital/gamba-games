import React from 'react';
import PaymentHistory from "../component/PaymentHistory.jsx";
import GameSignedOut from "../component/GameSignedOut.jsx";
import sword from "../assets/icons/sword.svg";
import king1 from "../assets/icons/king1.svg";
import king2 from "../assets/icons/king2.svg";
import Routette from "../component/Routette.jsx";

function GameSignedOutLayout(props) {

    const roulteneData = [
        {
            color: "red",
            multiplier: 2,
            img:sword,
            users: 18,
            amount: "25.00",
            history: [
                { user: "Anonymous", amount: "25.00" },
                { user: "Anonymous", amount: "25.00" },
                { user: "Anonymous", amount: "25.00" },
                { user: "Anonymous", amount: "25.00" },
                { user: "Anonymous", amount: "25.00" },
                { user: "Anonymous", amount: "25.00" },
                { user: "Anonymous", amount: "25.00" },
                { user: "Anonymous", amount: "25.00" },
                { user: "Anonymous", amount: "25.00" },
                { user: "Anonymous", amount: "25.00" }
            ]
        },
    ];
    const roulteneDataTwo = [
        {
            color: "green",
            multiplier: 2,
            img:king1,
            users: 18,
            amount: "25.00",
            history: [
                { user: "Anonymous", amount: "25.00" },
                { user: "Anonymous", amount: "25.00" },
                { user: "Anonymous", amount: "25.00" }
            ]
        },
    ];
    const roulteneDataThree = [
        {
            color: "grey",
            multiplier: 2,
            img:sword,
            users: 18,
            amount: "25.00",
            history: [
                { user: "Anonymous", amount: "25.00" },
                { user: "Anonymous", amount: "25.00" },
                { user: "Anonymous", amount: "25.00" }
            ]
        },
    ];
    const roulteneDataFour = [
        {
            color: "purple",
            multiplier: 2,
            img:king2,
            users: 18,
            amount: "25.00",
            history: [
                { user: "Anonymous", amount: "25.00" },
                { user: "Anonymous", amount: "25.00" },
                { user: "Anonymous", amount: "25.00" }
            ]
        },
    ];
    return (
        <div>
            <div className="gameSignOut">
                <div className="container">
                    <Routette/>
                    <GameSignedOut roulteneData={roulteneData} roulteneDataTwo={roulteneDataTwo} roulteneDataThree={roulteneDataThree} roulteneDataFour={roulteneDataFour}   />
                    <PaymentHistory/>
                </div>
            </div>
        </div>
    );
}

export default GameSignedOutLayout;