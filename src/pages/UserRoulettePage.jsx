import React, {useState} from 'react';
import '../css/Pages/MainPage.css'
import ChatSidebar from "../component/ChatSidebar.jsx";
import TabPagesLayout from "../layouts/TabPagesLayout.jsx";
import Footer from "../component/Footer.jsx";
import Header from "../component/Header.jsx";
import SideBarArrow from "../component/Icons/SideBarArrow.jsx";
import Routette from "../component/Routette.jsx";

function UserRoulettePage(props) {
    const [flexWrapperActive, setFlexWrapperActive] = useState(true);
    const [contentWrapperActive, setContentWrapperActive] = useState(false);

    const toggleFlexWrapper = () => {
        setFlexWrapperActive(!flexWrapperActive);
        setContentWrapperActive(!contentWrapperActive);
    };

    return (
        <div>
            <Header/>
            <div className={`d-flex align-items-start flexWrapper ${flexWrapperActive ? 'active' : ''}`}>
                <div className="chatSidebar py-2 position-relative top-50">
                    <button className={"btn Sidebtn position-absolute"} onClick={toggleFlexWrapper}>
                        <SideBarArrow/>
                    </button>
                    <ChatSidebar/>

                </div>
                <div className={`contentWrapper px-0 px-md-3 px-lg-5 ${contentWrapperActive ? 'active' : ''}`}>
                    <Routette/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default UserRoulettePage;

