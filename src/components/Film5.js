import React from 'react';
import Reactplayer from './ReactPlayer5';


const Film5 = (props) => {
    return (
        <div className="film__container">
            <div className="film__box">
                <Reactplayer noFilm5Handler={props.noFilm5Handler}/>
            </div>
        </div>
    )
}

export default Film5;