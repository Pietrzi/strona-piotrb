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
                    url='https://vimeo.com/245715774'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </div>
                <div className="player__film__title">
                    flagi
                </div>
                {/* <div className="player__film__description">
                    <div className="pol__desc">
                        Egzul pracuje, żeby jeść. Je, żeby pracować. A kiedy nie je i nie pracuje to patrzy w księżyc.
                    </div>
                    <div className="eng__desc">
                        Egzul works to eat.
                        Eat to work.
                        And when he doesn't eat and work he looks at the moon.
                    </div>
                </div> */}
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