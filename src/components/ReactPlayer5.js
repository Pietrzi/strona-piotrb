import React from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';

class Reactplayer extends React.Component {
    
    render() {
        return (
            <div className="player__holder">
                <div className='player-wrapper player5'>
                    <ReactPlayer
                    className='react-player'
                    url='https://vimeo.com/204944898'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </div>
                <div className="player__film__title">
                    ścieżki tekstu
                </div>
                <div className="player__film__description">
                    <div className="pol__desc">
                    "Poezja tradycyjna opisuje obraz. Poezja konkretna pisze obrazem" Stanisław Dróżdż.
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
                        this.props.movieYesHandler();
                        this.props.noFilm5Handler();
                    }}>
                </div>
            </div>
        )
    }
    
}

export default withRouter(Reactplayer);