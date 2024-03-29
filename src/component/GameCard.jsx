import React, { useRef } from 'react';
import '../css/gameWrapper.css';

function GameCard({ games, gameTwo }) {
    const handleMouseEnter = (videoRef) => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = (videoRef) => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <>
            <div className="gameWrapper">
                <div className="row mx-0 mt-5">
                    <div className="col-lg-12">
                        <div className="h4">GAMBAGAMES ORIGINALS</div>
                    </div>
                    {games.map((game, index) => (
                        <div key={index} className={`col-lg-${game.columnSize} mb-3`}>
                            <div className="game position-relative" onMouseEnter={() => handleMouseEnter(game.videoRef)}
                                 onMouseLeave={() => handleMouseLeave(game.videoRef)}>
                                <div className="video-container">
                                    <video ref={game.videoRef} autoPlay muted poster={game.poster} playsInline className="video-element"
                                           draggable="true">
                                        <source src={game.videoSource} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="position-absolute w-100 p-3 top-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <span>{game.title}</span>
                                        <span>{game.feature}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-lg-3 mb-3">
                        <div className="comingSoon d-flex h-100 align-items-center justify-content-center flex-column">
                            <span className={"mb-0"}>MORE COMING</span>
                            <span className={"mb-0"}>SOON</span>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <div className="comingSoon d-flex h-100 align-items-center justify-content-center flex-column">
                            <span className={"mb-0"}>MORE COMING</span>
                            <span className={"mb-0"}>SOON</span>
                        </div>
                    </div>
                </div>
                <div className="row mx-0 mt-5">
                    <div className="col-lg-12">
                        <div className="h4">RUST EXCLUSIVE</div>
                    </div>
                    {gameTwo.map((game, index) => (
                        <div key={index} className={`col-lg-${game.columnSize} mb-3`}>
                            <div className="game position-relative" onMouseEnter={() => handleMouseEnter(game.videoRef)}
                                 onMouseLeave={() => handleMouseLeave(game.videoRef)}>
                                <div className="video-container">
                                    <video ref={game.videoRef} autoPlay muted poster={game.poster} playsInline className="video-element"
                                           draggable="true">
                                        <source src={game.videoSource} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="position-absolute w-100 p-3 top-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <span>{game.title}</span>
                                        <span>{game.feature}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default GameCard;
