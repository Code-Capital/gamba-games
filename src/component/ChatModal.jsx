import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../css/chatModal.scss';
import logo from '../assets/logo.png';
function ChatModal(props) {
  return (
    <div>
      <div className='loginModal'>
        <Modal show={props.show} onHide={props.handleClose} size='md' aria-labelledby='contained-modal-title-vcenter' centered>
          <Modal.Header className='position-absolute end-0' closeButton variant='white'></Modal.Header>
          <Modal.Body className={'bg-transparent px-0 py-5'}>
            <div className='brand text-center px-4'>
              <img src={logo} />
              <div className='text-center h1'>
                CHAT<span>RULES</span>
              </div>
            </div>
            <ul className={'list mx-4 mb-4'}>
              <li>No racism or harassment of any type is allowed.</li>
              <li>Begging is not allowed.</li>
              <li>No mentioning other websites</li>
              <li>Please speak the selected language </li>
              <li>If you experience technical issues, contact us via support chat.</li>
              <li>Don't promote anything in chat</li>
              <li>Spamming is prohibited and will result in a mute.</li>
            </ul>
            <div className='button mx-5'>
              <button onClick={props.handleClose} className={'btn w-100'}>
                I UNDERSTAND
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default ChatModal;
