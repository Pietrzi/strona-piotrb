import React from 'react';
import sample from '../assets/vide.mp4';


const Movie = () => {
    return (
        <video src={sample} autoPlay={true} loop={true} muted></video>
    )
}

export default Movie;