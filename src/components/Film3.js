import React from 'react';
import Reactplayer from './ReactPlayer3';


const Film3 = (props) => {
    return (
        <div className="movie__background_black">
            <div className="film__container">
                <div className="film__box">
                    <Reactplayer noFilm1Handler={props.noFilm1Handler}/>
                </div>
            </div>
        </div>
    )
}

export default Film3;