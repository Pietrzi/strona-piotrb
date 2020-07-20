import React from 'react';
import Hamburger from './Hamburger';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
            <div className="centering__container">
                <div 
                    className="name__container"
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
                    <NavLink to='/' className="logo__name">piotr bartos</NavLink>
                </div>
                <div className="navmenu__container">
                    <ul>
                        <li onClick={() => {
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
                            <NavLink className="menu__link__element" to='movie'>film</NavLink>
                        </li>
                        <li 
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
                            <NavLink className="menu__link__element" to='movieart'>video-art</NavLink>
                        </li>
                        <li className="dropdown">
                            <div className="menu__link__element">paint</div>
                            <div className="dropdown__content">
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
                                    <NavLink  to="raz">unit 1</NavLink>
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
                                    <NavLink to="dwa">unit 2</NavLink>
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
                                    <NavLink to="trzy">unit 3</NavLink>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <Hamburger click={props.menuHandler}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;