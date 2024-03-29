import { useEffect, useRef, useState } from 'react';
import '../css/routette.scss';
import RoulettePin from '../assets/RoulettePin.svg';
import routetteItem from '../assets/icons/routetteItem3.png';
import routetteItem1 from '../assets/icons/routetteItem4.png';
import routetteItem2 from '../assets/icons/routetteItem1.png';
import routetteItem3 from '../assets/icons/routetteItem.png';

export function UserRoutette() {
  const [elements, setElements] = useState([]);
  let arr = Array.from({ length: 50 });

  const itemsWrapperRef = useRef(null);
  const scrollSpeed = 15; // Adjust as needed
  const accelerationRate = 0.1; // Adjust as needed
  const decelerationRate = 0.1; // Adjust as needed

  const startScroll = () => {
    let scrollAmount = 0;
    let acceleration = 0;
    const maxScrollAmount = itemsWrapperRef.current.scrollWidth - itemsWrapperRef.current.clientWidth;
    // Calculate scroll thresholds
    const speedUpThreshold = maxScrollAmount * 0.3;
    const fullSpeedThreshold = maxScrollAmount * 0.6;
    const stoppingPointThreshold = maxScrollAmount * 0.7;
    const decelerationStartThreshold = maxScrollAmount * 0.99;
    const randomOffset = (maxScrollAmount - stoppingPointThreshold) * Math.random();

    let scrollInterval = setInterval(() => {
      if (scrollAmount >= stoppingPointThreshold) {
        clearInterval(scrollInterval);
        // Smooth scrolling logic
        const targetPosition = stoppingPointThreshold + randomOffset;
        const duration = Math.abs(targetPosition - scrollAmount) / scrollSpeed;
        const step = () => {
          const distanceToTarget = targetPosition - scrollAmount;
          const deceleration = distanceToTarget / duration;
          scrollAmount += deceleration;
          itemsWrapperRef.current.scrollLeft = scrollAmount;
          if (Math.abs(distanceToTarget) < 1) {
            clearInterval(scrollInterval);
          }
        };
        scrollInterval = setInterval(step, 16); // Run step every 16ms for smooth animation
      } else {
        if (scrollAmount < speedUpThreshold) {
          acceleration += accelerationRate;
        } else if (scrollAmount < fullSpeedThreshold) {
          acceleration = scrollSpeed;
        } else if (scrollAmount < decelerationStartThreshold) {
          acceleration = scrollSpeed;
        } else {
          acceleration = Math.max(acceleration - decelerationRate, 0);
        }

        // Apply acceleration
        scrollAmount += acceleration;

        // Ensure scrollAmount stays within bounds
        if (scrollAmount > maxScrollAmount) {
          scrollAmount = maxScrollAmount;
        }

        itemsWrapperRef.current.scrollLeft = scrollAmount;
      }
    }, 10); // Adjust interval as needed
  };

  useEffect(() => {
    if (!elements.length) {
      setElements(arr);
    }

    console.log(arr);
    startScroll();
  }, [elements]);

  return (
    <div>
      <div className='routetteWrapper pt-5'>
        <div className='row mx-0'>
          <div className='col-lg-12'>
            <div className='d-flex align-items-center justify-content-between betsInfo mb-4'>
              <div className={'flex-grow-1'}>
                <div className='text'>Last 100 bets</div>
                <div className='lastBetWrapper d-flex align-items-center gap-2 pt-2'>
                  <div className='lastBet d-flex gap-1 align-items-center'>
                    <img src={routetteItem} />
                    <span>32</span>
                  </div>
                  <div className='lastBet d-flex gap-1 align-items-center'>
                    <img src={routetteItem1} />
                    <span>32</span>
                  </div>
                  <div className='lastBet d-flex gap-1 align-items-center'>
                    <img src={routetteItem2} />
                    <span>32</span>
                  </div>
                  <div className='lastBet d-flex gap-1 align-items-center'>
                    <img src={routetteItem3} />
                    <span>32</span>
                  </div>
                  <div className='lastBet d-flex gap-1 align-items-center'>
                    <img src={routetteItem} />
                    <span>32</span>
                  </div>
                </div>
              </div>
              <div className={'flex-grow-1 text-end'}>
                <div className='text'>Previous Rounds</div>
                <div className='lastBetWrapper d-flex align-items-center gap-2 pt-2 justify-content-end'>
                  <div className='lastBet d-flex gap-1 align-items-center'>
                    <img src={routetteItem2} />
                  </div>
                  <div className='lastBet d-flex gap-1 align-items-center'>
                    <img src={routetteItem3} />
                  </div>
                  <div className='lastBet d-flex gap-1 align-items-center'>
                    <img src={routetteItem} />
                  </div>
                  <div className='lastBet d-flex gap-1 align-items-center'>
                    <img src={routetteItem2} />
                  </div>
                  <div className='lastBet d-flex gap-1 align-items-center'>
                    <img src={routetteItem3} />
                  </div>
                  <div className='lastBet d-flex gap-1 align-items-center'>
                    <img src={routetteItem} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div className='routette position-relative h-100'>
              <div className='itemsWrapper align-items-center d-flex justify-content-center overflow-x-scroll' ref={itemsWrapperRef}>
                {elements.map((el) => {
                  return (
                    <>
                      <div className='singleItem'>
                        <img src={routetteItem} alt='item' />
                      </div>
                      <div className='singleItem'>
                        <img src={routetteItem1} alt='item' />
                      </div>
                      <div className='singleItem'>
                        <img src={routetteItem2} alt='item' />
                      </div>
                      <div className='singleItem'>
                        <img src={routetteItem3} alt='item' />
                      </div>
                    </>
                  );
                })}
              </div>
              <div className='routettePin text-center position-absolute end-0 start-0 mx-auto'>
                <img src={RoulettePin} alt='pin' />
              </div>
              <div className='position-absolute bg'></div>
              <div className='position-absolute bg1'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
