import React from 'react';
import Reactplayer from './ReactPlayer6';


const FilmArt1 = (props) => {
    return (
        <div className="film__container">
            <div className="film__box">
                <Reactplayer movieArtYesHandler={props.movieArtYesHandler} noFilmArt1Handler={props.noFilmArt1Handler}/>
            </div>
        </div>
    )
}

export default FilmArt1;