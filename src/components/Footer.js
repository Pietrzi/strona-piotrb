import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="centering__container">
                <div className="icons__container">
                <a
                        href="http://kinomural.com/pl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            <div className="footer__icon__container mural"></div>
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
                        href="http://vimeo.com/manifiestafilm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            <div className="footer__icon__container vimeo"></div>
                    </a>
                </div>
                <div >
                    <NavLink to="/biocontact" className="bio__text">bio & kontakt</NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
