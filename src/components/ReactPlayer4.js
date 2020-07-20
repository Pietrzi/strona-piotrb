import React from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';
//import video from '../assets/3333.mp4';

class Reactplayer extends React.Component {
    
    render() {
        return (
            <div className="player__holder holder__zaba">
                <div className='player-wrapper player4'>
                    <ReactPlayer
                    className='react-player'
                    url='https://vimeo.com/405161323'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </div>
                <div className="player__film__title zabaplt">
                    chłopiec z żabą
                </div>
                <div className="player__film__description zabapldb">
                    <div className="pol__desc zabaplt">
                    Film w 2014 roku główną nagrodę za najlepszy film na festiwalu T-Mobile NOwe Horyzonty w konkursie powiększenie. Film ten opowiada o Trzech latach z życia kilku dzieciaków, myjkarzy spod centrum handlowego Magnolia. Ich życiorysy bardzo podobne, matka nie żyje, ojciec pije, albo ojciec za granicą, matka nie daje sobie rady. W ich świecie nie ma dorosłych, lub odgrywają marginalną rolę. Chłopcy są jak Indianie, a samochody wyjeżdżające spod Magnoli to bizony, na które polują czyściciele szyb. Mają na Burger Kinga,mają na KFC, mają na piwo i mają na dopalacze. Czasem ukradnie się rynnę, czasem wyrwie się komuś telefon, a zimą można nieźle zarobić, chodząc po kolędzie. Na ulicy szybko się dorasta.Trafu trzeba, że w tym samym czasie, gdy powstawał film, w Wenecji stała, zanim jej nie usunięto, rzeźba Charlesa Raya „Chłopiec z żabą”. Co chłopiec może zrobić z żabą? Może ją nadmuchać, może ją zabić, może ją wypuścić. Film możemy zobaczyć na CDA premium.
                    </div>
                </div>
                <div 
                    className="back__arrow zabaarr"
                    onClick={() => {
                        this.props.history.goBack();
                    }}>
                </div>
            </div>
        )
    }
    
}

export default withRouter(Reactplayer);