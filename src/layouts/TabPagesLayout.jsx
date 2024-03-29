import React, { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import '../css/tabPagesLayout.css';
import Privacy from "../component/Privacy.jsx";
import TermsOfUse from "../component/TermsOfUse.jsx";
import Faqs from "../component/Faqs.jsx";
import Support from "../component/Support.jsx";
import Fairness from "../component/Fairness.jsx";
import Affiliates from "../component/Affiliates.jsx";

function TabPagesLayout() {
    const [activeTab, setActiveTab] = useState("privacyPolicy");

    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    return (
        <div>
            <div className="tabPagesLayoutWrapper ">
                <div className="container px-0 py-5">
                    <div className="py-5 text-center h1">
                        {activeTab === "privacyPolicy" && <span>PRIVACY<span>POLICY</span></span>}
                        {activeTab === "affiliates" && <span>AFFILIATES</span>}
                        {activeTab === "tos" && <span>TERMS<span>OF</span>SERVICE</span>}
                        {activeTab === "faq" && <span>FREQUENTLY<span>ASKED</span>QUESTIONS</span>}
                        {activeTab === "support" && <span>SUPPORT</span>}
                        {activeTab === "fairness" && <span>PROVABLY<span>FAIR</span></span>}
                    </div>
                    <div className="row mx-0">
                        <div className="col-lg-12">
                            <Tab.Container id="my-tabs" defaultActiveKey="privacyPolicy" onSelect={handleTabChange}>
                                <Nav className={"border-0"} variant="tabs">
                                    <Nav.Item>
                                        <Nav.Link eventKey="privacyPolicy">Privacy Policy</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="affiliates">Affiliates</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tos">Terms of Service</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="faq">FAQ</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="support">Support</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fairness">Fairness</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="privacyPolicy">
                                        <Privacy/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="affiliates">
                                        <Affiliates/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tos">
                                        <TermsOfUse/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="faq">
                                        <Faqs/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="support">
                                        <Support/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fairness">
                                        <Fairness/>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabPagesLayout;
