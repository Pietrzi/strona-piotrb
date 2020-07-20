import React from 'react';
import Reactplayer from './ReactPlayer4';


const Film4 = (props) => {
    return (
        <div className="film__container">
            <div className="film__box">
                <Reactplayer noFilm4Handler={props.noFilm4Handler}/>
            </div>
        </div>
    )
}

export default Film4;