import React from 'react';
import sample from '../assets/3333.mp4';


const Movie = () => {
    return (
        <div className="full__screen__video__container">
            <video src={sample} autoPlay={true} loop={true} muted></video>
        </div>
    )
}

export default Movie;