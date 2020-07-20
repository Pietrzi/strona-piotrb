import React from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';
//import video from '../assets/3333.mp4';

class Reactplayer extends React.Component {

    render() {
        return (
            <div className="player__holder">
                <div className='player-wrapper player2'>
                    <ReactPlayer
                    className='react-player'
                    url='https://vimeo.com/89629067'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </div>
                <div className="player__film__title">
                    egzul
                </div>
                <div className="player__film__description">
                    <div className="pol__desc">
                    Film ten zdobył nagrodę za najlepszy film krótkometrażowy na festiwalu ShortCutz Amsterdam. Kontemplacyjny film przypominający nieco dokonania małżeństwa Sasnalów bądź Andrzeja Jakimowskiego. Przekonujące studium alienacji, świadectwo rosnącej paranoi, a może pozbawiony protekcjonalnych uproszczeń portret outsidera? Na uwagę zasługuje również wrażliwość plastyczna autorów, którzy potrafią uwznioślić rzekomą brzydotę przedstawionych miejsc i sprawić, by były one hipnotyzujące pisał Piotr Czerkawski. Film możemy zobaczyć na CDA premium. 
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