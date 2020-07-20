import React from 'react';
import Reactplayer from './ReactPlayer7';


const FilmArt2 = (props) => {
    return (
        <div className="movie__background_black">
            <div className="film__container">
                <div className="film__box">
                    <Reactplayer noFilm1Handler={props.noFilm1Handler}/>
                </div>
            </div>
        </div>
    )
}

export default FilmArt2;