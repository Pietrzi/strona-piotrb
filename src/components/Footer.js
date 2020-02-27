import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="centering__container">
                <div className="icons__container">
                    <div>V</div>
                    <div>F</div>
                </div>
                <div className="bio__container">
                    <NavLink to="/biocontact" className="bio__text">bio & kontakt</NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer;