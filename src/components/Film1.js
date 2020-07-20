import React from 'react';
import Reactplayer from './ReactPlayer1';


const Film1 = () => {
    return (
        <div className="movie__background_black">
            <div className="film__container">
                <div className="film__box">
                    <Reactplayer />
                </div>
            </div>
        </div>
    )
}

export default Film1;