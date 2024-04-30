import gameToken from '../../../assets/gameToken.svg';
import '../../../css/transacionHistory.scss';

function Transactions() {
  const transactions = [
    {
      id: '000001',
      type: 'Coinflip',
      method: 'gameToken',
      amount: '10.00',
      status: 'COMPLETE',
      time: '10:30   01/10/2024 do',
    },
    {
      id: '000001',
      type: 'Coinflip',
      method: 'gameToken',
      amount: '10.00',
      status: 'COMPLETE',
      time: '10:30   01/10/2024 do',
    },
    {
      id: '000001',
      type: 'Coinflip',
      method: 'gameToken',
      amount: '10.00',
      status: 'COMPLETE',
      time: '10:30   01/10/2024 do',
    },
    {
      id: '000001',
      type: 'Coinflip',
      method: 'gameToken',
      amount: '10.00',
      status: 'COMPLETE',
      time: '10:30   01/10/2024 do',
    },
    {
      id: '000002',
      type: 'Coinflip',
      method: 'gameToken',
      amount: '10.00',
      status: 'PENDING',
      time: '10:30   01/10/2024 do',
    },
    {
      id: '000001',
      type: 'Coinflip',
      method: 'gameToken',
      amount: '10.00',
      status: 'COMPLETE',
      time: '10:30   01/10/2024 do',
    },
    {
      id: '000001',
      type: 'Coinflip',
      method: 'gameToken',
      amount: '10.00',
      status: 'COMPLETE',
      time: '10:30   01/10/2024 do',
    },
    {
      id: '000003',
      type: 'Coinflip',
      method: 'gameToken',
      amount: '10.00',
      status: 'FAILED',
      time: '10:30   01/10/2024 do',
    },
    {
      id: '000001',
      type: 'Coinflip',
      method: 'gameToken',
      amount: '10.00',
      status: 'COMPLETE',
      time: '10:30   01/10/2024 do',
    },
    {
      id: '000001',
      type: 'Coinflip',
      method: 'gameToken',
      amount: '10.00',
      status: 'COMPLETE',
      time: '10:30   01/10/2024 do',
    },
    {
      id: '000001',
      type: 'Coinflip',
      method: 'gameToken',
      amount: '10.00',
      status: 'COMPLETE',
      time: '10:30   01/10/2024 do',
    },
  ];

  return (
    <div>
      <div className='transactionHistory pt-5'>
        <div className='row mx-0'>
          <div className='col-lg-12'>
            <h3>Transactions</h3>
            <div className='table-responsive mt-3'>
              <table className='table table-striped align-middle'>
                <thead>
                  <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Type</th>
                    <th scope='col'>Method</th>
                    <th scope='col'>Amount</th>
                    <th scope='col'>Status</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index}>
                      <td>{transaction.id}</td>
                      <td>{transaction.type}</td>
                      <td>
                        <img src={gameToken} alt='' />
                        <span className='ms-2'>{transaction.amount}</span>
                      </td>
                      <td>
                        <img src={gameToken} alt='' />
                        <span className='ms-2'>{transaction.amount}</span>
                      </td>
                      <td className={transaction.status.toLowerCase()}>{transaction.status}</td>
                      <td>{transaction.time}</td>
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

export default Transactions;
