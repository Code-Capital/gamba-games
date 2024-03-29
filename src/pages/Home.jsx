import '../css/home.scss';
import { useRef } from 'react';
import twoCoins from '../assets/twoCoins.png';
import PayoutMethod from '../component/PayoutMethod.jsx';
import GameCard from '../component/GameCard.jsx';
import video from '../assets/game.mp4';

export function Home() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);
  const videoRef7 = useRef(null);
  const videoRef8 = useRef(null);
  const videoRef9 = useRef(null);
  const videoRef10 = useRef(null);
  // Add more refs as needed for each game

  const gamesData = [
    {
      title: 'CASE BATTLES',
      feature: 'NEW BORROW FEATURE',
      videoSource: video,
      poster: 'path/to/game1-poster.png',
      videoRef: videoRef1,
      columnSize: 6, // Set the column size here
    },
    {
      title: 'CASES',
      feature: 'NEW',
      videoSource: video,
      poster: 'path/to/game1-poster.png',
      videoRef: videoRef2,
      columnSize: 6, // Set the column size here
    },
    {
      title: 'PLINKO',
      feature: 'NEW',
      videoSource: video,
      poster: 'path/to/game1-poster.png',
      videoRef: videoRef3,
      columnSize: 3, // Set the column size here
    },
    {
      title: 'CRASH',
      feature: 'NEW',
      videoSource: video,
      poster: 'path/to/game2-poster.png',
      videoRef: videoRef4,
      columnSize: 3,
    },
    {
      title: 'DICE',
      feature: 'NEW',
      videoSource: video,
      poster: 'path/to/game1-poster.png',
      videoRef: videoRef5,
      columnSize: 3, // Set the column size here
    },
    {
      title: 'MINES',
      feature: 'NEW',
      videoSource: video,
      poster: 'path/to/game2-poster.png',
      videoRef: videoRef6,
      columnSize: 3,
    },
    {
      title: 'UPGRADER',
      feature: 'NEW',
      videoSource: video,
      poster: 'path/to/game1-poster.png',
      videoRef: videoRef7,
      columnSize: 3, // Set the column size here
    },
    {
      title: 'ROULETTE',
      feature: 'NEW',
      videoSource: video,
      poster: 'path/to/game2-poster.png',
      videoRef: videoRef8,
      columnSize: 3,
    },
    // Add more game data objects as needed
  ];
  const gamesDataTwo = [
    {
      title: 'COINFLIP',
      feature: 'SKIN VS SKIN',
      videoSource: video,
      poster: 'path/to/game1-poster.png',
      videoRef: videoRef9,
      columnSize: 6, // Set the column size here
    },
    {
      title: 'JACKPOT',
      feature: 'SKIN VS SKIN',
      videoSource: video,
      poster: 'path/to/game1-poster.png',
      videoRef: videoRef10,
      columnSize: 6, // Set the column size here
    },
  ];
  return (
    <div>
      <div className='homeWrapper py-5'>
        <div className='contanier'>
          <div className='row mx-0'>
            <div className='col-lg-8 mb-3'>
              <div className='rakeBack h-100'>
                <div className='borderColor position-relative h-100'>
                  <div className='position-absolute top-0 bottom-0 end-0 start-0'></div>
                  <div className='row mx-0 align-items-center justify-content-center flex-wrap position-relative'>
                    <div className={'col-lg-6 mb-1'}>
                      <div className='h2 mb-2'>RAKEBACK</div>
                      <p className={'mb-2'}>
                        Increase your level to earn more coins. You currently earn <span>0.25%</span> rakeback on all bets.
                      </p>
                    </div>
                    <div className='col-lg-6 mb-1'>
                      <div className={'claim p-3'}>
                        <div className='d-flex align-items-center justify-content-between '>
                          <img src={twoCoins} />
                          <span>0000.00</span>
                          <button className={'btn text-uppercase'}>CLAIM</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='freeCoins h-100'>
                <div className='borderColor position-relative h-100'>
                  <div className='position-absolute top-0 bottom-0 end-0 start-0'></div>
                  <div className='position-relative'>
                    <div className='h2 mb-3'>FREE COINS</div>
                    <div className='p'>
                      You can open one of your unlocked cases <span>daily</span> to earn coins.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GameCard games={gamesData} gameTwo={gamesDataTwo} />
          <PayoutMethod />
        </div>
      </div>
    </div>
  );
}
