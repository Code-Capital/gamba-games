import {Nav, Tab} from 'react-bootstrap';
import  '../css/tabPagesLayout.css'
import Privacy from "../component/Privacy.jsx";
import TermsOfUse from "../component/TermsOfUse.jsx";
import Faqs from "../component/Faqs.jsx";
import Support from "../component/Support.jsx";
import Fairness from "../component/Fairness.jsx";

function TabPagesLayout() {
    return (
        <div>
            <div className="tabPagesLayoutWrapper">
                <div className="container px-0 py-5">
                    <div className="row mx-0">
                        <div className="col-lg-12">
                            <Tab.Container id="my-tabs" defaultActiveKey="privacyPolicy">
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
                                        <Privacy/>
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