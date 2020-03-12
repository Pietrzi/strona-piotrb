import React from 'react';
import ReactPlayer from 'react-player';
//import video from '../assets/3333.mp4';

const Reactplayer = () => {
    return (
        <div className="player__holder">
            <div className='player-wrapper'>
                <ReactPlayer
                className='react-player'
                url='https://vimeo.com/89629067'
                width='100%'
                height='100%'
                controls={true}
                />
            </div>
            <div className="player__film__title">
                egzul
            </div>
            <div className="player__film__description">
                <div className="pol__desc">
                    Egzul pracuje, żeby jeść. Je, żeby pracować. A kiedy nie je i nie pracuje to patrzy w księżyc.
                </div>
                <div className="eng__desc">
                    Egzul works to eat.
                    Eat to work.
                    And when he doesn't eat and work he looks at the moon.
                </div>
            </div>
        </div>
    )
}

export default Reactplayer;