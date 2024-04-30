import icon5 from '../../../assets/icon5.svg';
import '../../../css/profit.scss';

function Profit() {
  return (
    <div>
      <div className={'profitWrapper py-5'}>
        <div className='row mx-0'>
          <div className='col-lg-12 pb-5'>
            <h4 className={'mb-0'}>Profit</h4>
          </div>
          <div className='col-lg-6 mb-3'>
            <div className='profitCard  text-center'>
              <div className='d-flex justify-content-center align-items-center gap-2 mb-2'>
                <img src={icon5} />
                <h4 className={'mb-0'}>1,342</h4>
              </div>
              <div>
                <h3 className={'mb-0'}>TOTAL DEPOSITED</h3>
              </div>
            </div>
          </div>
          <div className='col-lg-6 mb-3'>
            <div className='profitCard text-center reset'>
              <div className='inner_color position-relative'>
                <div className='position-absolute top-0 end-0 start-0 bottom-0'></div>
                <div className=' d-flex justify-content-center align-items-center gap-2 mb-2'>
                  <img src={icon5} />
                  <h4 className={'mb-0'}>1,342</h4>
                </div>
                <div>
                  <h3 className={'mb-0'}>TOTAL DEPOSITED</h3>
                </div>
              </div>
            </div>
            <div className='reset-btn'>
              <button className={'btn text-center w-100'}>RESET NET PROFIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profit;
