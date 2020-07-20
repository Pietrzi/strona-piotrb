import React from 'react';
import Reactplayer from './ReactPlayer8';


const FilmArt3 = (props) => {
    return (
        <div className="film__container">
            <div className="film__box">
                <Reactplayer noFilmArt3Handler={props.noFilmArt3Handler}/>
            </div>
        </div>
    )
}

export default FilmArt3;