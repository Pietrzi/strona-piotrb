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
                    url='https://vimeo.com/507050183'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </div>
                <div className="player__film__title">
                    fantasy on prokofiev's
                </div>
                <div className="player__film__description">
                    <div className="pol__desc">
                    Wideo klip do utworu Katarzyny Borek i Vojto Montuer FANTASY ON PROKOFIEV'S VIOLIN SONATE OP.80 który był nominowany do nagrody YACH 2014 
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