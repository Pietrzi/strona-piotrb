import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';


const Film = () => {
    return (
        <div className="film__container">
            <div className="film__box">
            <Video autoPlay loop muted
                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                poster="../assets/telko.png"
                onCanPlayThrough={() => {
                    // Do stuff
                }}>
                <source src="../assets/3333.mp4" type="video/webm" />
                <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
            </Video>
            </div>
        </div>
    )
}

export default Film;