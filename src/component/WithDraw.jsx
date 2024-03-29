import React from 'react';
import '../css/withDraw.scss';
import Rust from './Icons/Rust.jsx';
import TF2 from './Icons/TF2.jsx';
import Csgo from './Icons/Csgo.jsx';
import Dota from './Icons/Dota.jsx';
import Etherium from './Icons/Etherium.jsx';
import Bitcoin from './Icons/Bitcoin.jsx';
import PaySafe from './Icons/PaySafe.jsx';
import Google from './Icons/Google.jsx';
import Paypal from './Icons/Paypal.jsx';
import Card from './Icons/Card.jsx';

function WithDraw(props) {
  return (
    <div className={'withDraw'}>
      <div className=''>
        <div className='row mx-0 align-items-end mt-3'>
          <div className='col-7 col-md-8 mb-3'>
            <div className='inputWrapper'>
              <label className={'mb-1'}>Affiliate code</label>
              <input className={'form-control'} placeholder={'Write your code here'} type='text' />
            </div>
          </div>
          <div className='col-5 col-md-4 mb-3'>
            <button className={'btn w-100 '}>FREE COINS</button>
          </div>
          <div className='col-md-6 col-lg-3 mb-3'>
            <div className='wrapper'>
              <div className='money d-flex align-items-center justify-content-center py-4 bg-rust'>
                <Rust />
              </div>
              <div className='name text-center py-2 text-uppercase '>RUST</div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3 mb-3'>
            <div className='wrapper'>
              <div className='money d-flex align-items-center justify-content-center py-4 bg-tf'>
                <TF2 />
              </div>
              <div className='name text-center py-2 text-uppercase'>TF2</div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3 mb-3'>
            <div className='wrapper'>
              <div className='money d-flex align-items-center justify-content-center py-4 bg-Csgo'>
                <Csgo />
              </div>
              <div className='name text-center py-2 text-uppercase'>CS:GO</div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3 mb-3'>
            <div className='wrapper'>
              <div className='money d-flex align-items-center justify-content-center py-4 bg-Dota'>
                <Dota />
              </div>
              <div className='name text-center py-2 text-uppercase'>DOTA</div>
            </div>
          </div>
        </div>
        <div className='row mx-0'>
          <div className='col-lg-12 mb-2'>
            <div className='h2 mb-0'>
              Crypto <span className={'ms-2'}>+30%</span>
            </div>
          </div>
          <div className='col-md-6 mb-3'>
            <div className='wrapper'>
              <div className='money d-flex align-items-center justify-content-center py-4 bg-ethrium'>
                <Etherium />
              </div>
              <div className='name text-center py-2 text-uppercase'>Ethereum</div>
            </div>
          </div>

          <div className='col-md-6 mb-3'>
            <div className='wrapper'>
              <div className='money d-flex align-items-center justify-content-center py-4 bg-bitcoin'>
                <Bitcoin />
              </div>
              <div className='name text-center py-2 text-uppercase'>Bitcoin</div>
            </div>
          </div>
        </div>
        <div className='row mx-0'>
          <div className='col-lg-12 mb-2'>
            <div className='h2 mb-0'>
              Gift card <span className={'ms-2'}>+30%</span>
            </div>
          </div>
          <div className='col-md-6 col-lg-3 mb-3'>
            <div className='wrapper'>
              <div className='money d-flex align-items-center justify-content-center py-4 bg-card'>
                <Card />
              </div>
              <div className='name text-center py-2 text-uppercase'>CREDIT CARD</div>
            </div>
          </div>

          <div className='col-md-6 col-lg-3 mb-3'>
            <div className='wrapper'>
              <div className='money d-flex align-items-center justify-content-center py-4 bg-paypal'>
                <Paypal />
              </div>
              <div className='name text-center py-2 text-uppercase'>PAYPAL</div>
            </div>
          </div>

          <div className='col-md-6 col-lg-3 mb-3'>
            <div className='wrapper'>
              <div className='money d-flex align-items-center justify-content-center py-4 bg-paysafe'>
                <PaySafe />
              </div>
              <div className='name text-center py-2 text-uppercase'>PAYSAFE</div>
            </div>
          </div>

          <div className='col-md-6 col-lg-3 mb-3'>
            <div className='wrapper'>
              <div className='money d-flex align-items-center justify-content-center py-4 bg-google'>
                <Google className='' />
              </div>
              <div className='name text-center py-2 text-uppercase'>GPAY</div>
            </div>
          </div>
        </div>
        <div className='row mx-0 pt-3 pb-2'>
          <div className='col-lg-12'>
            <div className='text-center'>
              By using the site, i attest that i am at least 18 years old and have read the terms & conditions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithDraw;
