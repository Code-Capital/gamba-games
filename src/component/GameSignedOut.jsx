import React from 'react';
import '../css/gameSignedOut.scss';
import gameToken from '../assets/gameToken.svg';

import refree from '../assets/icons/refree.svg';
import king from '../assets/icons/king.svg';

function GameSignedOut(props) {
  const { roulteneData, roulteneDataTwo, roulteneDataThree, roulteneDataFour } = props;
  return (
    <div>
      <div className='GameSignedOut pt-5'>
        <div className='row mx-0'>
          <div className='col-lg-12 mb-3'>
            <div className={'h5'}>Bet amount</div>
            <div className='betAmount d-flex justify-content-between align-items-center px-3 py-2'>
              <div className='flex-grow-1'>
                <img className={'me-2'} src={gameToken} />
                <span>0.00</span>
              </div>
              <div className={'btnWrapper'}>
                <div className='d-flex align-items-center gap-2'>
                  <div className='filter'>
                    <span>Clear</span> <span>|</span>
                  </div>
                  <div className={'filterApply gap-1 d-flex'}>
                    <span className={'px-2 py-1'}>LAST</span>
                    <span className={'px-2 py-1'}>+1.0</span>
                    <span className={'px-2 py-1'}>+10</span>
                    <span className={'px-2 py-1'}>+100</span>
                    <span className={'px-2 py-1'}>+1000</span>
                    <span className={'px-2 py-1'}>1/2</span>
                    <span className={'px-2 py-1'}>2x</span>
                    <span className={'px-2 py-1'}>MAX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {roulteneData.map((data, index) => (
            <div key={index} className='col-lg-3 mb-3'>
              <div className={`roultenePower ${data.color} px-3 py-2 d-flex align-items-center justify-content-between`}>
                <div className='image-box'>
                  <img src={data.img} />
                  <span className='ms-2'>Place Bet</span>
                </div>
                <div className='power'>
                  <span>{data.multiplier}x</span>
                </div>
              </div>
              <div className='roulteneHistory mt-3 position-relative'>
                <div className='roulteneHead d-flex align-items-center justify-content-between p-3'>
                  <div className='right'>
                    <img src={king} />
                    <span className='ms-2'>{data.users} users</span>
                  </div>
                  <div className='left'>
                    <img src={gameToken} />
                    <span className='ms-2'>{data.amount}</span>
                  </div>
                </div>
                <div className='position-absolute bottom-0 end-0 start-0'></div>
                <div className='roulteneBody'>
                  {data.history.map((item, idx) => (
                    <div key={idx} className='roulteneItem d-flex align-items-center justify-content-between p-2'>
                      <div className='right'>
                        <img src={refree} />
                        <span className='ms-2'>{item.user}</span>
                      </div>
                      <div className='left'>
                        <img src={gameToken} />
                        <span className='ms-2'>{item.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {roulteneDataTwo.map((data, index) => (
            <div key={index} className='col-lg-3 mb-3'>
              <div className={`roultenePower ${data.color} px-3 py-2 d-flex align-items-center justify-content-between`}>
                <div className='image-box'>
                  <img src={data.img} />
                  <span className='ms-2'>Place Bet</span>
                </div>
                <div className='power'>
                  <span>{data.multiplier}x</span>
                </div>
              </div>
              <div className='roulteneHistory mt-3'>
                <div className='roulteneHead d-flex align-items-center justify-content-between p-3'>
                  <div className='right'>
                    <img src={king} />
                    <span className='ms-2'>{data.users} users</span>
                  </div>
                  <div className='left'>
                    <img src={gameToken} />
                    <span className='ms-2'>{data.amount}</span>
                  </div>
                </div>
                <div className='roulteneBody'>
                  {data.history.map((item, idx) => (
                    <div key={idx} className='roulteneItem d-flex align-items-center justify-content-between p-2'>
                      <div className='right'>
                        <img src={refree} />
                        <span className='ms-2'>{item.user}</span>
                      </div>
                      <div className='left'>
                        <img src={gameToken} />
                        <span className='ms-2'>{item.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {roulteneDataThree.map((data, index) => (
            <div key={index} className='col-lg-3 mb-3'>
              <div className={`roultenePower ${data.color} px-3 py-2 d-flex align-items-center justify-content-between`}>
                <div className='image-box'>
                  <img src={data.img} />
                  <span className='ms-2'>Place Bet</span>
                </div>
                <div className='power'>
                  <span>{data.multiplier}x</span>
                </div>
              </div>
              <div className='roulteneHistory mt-3'>
                <div className='roulteneHead d-flex align-items-center justify-content-between p-3'>
                  <div className='right'>
                    <img src={king} />
                    <span className='ms-2'>{data.users} users</span>
                  </div>
                  <div className='left'>
                    <img src={gameToken} />
                    <span className='ms-2'>{data.amount}</span>
                  </div>
                </div>
                <div className='roulteneBody'>
                  {data.history.map((item, idx) => (
                    <div key={idx} className='roulteneItem d-flex align-items-center justify-content-between p-2'>
                      <div className='right'>
                        <img src={refree} />
                        <span className='ms-2'>{item.user}</span>
                      </div>
                      <div className='left'>
                        <img src={gameToken} />
                        <span className='ms-2'>{item.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {roulteneDataFour.map((data, index) => (
            <div key={index} className='col-lg-3 mb-3'>
              <div className={`roultenePower ${data.color} px-3 py-2 d-flex align-items-center justify-content-between`}>
                <div className='image-box'>
                  <img src={data.img} />
                  <span className='ms-2'>Place Bet</span>
                </div>
                <div className='power'>
                  <span>{data.multiplier}x</span>
                </div>
              </div>
              <div className='roulteneHistory mt-3'>
                <div className='roulteneHead d-flex align-items-center justify-content-between p-3'>
                  <div className='right'>
                    <img src={king} />
                    <span className='ms-2'>{data.users} users</span>
                  </div>
                  <div className='left'>
                    <img src={gameToken} />
                    <span className='ms-2'>{data.amount}</span>
                  </div>
                </div>
                <div className='roulteneBody'>
                  {data.history.map((item, idx) => (
                    <div key={idx} className='roulteneItem d-flex align-items-center justify-content-between p-2'>
                      <div className='right'>
                        <img src={refree} />
                        <span className='ms-2'>{item.user}</span>
                      </div>
                      <div className='left'>
                        <img src={gameToken} />
                        <span className='ms-2'>{item.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameSignedOut;
