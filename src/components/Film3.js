import React from 'react';
import Reactplayer from './ReactPlayer3';


const Film3 = (props) => {
    return (
        <div className="film__container">
            <div className="film__box">
                <Reactplayer movieYesHandler={props.movieYesHandler}/>
            </div>
        </div>
    )
}

export default Film3;