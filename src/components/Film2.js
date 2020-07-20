import React from 'react';
import Reactplayer from './ReactPlayer2';


const Film2 = (props) => {
    return (
        <div className="film__container">
            <div className="film__box">
                <Reactplayer noFilm2Handler={props.noFilm2Handler}/>
            </div>
        </div>
    )
}

export default Film2;