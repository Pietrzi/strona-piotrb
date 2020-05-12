import React from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';
//import video from '../assets/3333.mp4';

class Reactplayer extends React.Component {

    render() {
        return (
            <div className="player__holder">
                <div className='player-wrapper player7'>
                    <ReactPlayer
                    className='react-player'
                    url='https://vimeo.com/374765836'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </div>
                <div className="player__film__title">
                    znikam
                </div>
                <div className="player__film__description">
                    <div className="pol__desc">
                    Znikam to opowieść o miłości mistrza świata w skokach z trampoliny do najlepszej na naszym globie sportowej tancerki z szarfą. Czuć powtarzalność schematów, zachowań i używanych słów, które mają ratować ich związek.
                    </div>
                </div>
                <div 
                    className="back__arrow"
                    onClick={() => {
                        this.props.history.goBack();
                        this.props.movieArtYesHandler();
                        this.props.noFilmArt2Handler();
                    }}>
                </div>
            </div>
        )
    }
    
}

export default withRouter(Reactplayer);