import React from 'react';
import ReactPlayer from 'react-player';
import video from '../assets/3333.mp4';

class Reactplayer extends React.Component {

    render() {
        return (
            <div className='player-wrapper'>
                <ReactPlayer
                className='react-player'
                url={video}
                width='100%'
                height='100%'
                controls={true}
                />
                {/* <video className="video" src={video} controls/> */}
            </div>
        )
    }
    
}

export default Reactplayer;