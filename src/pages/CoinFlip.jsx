import '../css/CoinFlip.scss';
import scoreCoin from '../assets/icons/scoreCoin.png';
import scoreCoin2 from '../assets/icons/scoreCoin2.png';
import CoinFlipTable from '../component/CoinFlipTable';

export const CoinFlip = () => {
  const data = [
    { label: 'TOTAL VALUE', value: '2,568$' },
    { label: 'GAMES', value: '5' },
    { label: 'JOINABLE GAMES', value: '5' },
  ];
  const dataPercentage = [
    { percentage: '46%', image: scoreCoin2, color: 'white' },
    { percentage: '54%', image: scoreCoin, color: '' },
  ];
  return (
    <div className={'coinFlip pt-5'}>
      <div className='row mx-0'>
        <div className='col-lg-4'>
          <div className='h2'>
            COIN<span>FLIP</span>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='d-flex align-items-center justify-content-between'>
            {data.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='d-flex gap-3'>
            <div className='d-flex gap-2'>
              {dataPercentage.map((item) => (
                <div key={item.percentage} className='coin position-relative'>
                  <img src={item.image} alt='Coin' />
                  <div className={`position-absolute ${item.color}`}>{item.percentage}</div>
                </div>
              ))}
            </div>
            <div className='btnWrapper flex-grow-1'>
              <button className={'w-100 btn h-100'}>CREATE A COINFLIP</button>
            </div>
          </div>
        </div>
      </div>
      <CoinFlipTable />
    </div>
  );
};
