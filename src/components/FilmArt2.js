import React from 'react';
import Reactplayer from './ReactPlayer7';


const FilmArt2 = (props) => {
    return (
        <div className="film__container">
            <div className="film__box">
                <Reactplayer movieArtYesHandler={props.movieArtYesHandler} noFilmArt2Handler={props.noFilmArt2Handler}/>
            </div>
        </div>
    )
}

export default FilmArt2;