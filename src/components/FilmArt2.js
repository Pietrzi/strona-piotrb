import React from 'react';
import Reactplayer from './ReactPlayer6';


const FilmArt2 = (props) => {
    return (
        <div className="film__container">
            <div className="film__box">
                <Reactplayer movieArtYesHandler={props.movieArtYesHandler}/>
            </div>
        </div>
    )
}

export default FilmArt2;