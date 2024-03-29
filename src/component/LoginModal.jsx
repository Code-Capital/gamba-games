import React from 'react';
import Modal from "react-bootstrap/Modal";
import '../css/loginModal.css';
import {Nav, Tab} from 'react-bootstrap';
import LoginForm from "./LoginForm.jsx";

function LoginModal(props) {
    return (
        <div>
            <div className="loginModal">
                    <Modal show={props.show} onHide={props.handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header className="position-absolute end-0" closeButton variant="white">

                    </Modal.Header>
                    <div className="row mx-0">
                        <div className="col-lg-5 px-0">
                            <div className="bgImage">
                            </div>
                        </div>
                        <div className="col-lg-7 px-0">
                            <div className="bgImage p-4">
                                <h2 className={"text-center pb-4"}>LOG <span>IN</span></h2>
                                <Tab.Container id="my-tabs" defaultActiveKey="logIn">
                                    <Nav className={"border-0"} variant="tabs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="logIn">Log In</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="signup">Sign up</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="logIn">
                                            <LoginForm/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="signup">
                                            <LoginForm/>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default LoginModal;
