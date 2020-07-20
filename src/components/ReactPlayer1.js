import React from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';

class Reactplayer extends React.Component {
    
    render() {
        return (
            <div className="player__holder">
                <div className='player-wrapper player1'>
                    <ReactPlayer
                    className='react-player'
                    url='https://vimeo.com/270135300'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </div>
                <div className="player__film__title">
                    ach gdyby tak błądzę
                </div>
                <div className="player__film__description">
                    <div className="pol__desc">
                    Oszczędności w portach na granicy światów widać gołym okiem, gołym uchem słychać niewykwalifikowany personel. Ale nic to, najważniejsze dla wędrowca to światło w szczelinie zobaczyć i się nie przestraszyć. Scenariusz na motywach opowiadania Tomka Tryzny pod tytułem "Port na granicy światów", inspirowany Tybetańską Księga Umarłych.
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