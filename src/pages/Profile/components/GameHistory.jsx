import '../../../css/gameHistorty.scss';
import gameToken from '../../../assets/gameToken.svg';

function GameHistory() {
  const games = [
    {
      id: '000001',
      gameType: 'Coinflip',
      wager: '10.00',
      payout: '20.00',
      time: '10:30   01/10/2024 do',
    },
    {
      id: '000001',
      gameType: 'Coinflip',
      wager: '10.00',
      payout: '20.00',
      time: '10:30   01/10/2024 do',
    },
    {
      id: '000001',
      gameType: 'Coinflip',
      wager: '10.00',
      payout: '20.00',
      time: '10:30   01/10/2024 do',
    },
    {
      id: '000001',
      gameType: 'Coinflip',
      wager: '10.00',
      payout: '20.00',
      time: '10:30   01/10/2024 do',
    },
    {
      id: '000001',
      gameType: 'Coinflip',
      wager: '10.00',
      payout: '20.00',
      time: '10:30   01/10/2024 do',
    },
  ];

  return (
    <div>
      <div className='gameHistory pt-5'>
        <div className='row mx-0'>
          <div className='col-lg-12'>
            <h3>All Games</h3>
            <div className='table-responsive mt-3'>
              <table className='table table-striped align-middle'>
                <thead>
                  <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Game</th>
                    <th scope='col'>Wager</th>
                    <th className='width' scope='col'>
                      Payout
                    </th>
                    <th scope='col'>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {games.map((game, index) => (
                    <tr key={index}>
                      <td>{game.id}</td>
                      <td>{game.gameType}</td>
                      <td>
                        <img src={gameToken} alt='' />
                        <span className='ms-2'>{game.wager}</span>
                      </td>
                      <td>
                        <img src={gameToken} alt='' />
                        <span className='ms-2'>{game.payout}</span>
                      </td>
                      <td>{game.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameHistory;
