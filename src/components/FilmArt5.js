import React from 'react';
import Reactplayer from './ReactPlayer10';


const FilmArt5 = (props) => {
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

export default FilmArt5;