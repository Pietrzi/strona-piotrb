import React from 'react';
import sample from '../assets/Surfer1.mp4';

const Main = () => {
    return (
        <video src={sample} autoPlay="true" loop="true"></video>
    )
}

export default Main;