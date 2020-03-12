import React from 'react';
import ReactPlayer from 'react-player';
//import video from '../assets/3333.mp4';

const Reactplayer = () => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            url='https://vimeo.com/270135300'
            width='100%'
            height='100%'
            controls={true}
            />
        </div>
    )
}

export default Reactplayer;