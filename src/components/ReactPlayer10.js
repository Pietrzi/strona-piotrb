import React from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';

class Reactplayer extends React.Component {

    render() {
        return (
            <div className="player__holder">
                <div className='player-wrapper player9'>
                    <ReactPlayer
                    className='react-player'
                    url='https://vimeo.com/245715774'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </div>
                <div className="player__film__title">
                    flagi
                </div>
                <div className="player__film__description">
                    <div className="pol__desc">
                        Dzień flagi.
                    </div>
                </div>
                <div 
                    className="back__arrow"
                    onClick={() => {
                        this.props.history.goBack();
                        this.props.movieArtYesHandler();
                        this.props.noFilmArt5Handler();
                    }}>
                </div>
            </div>
        )
    }
    
}

export default withRouter(Reactplayer);