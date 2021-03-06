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
                    url='https://vimeo.com/497429054'
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
                    Video-artową realizację inspirowaną twórczością Stanisława Dróżdża, z udziałem Chóru Komentujących Wrocławian. "Poezja tradycyjna opisuje obraz. Poezja konkretna pisze obrazem" Stanisław Dróżdż. 
                    </div>
                </div>
                <div 
                    className="back__arrow"
                    onClick={() => {
                        this.props.history.goBack();
                    }}>
                </div>
            </div>
        )
    }
    
}

export default withRouter(Reactplayer);