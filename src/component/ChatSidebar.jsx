import React, { useState } from 'react';
import LogoTilted from './Icons/LogoTilted.jsx';
import user from '../assets/user.png';
import '../css/chatSidebar.scss';
import uk from '../assets/uk.svg';
import icon6 from '../assets/icon6.svg';
import icon7 from '../assets/icon7.svg';
import ChatModal from './ChatModal.jsx';
import LoginModal from './LoginModal.jsx';

function ChatSidebar(props) {
  const userData = [
    { id: 1, image: user, username: 'Piewzzz', rank: 19, time: '17:48', text: 'I just won 6x in a row! I can’t lose!', color: 'green' },
    { id: 2, image: user, username: 'AnotherUser', rank: 22, time: '18:00', text: 'Having a great time here!', color: 'golden' },
    { id: 3, image: user, username: 'AnotherUser', rank: 22, time: '18:00', text: 'Having a great time here!', color: 'white' },
    { id: 4, image: user, username: 'AnotherUser', rank: 22, time: '18:00', text: 'Having a great time here!', color: 'purple' },
    { id: 5, image: user, username: 'AnotherUser', rank: 22, time: '18:00', text: 'Having a great time here!', color: 'grey' },
    { id: 6, image: user, username: 'AnotherUser', rank: 22, time: '18:00', text: 'Having a great time here!', color: 'green' },
    { id: 7, image: user, username: 'AnotherUser', rank: 22, time: '18:00', text: 'Having a great time here!', color: 'green' },
    { id: 8, image: user, username: 'AnotherUser', rank: 22, time: '18:00', text: 'Having a great time here!', color: 'green' },
    { id: 9, image: user, username: 'AnotherUser', rank: 22, time: '18:00', text: 'Having a great time here!', color: 'green' },
    // Add more user data objects as needed
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ language: 'English', value: '396' });

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (language, value) => {
    setSelectedOption({ language, value });
    setIsOpen(false);
  };

  // Array of language options
  const languageOptions = [
    { language: 'English', value: '396' },
    { language: 'Russian', value: '146' },
    { language: 'Chinese', value: '368' },
    { language: 'Turkish', value: '142' },
  ];
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const handleCloseChatModal = () => setShowChatModal(false);
  const handleShowChatModal = () => setShowChatModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowLoginModal = () => setShowLoginModal(true);
  return (
    <div>
      <div className='chatList position-relative '>
        <div className='select'>
          <div className='optionClick d-flex align-items-center justify-content-between rounded ' onClick={toggleOptions}>
            <div className='d-flex gap-2'>
              <img src={uk} />
              <span>{selectedOption.language}</span>
            </div>
            <div className='d-flex gap-2'>
              <img src={icon6} />
              <span>{selectedOption.value}</span>
              <img src={icon7} />
            </div>
          </div>
          {isOpen && (
            <div className='optionOpener mt-1 position-absolute w-100'>
              <div className='optionWrapper'>
                {languageOptions.map((option, index) => (
                  <div
                    className={`option d-flex justify-content-between ${option.language}`}
                    key={index}
                    onClick={() => handleOptionClick(option.language, option.value)}
                  >
                    <div className='d-flex gap-2 flex-grow-1 w-75'>
                      <img src={uk} />
                      <span>{option.language}</span>
                    </div>
                    <div className='d-flex gap-2 w-25'>
                      <img src={icon6} />
                      <span>{option.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <ul className={'list-unstyled'}>
          {userData.map((user, index) => (
            <li key={index} className={'user d-flex gap-2 align-items-start px-3 py-2 my-3'}>
              <div className='userImg position-relative'>
                <div className='position-absolute'>
                  <LogoTilted />
                </div>
                <img src={user.image} alt={user.username} />
              </div>
              <div className={'userDetails'}>
                <div className={'d-flex gap-2 align-items-center justify-content-between'}>
                  <div className={'rank'}>
                    <span className={`${user.color}`}>{user.rank}</span>
                    <span className={'ms-2'}>{user.username}</span>
                  </div>
                  <div className={'time'}>{user.time}</div>
                </div>
                <div className={'text'}>{user.text}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className='chatbutton px-3'>
          <button onClick={handleShowLoginModal} className={'w-100 btn'}>
            Login to chat
          </button>
          <div className='d-flex align-items-center justify-content-between mt-2'>
            <span onClick={handleShowChatModal}>Chat Rules</span>
            <span>
              <img className={'me-2'} src={icon6} />
              683 PLAYERS ONLINE
            </span>
          </div>
          <ChatModal show={showChatModal} handleClose={handleCloseChatModal} />
          <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />
        </div>
      </div>
    </div>
  );
}

export default ChatSidebar;
