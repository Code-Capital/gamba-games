import Settings from './components/Settings';
import SelfExclusion from './components/SelfExclusion';
import Profit from './components/Profit';
import GameHistory from './components/GameHistory';
import Transactions from './components/Transactions';
import avatar from '../../assets/avatar.png';
import diamond from '../../assets/diamond.svg';
import '../../css/userDetailsLayout.scss';
import { Nav, Tab } from 'react-bootstrap';
import CustomProgressBar from '../../component/CustomProgressBar';
import { useLocation, useNavigate } from 'react-router-dom';

export function Profile() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
              <Tab.Container activeKey={pathname} defaultActiveKey={'/profile'}>
                <Nav className={'border-0'} variant='tabs'>
                  {navLinks.map((item) => (
                    <Nav.Item key={item.title}>
                      <Nav.Link onClick={() => navigate(item.value)} eventKey={item.value}>
                        {item.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey='/profile'>
                    <Profit />
                  </Tab.Pane>
                  <Tab.Pane eventKey='/settings'>
                    <Settings />
                  </Tab.Pane>
                  <Tab.Pane eventKey='/selfExclusion'>
                    <SelfExclusion />
                  </Tab.Pane>
                  <Tab.Pane eventKey='/gameHistory'>
                    <GameHistory />
                  </Tab.Pane>
                  <Tab.Pane eventKey='/transactions'>
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

const navLinks = [
  { title: 'Profit', value: '/profile' },
  { title: 'Settings', value: '/settings' },
  { title: 'Self-Exclusion', value: '/selfExclusion' },
  { title: 'Game History', value: '/gameHistory' },
  { title: 'Transactions', value: '/transactions' },
];
