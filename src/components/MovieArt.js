import React from 'react';
import sample from '../assets/33.mp4';

const MovieArt = () => {
    return (
        <video src={sample} autoPlay={true} loop={true} muted></video>
    )
}

export default MovieArt;