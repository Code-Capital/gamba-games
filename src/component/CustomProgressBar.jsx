import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/CustomProgressBar.css'; // Import your custom CSS file for styling

const CustomProgressBar = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [progress, setProgress] = useState(25); // Set the progress to 25%

    const handleProgressBarHover = (event) => {
        const filledWidth = event.target.offsetWidth * (progress / 100);
        // Position the tooltip directly below the filled area
        const posX = event.target.getBoundingClientRect().left;
        const posY = event.target.getBoundingClientRect().top + event.target.offsetHeight + 5; // Adjust spacing as needed
        setTooltipPosition({ x: posX, y: posY });
    };

    const CustomTooltip = () => {
        return (
            <div className="custom-tooltip px-4 py-2 rounded" style={{ left: tooltipPosition.x, top: tooltipPosition.y }}>
                <span className={"position-relative"}></span>
                {progress}%
            </div>
        );
    };

    return (
        <div className="position-relative">
            <div className="position-relative">
                <OverlayTrigger
                    placement="bottom" // Position the tooltip below the progress bar
                    overlay={<CustomTooltip />}
                    show={showTooltip}
                    style={{ position: 'absolute', left: tooltipPosition.x, top: tooltipPosition.y }}
                >
                    <ProgressBar
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseMove={(e) => handleProgressBarHover(e)}
                        onMouseLeave={() => setShowTooltip(false)}
                        animated
                        now={progress}
                    />
                </OverlayTrigger>
            </div>
        </div>
    );
};

export default CustomProgressBar;
