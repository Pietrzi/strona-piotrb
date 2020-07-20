import React from 'react';
import Reactplayer from './ReactPlayer9';


const FilmArt4 = (props) => {
    return (
        <div className="film__container">
            <div className="film__box">
                <Reactplayer noFilmArt4Handler={props.noFilmArt4Handler}/>
            </div>
        </div>
    )
}

export default FilmArt4;