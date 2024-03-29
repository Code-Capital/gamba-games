import React, { useState } from 'react';
import '../css/settings.scss';
import uk from '../assets/uk.svg';
import icon6 from '../assets/icon6.svg';
import icon7 from '../assets/icon7.svg';
import Prefrences from './Prefrences';
import LinkedPlatforms from './LinkedPlatforms';

function Settings() {
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

  return (
    <div>
      <div className='settingsWrapper py-5'>
        <div className='container px-0'>
          <div className='row mx-0 justify-content-between'>
            <div className='col-lg-12 pb-5'>
              <h4 className='mb-0'>Settings</h4>
            </div>
            <div className='col-lg-5'>
              <form className='row g-2'>
                {/* Form inputs */}
                <div className='col-lg-12 mb-3'>
                  <label className='form-label mb-3'>
                    TradeURL <span>You can find your tradelink </span>
                    <a href='/'>here</a>
                  </label>
                  <input type='email' className='form-control' placeholder='Example@email.com' />
                </div>
                <div className='col-lg-12 mb-3'>
                  <label className='form-label mb-3'>Client seedf</label>
                  <input type='text' className='form-control' placeholder='changethisplaceholder' />
                </div>
                <div className='col-lg-7 mb-3'>
                  {/* Language selection */}
                  <div className='select position-relative'>
                    <div className='optionClick d-flex align-items-center justify-content-between rounded' onClick={toggleOptions}>
                      <div className='d-flex gap-2'>
                        <img src={uk} alt='UK flag' />
                        <span>{selectedOption.language}</span>
                      </div>
                      <div className='d-flex gap-2'>
                        <img src={icon6} alt='Icon 6' />
                        <span>{selectedOption.value}</span>
                        <img src={icon7} alt='Icon 7' />
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
                                <img src={uk} alt='UK flag' />
                                <span>{option.language}</span>
                              </div>
                              <div className='d-flex gap-2 w-25'>
                                <img src={icon6} alt='Icon 6' />
                                <span>{option.value}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* Save and Cancel buttons */}
                <div className='col-6 col-lg-3'>
                  <button className='btn w-100'>SAVE</button>
                </div>
                <div className='col-6 col-lg-2'>
                  <button className='btn'>CANCEL</button>
                </div>
              </form>
            </div>
            <div className='col-lg-6'>
              {/* Bio textarea */}
              <div className='bio'>
                <label className='form-label'>Bio </label>
                <textarea className='form-control p-3' rows='10' placeholder='Profile Description'></textarea>
              </div>
            </div>
          </div>
          {/* Nested components */}
          <Prefrences />
          <LinkedPlatforms />
        </div>
      </div>
    </div>
  );
}

export default Settings;
