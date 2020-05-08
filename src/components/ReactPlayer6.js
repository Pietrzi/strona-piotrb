import React from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';

class Reactplayer extends React.Component {
    
    render() {
        return (
            <div className="player__holder">
                <div className='player-wrapper player6'>
                    <ReactPlayer
                    className='react-player'
                    url='https://vimeo.com/362426611?fbclid=IwAR2-EgIZF6zO-1rrLOKnw01loBDEsffW-IyzGa5ck6_nypLa0HO8NZGmaoY'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </div>
                <div className="player__film__title">
                    kulki
                </div>
                <div className="player__film__description">
                    <div className="pol__desc">
                    Film pt. KULKI Piotra Bartosa i Filipa Zawady opowiada o filozoficznych rozważaniach kulek. Ponieważ słowo filozofia nie kojarzy się z czymś komercyjnym, a kulki są mniejszymi celebrytami niż Tom Cruise animacja ta nie mogła nie powstać. Połączenie czegoś co jest nic nie warte i całkowicie nieznane tworzy wartość, którą ciężko jest zlekceważyć w XXI wieku.
                    </div>
                </div>
                <div 
                    className="back__arrow"
                    onClick={() => {
                        this.props.history.goBack();
                        this.props.movieArtYesHandler();
                        this.props.noFilmArt1Handler();
                    }}>
                </div>
            </div>
        )
    }
    
}

export default withRouter(Reactplayer);