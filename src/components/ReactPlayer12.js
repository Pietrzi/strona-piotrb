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
                    url='https://vimeo.com/474647441'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </div>
                <div className="player__film__title">
                    buzki
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