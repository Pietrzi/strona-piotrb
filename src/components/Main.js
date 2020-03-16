import React from 'react';
import sample from '../assets/vid.mp4';

const Main = () => {
    return (
        <div className="full__screen__video__container">
            <video src={sample} autoPlay={true} loop={true} muted></video>
        </div>
    )
}

export default Main;