import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="centering__container">
                <div className="icons__container">
                    <a href="http://vimeo.com/manifiestafilm"><div className="footer__icon__container vimeo"></div></a>
                    <a href="https://www.facebook.com/piotr.bartos.84"><div className="footer__icon__container face"></div></a>
                    <a href="https://www.instagram.com/bartospiotr/"><div className="footer__icon__container insta"></div></a>
                </div>
                <div>
                    <NavLink to="/biocontact" className="bio__text">bio & kontakt</NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

// http://vimeo.com/manifiestafilm
// https://www.facebook.com/piotr.bartos.84
// https://www.instagram.com/bartospiotr/