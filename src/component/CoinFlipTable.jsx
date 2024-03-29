import {useState} from 'react';
import gameToken from "../assets/gameToken.svg";
import '../css/coinFlipTable.css';
import avatar from "../assets/avatar.png";
import gun1 from "../assets/icons/gun1.png";
import gun2 from "../assets/icons/gun2.png";
import gun3 from "../assets/icons/gun3.png";
import gun4 from "../assets/icons/gun4.png";
import gun5 from "../assets/icons/gun5.png";
import user1 from "../assets/icons/user1.png";
import user3 from "../assets/icons/user3.png";
import user4 from "../assets/icons/user4.png";
import CoinFlipModalOne from "./CoinFlipModalOne.jsx";



function CoinFlipTable() {

    const [show, setShow] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setSelectedItemIndex(index);
        setShow(true);
    };

    const data = [
        {
            userImage: user1,
            avatar: avatar,
            username: "Anonymous",
            action: "DOUBLE DOWN",
            guns: [gun1, gun2, gun3],
            total: "25.00",
            buttonClass: "join",
            buttonText: "JOIN"
        },
        {
            userImage: user3,
            avatar: avatar,
            username: "Anonymous",
            action: "DOUBLE DOWN",
            guns: [gun1, gun2, gun3],
            total: "25.00",
            buttonClass: "joining",
            buttonText: "JOINING..."
        },
        {
            userImage: user4,
            avatar: avatar,
            username: "Anonymous",
            action: "DOUBLE DOWN",
            guns: [gun1, gun2, gun3, gun4, gun5],
            items: 5,
            total: "25.00",
            buttonClass: "winner",
            buttonText: "Winner"
        },
    ];




    return (
        <div className={"coinFlipTable"}>
            <div className="row mx-0">
                <div className="col-lg-12">
                    <div className="table-responsive mt-3">
                        <table className="table table-striped align-middle">
                            <thead>
                            <tr>
                                <th scope="col">Player</th>
                                <th scope="col">Items</th>
                                <th scope="col">Total</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td className={"name"}>
                                        <div className={"d-flex gap-2"}>
                                            <img src={item.userImage} alt={`Avatar of ${item.username}`}/>
                                            <div className="ms-1">
                                                <span className={"d-block"}>{item.username}</span>
                                                <span className={"d-block"}>{item.action}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={"guns"}>
                                        <div className="d-flex align-items-center gap-2">
                                            {item.guns.map((gun, gunIndex) => (
                                                <img key={gunIndex} src={gun} alt={`Gun ${gunIndex + 1}`}/>
                                            ))}
                                            {item.items && <span>+{item.items} ITEMS</span>}
                                        </div>
                                    </td>
                                    <td><img src={gameToken} alt="Game token"/><span
                                        className="ms-2">{item.total}</span></td>
                                    <td className={"buttons d-flex gap-3 align-items-center"}>
                                        <div className="position-relative">
                                            <div className="position-absolute">
                                                <img src={item.avatar} alt="Avatar"/>
                                            </div>
                                            <button onClick={() => handleShow(index)}
                                                    className={`text-uppercase btn ${item.buttonClass} px-4`}>{item.buttonText}</button>
                                        </div>
                                        <div className="">
                                            <button className={"text-uppercase btn view px-4"}>view</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <CoinFlipModalOne
                show={show && data[selectedItemIndex]?.buttonText === "JOIN"}
                handleClose={handleClose}
                item={data[selectedItemIndex]}
            />
        </div>
    );
}

export default CoinFlipTable;
