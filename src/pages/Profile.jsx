import Settings from '../component/Settings.jsx';
import SelfExclusion from '../component/SelfExclusion.jsx';
import Profit from '../component/Profit.jsx';
import GameHistory from '../component/GameHistory.jsx';
import Transactions from '../component/Transactions.jsx';
import avatar from '../assets/avatar.png';
import diamond from '../assets/diamond.svg';
import '../css/userDetailsLayout.scss';
import { Nav, Tab } from 'react-bootstrap';
import CustomProgressBar from '../component/CustomProgressBar.jsx';

export function Profile() {
  return (
    <div>
      <div className='tabPagesLayoutWrapper'>
        <div className='container px-0 py-5'>
          <div className='row mx-0 mb-5'>
            <div className='col-lg-8'>
              <div className='profileWrapper d-flex gap-3'>
                <img src={avatar} />
                <div>
                  <h2>
                    JONAS VIAENE <span>#123450</span>
                  </h2>
                  <p>
                    <span>Joined</span> September 11th 2024
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='d-flex gap-4'>
                <div className={'d-flex gap-3'}>
                  <img src={diamond} alt='' />
                  <div>
                    <p className={'mb-0'}>Global Rank</p>
                    <h5>Squire</h5>
                  </div>
                </div>
                <div className={'d-flex gap-3'}>
                  <img src={diamond} alt='' />
                  <div>
                    <p className={'mb-0'}>Affiliate Rank</p>
                    <h5>Squire</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mx-0 mb-5'>
            <div className='col-lg-12'>
              <div className='d-flex justify-content-between'>
                <div className='number d-flex align-items-end gap-3 mb-0'>
                  <span className={'bg'}>1</span> <span>Squire</span>{' '}
                </div>
                <div className='number'>XXXXX/XXXXX XP</div>
                <div className='number d-flex align-items-end gap-3 mb-0'>
                  {' '}
                  <span>Squire</span> <span className={'bg'}>2</span>
                </div>
              </div>
              <CustomProgressBar />
            </div>
          </div>
          <div className='row mx-0'>
            <div className='col-lg-12'>
              <Tab.Container id='my-tabs' defaultActiveKey='profit'>
                <Nav className={'border-0'} variant='tabs'>
                  <Nav.Item>
                    <Nav.Link eventKey='profit'>Profit</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='settings'>Settings</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='selfExclusion'>Self-Exclusion</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='gameHistory'>Game History</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='transactions'>Transactions</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey='profit'>
                    <Profit />
                  </Tab.Pane>
                  <Tab.Pane eventKey='settings'>
                    <Settings />
                  </Tab.Pane>
                  <Tab.Pane eventKey='selfExclusion'>
                    <SelfExclusion />
                  </Tab.Pane>
                  <Tab.Pane eventKey='gameHistory'>
                    <GameHistory />
                  </Tab.Pane>
                  <Tab.Pane eventKey='transactions'>
                    <Transactions />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
