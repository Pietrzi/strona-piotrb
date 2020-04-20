import React from 'react';
import Reactplayer from './ReactPlayer1';


const Film1 = (props) => {
    return (
        <div className="film__container">
            <div className="film__box">
                <Reactplayer movieYesHandler={props.movieYesHandler} noFilm1Handler={props.noFilm1Handler}/>
            </div>
        </div>
    )
}

export default Film1;