import React from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';

class Reactplayer extends React.Component {
    
    render() {
        return (
            <div className="player__holder">
                <div className='player-wrapper player11'>
                    <ReactPlayer
                    className='react-player'
                    url='https://vimeo.com/481001512'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </div>
                <div className="player__film__title">
                    tangere
                </div>
                <div className="player__film__description">
                    <div className="pol__desc">
                    Nie można tego zatrzymać, tak jak nie można zatrzymać w połowie drogi lecącego w dół kamyczka. Film można zobaczyć na CDA premium 
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