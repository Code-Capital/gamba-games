import { useState } from 'react';
import levelIMage1 from '../assets/levelIMage1.png';
import levelIMage2 from '../assets/levelIMage2.png';
import levelIMage3 from '../assets/levelIMage3.png';
import levelIMage4 from '../assets/levelIMage4.png';
import levelIMage5 from '../assets/levelIMage5.png';
import '../css/kingsRoads.scss';
import MyHorizontalRoulette from '../component/MyHorizontalRoulette';

export function KingsRoad() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const chestsData = [
    { id: 1, image: levelIMage1, name: 'SQUIRE’S CHEST', level: 0 },
    { id: 2, image: levelIMage2, name: 'SWORDSMAN’S CHEST', level: 30 },
    { id: 3, image: levelIMage3, name: 'KNIGHT’S CHEST', level: 60 },
    { id: 4, image: levelIMage4, name: 'NOBLE’S CHEST', level: 90 },
    { id: 5, image: levelIMage5, name: 'KING’S CHEST', level: 120 },
  ];

  const getButtonClass = (level) => {
    return level === 0 ? 'open' : 'locked';
  };

  return (
    <div>
      <div className='kingsRoadWrapper pt-5'>
        <div className='container pt-5'>
          <div className='row mx-0'>
            <div className='col-lg-12 pt-5'>
              <div className='text-center'>
                <h2>
                  KINGS<span>ROAD</span>
                </h2>
                <p>You can open one of your unlocked cases daily to earn free coins.</p>
              </div>
            </div>
            <div className='col-lg-12 py-5 '>
              <div className='d-flex align-items-center justify-content-center gap-5'>
                {chestsData.map((chest) => (
                  <div className='box text-center' key={chest.id}>
                    <div className='imgBox'>
                      <img src={chest.image} className={'mb-4'} />
                    </div>
                    <button className={`${getButtonClass(chest.level)} btn text-uppercase rounded w-100`} onClick={handleShow}>
                      {chest.level === 0 ? 'open' : 'Locked'}
                    </button>
                    <p className={'text-uppercase'}>{chest.name}</p>
                    <h5>
                      UNLOCKS AT LVL <span>{chest.level}</span>
                    </h5>
                  </div>
                ))}
              </div>
            </div>
            {/* Additional code for conditions section */}
          </div>
        </div>
      </div>
      {/* Render the ModalComponent */}
      <MyHorizontalRoulette show={show} handleClose={handleClose} />
    </div>
  );
}
