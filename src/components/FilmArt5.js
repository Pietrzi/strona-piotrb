import React from 'react';
import Reactplayer from './ReactPlayer10';


const FilmArt5 = (props) => {
    return (
        <div className="film__container">
            <div className="film__box">
                <Reactplayer movieArtYesHandler={props.movieArtYesHandler} noFilmArt5Handler={props.noFilmArt5Handler}/>
            </div>
        </div>
    )
}

export default FilmArt5;