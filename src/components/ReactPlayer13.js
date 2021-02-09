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
                    url='https://vimeo.com/504782304'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </div>
                <div className="player__film__title">
                    ewolucja gwiazd
                </div>
                <div className="player__film__description">
                    <div className="pol__desc">
                    Niezwykłe połączenie świata nauki i sztuki. Opowieść o narodzinach gwiazdy z gazów i pyłu Materii Międzygwiazdowej, przez spokojne życie na Ciągu Głównym, aż do śmierci determinowanej przez początkową masę gwiazdy. 
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