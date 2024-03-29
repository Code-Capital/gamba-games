import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import gameToken from '../assets/gameToken.svg';
import splitCoin from '../assets/splitCoin.svg';
import refresh from '../assets/icons/refresh.svg';
import checked from '../assets/icons/checked.svg';
import gun1 from '../assets/icons/gun1.png';
import gun2 from '../assets/icons/gun2.png';
import gun3 from '../assets/icons/gun3.png';
import whiteCoin from '../assets/icons/whiteCoin.svg';
import blackCoin from '../assets/icons/blackCoin.svg';
import '../css/coinFlipModalOne.scss';
import CreateModal from './CreateModal.jsx';

function CoinFlipModalOne({ show, handleClose }) {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreateClick = () => {
    handleClose();
    setShowCreateModal(true);
  };
  const items = [
    { name: 'Item 1', icon: gun1, value: '9.00' },
    { name: 'Item 2', icon: gun2, value: '10.00' },
    { name: 'Item 3', icon: gun3, value: '2.90' },
    { name: 'Item 3', icon: gun3, value: '2.90' },
    { name: 'Item 3', icon: gun3, value: '2.90' },
    { name: 'Item 3', icon: gun3, value: '2.90' },
    { name: 'Item 3', icon: gun3, value: '2.90' },
    { name: 'Item 3', icon: gun3, value: '2.90' },
    // Add more items as needed
  ];
  return (
    <>
      <Modal centered size='lg' className={'coinFlipModal'} show={show} onHide={handleClose}>
        <div className=''>
          <div className='position d-flex align-items-center justify-content-between design'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Modal.Body className={'coinFlipModalBody'}>
            <div className='d-flex align-items-center justify-content-between head mb-3 flex-wrap'>
              <div className={'d-flex align-items-center gap-3 py-1'}>
                <img src={splitCoin} alt='Split Coin' />
                <div className='h2'>
                  CREATE<span>FLIP</span>
                </div>
                <div className={'text'}>
                  <span className={'d-block'}>0/20</span>
                  <span className={'d-block'}>items</span>
                </div>
              </div>
              <div className={'d-flex align-items-center gap-3 py-1'}>
                <div className={'value text-center'}>
                  <span className={'d-block'}>Inventory Value</span>
                  <span className={'d-block'}>
                    <img className={'me-2'} src={gameToken} />
                    <span>2,856.90</span>
                  </span>
                </div>
                <div className='img'>
                  <img src={refresh} alt='Refresh' />
                </div>
              </div>
            </div>
            <div className='cardItemsWrapper p-3 d-flex gap-3 flex-wrap justify-content-center pt-5'>
              {items.map((item, index) => (
                <label key={index}>
                  <div className='position-relative'>
                    <input type='checkbox' />
                    <div className='cardItem'>
                      <div className='d-flex flex-column align-items-center justify-content-center '>
                        <img src={item.icon} />
                        <span>{item.name}</span>
                        <div className='value d-flex align-items-center'>
                          <img className={'me-2'} src={gameToken} />
                          <span>{item.value}</span>
                        </div>
                      </div>
                      <div className='checked d-flex align-items-center justify-content-center position-absolute'>
                        <img src={checked} alt='Checked' />
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            <div className='d-flex align-items-center justify-content-between foot mt-3 flex-wrap'>
              <div className={'d-flex align-items-center gap-3  py-1'}>
                <div className={'value text-center'}>
                  <span className={'d-block'}>
                    <span className={'text'}>Minimum deposit of</span>
                    <img className={'mx-2'} src={gameToken} />
                    <span>1.00</span>
                  </span>
                </div>
              </div>
              <div className={'d-flex align-items-center gap-3 flex-wrap py-1'}>
                <div className={'value text-center'}>
                  <span className={'d-block'}>
                    {' '}
                    <img className={'me-2'} src={gameToken} />
                    <span>1.00</span>
                  </span>
                </div>
                <img src={whiteCoin} alt='Game Token' />
                <img src={blackCoin} alt='Game Token' />
                <button className={'btn h-100 px-5'} onClick={handleCreateClick}>
                  CREATE
                </button>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
      <CreateModal show={showCreateModal} handleClose={() => setShowCreateModal(false)} />
    </>
  );
}

export default CoinFlipModalOne;
