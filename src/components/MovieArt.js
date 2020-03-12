import React from 'react';
import sample from '../assets/3333.mp4';

const MovieArt = () => {
    return (
        <video src={sample} autoPlay={true} loop={true} muted></video>
        // <div className="moviesart__container">
        //     <div className="moviesart__box">
        //         <div className="movieart__display"></div>
        //         <div className="movieart__display"></div>
        //         <div className="movieart__display"></div>
        //         <div className="movieart__display"></div>
        //         <div className="movieart__display"></div>
        //         <div className="movieart__display"></div>
        //         <div className="movieart__display"></div>
        //         <div className="movieart__display"></div>
        //     </div>
        // </div>
    )
}

export default MovieArt;