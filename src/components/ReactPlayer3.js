import React from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';
//import video from '../assets/3333.mp4';

class Reactplayer extends React.Component {
    
    render() {
        return (
            <div className="player__holder">
                <div className='player-wrapper player3'>
                    <ReactPlayer
                    className='react-player'
                    url='https://vimeo.com/142388770'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </div>
                <div className="player__film__title">
                    floating on fire
                </div>
                <div className="player__film__description">
                    <div className="pol__desc">
                    Film braci Bartos to historia instalacji Floodwall poświęconej ofiarom huraganu Katrina autorstwa nowoorleańskiej artystki Jany Napoli. W 2005 roku, dwa miesiące po przejściu huraganu, Jana zaczęła pracę nad Zaporą, składającą się z kilkuset szuflad zabranych ze zniszczonych domów mieszkańców Nowego Orleanu. Instalacja była prezentowana w Nowym Jorku, Houston, Nowym Orleanie, Austin, Hamburgu, Mannheim, Berlinie oraz we Wrocławiu. W 2010 roku Jana postanowiła spalić Floodwall. Film ten miał premierę w New Orelan film festiwal.
                    </div>
                </div>
                <div 
                    className="back__arrow"
                    onClick={() => {
                        this.props.history.goBack();
                        this.props.noFilm3Handler();
                    }}>
                </div>
            </div>
        )
    }
    
}

export default withRouter(Reactplayer);