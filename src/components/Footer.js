import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = (props) => {
    return (
        <footer>
            <div className="centering__container">
                <div className="icons__container">
                    <a 
                        href="http://vimeo.com/manifiestafilm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            <div className="footer__icon__container vimeo"></div>
                    </a>
                    <a
                        href="https://www.facebook.com/piotr.bartos.84"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            <div className="footer__icon__container face"></div>
                    </a>
                    <a
                        href="https://www.instagram.com/bartospiotr/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            <div className="footer__icon__container insta"></div>
                    </a>
                    <a
                        href="http://kinomural.com/pl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            <div className="footer__icon__container mural"></div>
                    </a>
                </div>
                <div 
                    onClick={() => {
                        props.noFilm1Handler();
                        props.noFilm2Handler();
                        props.noFilm3Handler();
                        props.noFilm4Handler();
                        props.noFilm5Handler();
                        props.noFilmArt1Handler();
                        props.noFilmArt2Handler();
                        props.noFilmArt3Handler();
                        props.noFilmArt4Handler();
                        props.noFilmArt5Handler();
                    }}>
                    <NavLink to="/biocontact" className="bio__text">bio & kontakt</NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
