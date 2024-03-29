import React from 'react';
import refreeIcon from '../assets/icons/refree.svg';
import gameToken from '../assets/gameToken.svg';
import '../css/payoutHistory.scss';

function PaymentHistory(props) {
  const payout = [
    {
      name: 'Anonymous',
      game: 'Roulette',
      commission: '25.00',
      multiplier: 'x2.00',
      payoutValue: '+50.00',
    },
    {
      name: 'Anonymous',
      game: 'Roulette',
      commission: '25.00',
      multiplier: 'x2.00',
      payoutValue: '0.00',
    },
    {
      name: 'Anonymous',
      game: 'Roulette',
      commission: '25.00',
      multiplier: 'x2.00',
      payoutValue: '+50.00',
    },
    {
      name: 'Anonymous',
      game: 'Roulette',
      commission: '25.00',
      multiplier: 'x2.00',
      payoutValue: '+50.00',
    },
    {
      name: 'Anonymous',
      game: 'Roulette',
      commission: '25.00',
      multiplier: 'x2.00',
      payoutValue: '0.00',
    },
    {
      name: 'Anonymous',
      game: 'Roulette',
      commission: '25.00',
      multiplier: 'x2.00',
      payoutValue: '+50.00',
    },
    {
      name: 'Anonymous',
      game: 'Roulette',
      commission: '25.00',
      multiplier: 'x2.00',
      payoutValue: '+50.00',
    },
    {
      name: 'Anonymous',
      game: 'Roulette',
      commission: '25.00',
      multiplier: 'x2.00',
      payoutValue: '0.00',
    },
    {
      name: 'Anonymous',
      game: 'Roulette',
      commission: '25.00',
      multiplier: 'x2.00',
      payoutValue: '+50.00',
    },
    {
      name: 'Anonymous',
      game: 'Roulette',
      commission: '25.00',
      multiplier: 'x2.00',
      payoutValue: '+50.00',
    },
    {
      name: 'Anonymous',
      game: 'Roulette',
      commission: '25.00',
      multiplier: 'x2.00',
      payoutValue: '0.00',
    },
    {
      name: 'Anonymous',
      game: 'Roulette',
      commission: '25.00',
      multiplier: 'x2.00',
      payoutValue: '+50.00',
    },
    {
      name: 'Anonymous',
      game: 'Roulette',
      commission: '25.00',
      multiplier: 'x2.00',
      payoutValue: '+50.00',
    },
    {
      name: 'Anonymous',
      game: 'Roulette',
      commission: '25.00',
      multiplier: 'x2.00',
      payoutValue: '0.00',
    },
    {
      name: 'Anonymous',
      game: 'Roulette',
      commission: '25.00',
      multiplier: 'x2.00',
      payoutValue: '+50.00',
    },
    // Other payout objects...
  ];
  return (
    <div className={'payoutHistory pt-5'}>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='table-responsive mt-3'>
            <table className='table table-striped align-middle'>
              <thead>
                <tr>
                  <th scope='col'>Player</th>
                  <th scope='col'>Game</th>
                  <th scope='col'>Wager</th>
                  <th scope='col'>Multiplier</th>
                  <th scope='col'>Payout</th>
                </tr>
              </thead>
              <tbody>
                {payout.map((payout, index) => (
                  <tr key={index}>
                    <td className={'name'}>
                      <img src={refreeIcon} />
                      <span className='ms-1 '> {payout.name}</span>
                    </td>
                    <td className={'name'}>
                      <span className='ms-2'> {payout.game}</span>
                    </td>
                    <td>
                      <img src={gameToken} />
                      <span className='ms-2'>{payout.commission}</span>
                    </td>
                    <td>
                      <span>{payout.multiplier}</span>
                    </td>
                    <td className={parseFloat(payout.payoutValue) > 0 ? 'positive-payout' : ''}>
                      <img className='mx-2' src={gameToken} />
                      <span>{payout.payoutValue}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
