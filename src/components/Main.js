import React from 'react';
import sample from '../assets/vid.mp4';

const Main = () => {
    return (
        <video src={sample} autoPlay={true} loop={true} muted></video>
    )
}

export default Main;