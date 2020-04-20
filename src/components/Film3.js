import React from 'react';
import Reactplayer from './ReactPlayer3';


const Film3 = (props) => {
    return (
        <div className="film__container">
            <div className="film__box">
                <Reactplayer movieYesHandler={props.movieYesHandler} noFilm3Handler={props.noFilm3Handler}/>
            </div>
        </div>
    )
}

export default Film3;