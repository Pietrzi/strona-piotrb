import React from 'react';
import sample from '../assets/pasek.mp4';

const MovieArtBackground = () => {
    return (
        <div className="full__screen__video__container">
            <video src={sample} autoPlay={true} loop={true} muted></video>
        </div>
    )
}

export default MovieArtBackground;