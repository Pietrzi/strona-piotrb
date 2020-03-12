import React from 'react';
import sample from '../assets/3333.mp4';


const Movie = () => {
    return (
        <video src={sample} autoPlay={true} loop={true} muted></video>
    )
}

export default Movie;