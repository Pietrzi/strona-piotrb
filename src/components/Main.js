import React from 'react';
import sample from '../assets/3333.mp4';

const Main = () => {
    return (
        <video src={sample} autoPlay={true} loop={true} muted></video>
    )
}

export default Main;