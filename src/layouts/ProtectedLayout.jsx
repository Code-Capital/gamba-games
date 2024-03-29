import '../css/Pages/MainPage.scss';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header';
import SideBarArrow from '../component/Icons/SideBarArrow';
import ChatSidebar from '../component/ChatSidebar';
import Footer from '../component/Footer';
import { useState } from 'react';

export const ProtectedLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <Header />
      <div className={`d-flex align-items-start flexWrapper ${isOpen ? 'active' : ''}`}>
        <div className='chatSidebar py-2 position-relative top-50'>
          <button className={'btn Sidebtn position-absolute'} onClick={() => setIsOpen((flag) => !flag)}>
            <SideBarArrow />
          </button>
          <ChatSidebar />
        </div>
        <div className={`contentWrapper px-0 px-md-3 px-lg-5 ${!isOpen ? 'active' : ''}`}>
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};
