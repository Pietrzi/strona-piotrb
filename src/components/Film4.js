import React from 'react';
import Reactplayer from './ReactPlayer4';


const Film4 = (props) => {
    return (
        <div className="film__container">
            <div className="film__box">
                <Reactplayer movieYesHandler={props.movieYesHandler}/>
            </div>
        </div>
    )
}

export default Film4;