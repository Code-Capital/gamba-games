import React from 'react';
import Modal from "react-bootstrap/Modal";
import '../css/WalletModal.css';
import {Nav, Tab} from 'react-bootstrap';
import WithDraw from "./WithDraw.jsx";

function WalletModal(props) {
    return (
        <div>
            <Modal className={"walletModal"} show={props.show} onHide={props.handleClose} size="lg"
                   aria-labelledby="contained-modal-title-vcenter" centered>
                <Tab.Container id="my-tabs" defaultActiveKey="deposit">
                    <Modal.Header className="position-absolute end-0" closeButton variant="white"></Modal.Header>
                    <div className="row mx-0 py-4">
                        <div className="col-8 px-4">
                            <div className="px-2">
                                <Nav className={"border-0 px-2"} variant="tabs">
                                    <Nav.Item>
                                        <Nav.Link eventKey="deposit">DEPOSIT</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="withDraw">WITHDRAW</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>

                        </div>
                        <div className="col-lg-12 px-0">
                            <div className=" px-4">
                                <Tab.Content>
                                    <Tab.Pane eventKey="deposit">
                                        <WithDraw/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="withDraw">
                                        <WithDraw/>
                                    </Tab.Pane>
                                </Tab.Content>

                            </div>
                        </div>
                    </div>
                </Tab.Container>
            </Modal>
        </div>

    );
}

export default WalletModal;
