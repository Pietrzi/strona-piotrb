import React from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';

class Reactplayer extends React.Component {
    
    render() {
        return (
            <div className="player__holder">
                <div className='player-wrapper player8'>
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
                    {/* <div className="eng__desc">
                        Savings kept in harbors on the border of worlds can be seen with a naked eye.
                        Unqualified staff can be heard with a naked ear. But that's nothing.
                        The most important thing for a wanderer is to see the light in the gap and not to be scared.
                    </div> */}
                </div>
                <div 
                    className="back__arrow"
                    onClick={() => {
                        this.props.history.goBack();
                        this.props.movieArtYesHandler();
                        this.props.noFilmArt3Handler();
                    }}>
                </div>
            </div>
        )
    }
    
}

export default withRouter(Reactplayer);