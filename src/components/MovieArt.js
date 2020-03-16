import React from 'react';
import sample from '../assets/33.mp4';

const MovieArt = () => {
    return (
        <div className="full__screen__video__container">
            <video src={sample} autoPlay={true} loop={true} muted></video>
        </div>
    )
}

export default MovieArt;