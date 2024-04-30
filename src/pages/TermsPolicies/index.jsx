import '../../css/tabPagesLayout.scss';
import { Nav, Tab } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { Privacy } from './components/Privacy';
import { Affiliates } from './components/Affiliates';
import { TermsOfUse } from './components/TermsOfUse';
import { Faqs } from './components/Faqs';
import { Support } from './components/Support';
import { Fairness } from './components/Fairness';

export function TermsPolicies() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <div className='tabPagesLayoutWrapper '>
        <div className='container px-0 py-5'>
          <div className='py-5 text-center h1'>
            {pathname.includes('privacy') && (
              <span>
                PRIVACY<span>POLICY</span>
              </span>
            )}
            {pathname.includes('affiliates') && <span>AFFILIATES</span>}
            {pathname.includes('terms') && (
              <span>
                TERMS<span>OF</span>SERVICE
              </span>
            )}
            {pathname.includes('faq') && (
              <span>
                FREQUENTLY<span>ASKED</span>QUESTIONS
              </span>
            )}
            {pathname.includes('support') && <span>SUPPORT</span>}
            {pathname.includes('fairness') && (
              <span>
                PROVABLY<span>FAIR</span>
              </span>
            )}
          </div>
          <div className='row mx-0'>
            <div className='col-lg-12'>
              <Tab.Container activeKey={pathname} id='my-tabs' defaultActiveKey='/privacy-policy'>
                <Nav className={'border-0'} variant='tabs'>
                  {tabs.map((item) => (
                    <Nav.Item key={item.title}>
                      <Nav.Link onClick={() => navigate(item.value)} eventKey={item.value}>
                        {item.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey='/privacy-policy'>
                    <Privacy />
                  </Tab.Pane>
                  <Tab.Pane eventKey='/affiliates'>
                    <Affiliates />
                  </Tab.Pane>
                  <Tab.Pane eventKey='/terms-of-service'>
                    <TermsOfUse />
                  </Tab.Pane>
                  <Tab.Pane eventKey='/faq'>
                    <Faqs />
                  </Tab.Pane>
                  <Tab.Pane eventKey='/support'>
                    <Support />
                  </Tab.Pane>
                  <Tab.Pane eventKey='/fairness'>
                    <Fairness />
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

const tabs = [
  { title: 'Privacy Policy', value: '/privacy-policy' },
  { title: 'Affiliates', value: '/affiliates' },
  { title: 'Terms of Service', value: '/terms-of-service' },
  { title: 'FAQ', value: '/faq' },
  { title: 'Support', value: '/support' },
  { title: 'Fairness', value: '/fairness' },
];
