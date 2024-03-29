import React, { useState } from 'react';
import '../css/selfExlusion.scss';

function SelfExclusion() {
  const durations = ['1 Day', '2 Days', '5 Days', '1 Week', '2 Weeks', '5 Weeks'];

  const [selectedDuration, setSelectedDuration] = useState(''); // State to store selected duration
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox status

  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);
  };

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className='selfExclusion pt-5'>
        <div className='row mx-0'>
          <div className='col-lg-6 mb-5'>
            <h3 className='mb-3'>Self-Exclusion</h3>
            <p>
              At GambaGames, we prioritize responsible gaming. With our self-exclusion option, you can temporarily pause wagering, deposits,
              and certain features. Withdrawals and site access remain available. Keep in mind, self-exclusion is irreversible. For a
              permanent ban, contact our support team. Play responsibly!
            </p>
          </div>
          <div className='col-lg-12'>
            <h3 className='mb-3'>Choose Duration</h3>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-3'>
              {durations.map((duration, index) => (
                <button
                  key={index}
                  className={`btn p-3 flex-grow-1 ${selectedDuration === duration ? 'active' : ''}`}
                  onClick={() => handleDurationSelect(duration)}
                >
                  {duration}
                </button>
              ))}
            </div>
            <label className='form-check-label mt-3'>
              <input className='form-check-input' type='checkbox' value={isChecked} onChange={handleCheckboxChange} />
              <span className='ms-2'>I acknowledge that this action is irreversible and cannot be undone by anybody.</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelfExclusion;
