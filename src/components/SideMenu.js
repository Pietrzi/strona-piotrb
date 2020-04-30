import React from 'react';
import { NavLink } from 'react-router-dom';

const SideMenu = (props) => {

    let sideMenuClasses = 'side__menu'
    if (props.show) {
        sideMenuClasses = 'side__menu open'
    }

    return (
        <div className={sideMenuClasses}>
            <ul>
                <li onClick={() => {
                        props.movieYesHandler();
                        props.movieArtNoHandler();
                        props.noBioHandler();
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
                    <NavLink className="menu__link__element" to='/movie'>film</NavLink>
                </li>
                <li onClick={() => {
                        props.movieNoHandler();
                        props.movieArtYesHandler();
                        props.noBioHandler();
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
                    <NavLink className="menu__link__element" to='movieart'>video - art</NavLink>
                </li>
                <li className="side__dropdown">
                    <div className="menu__link__element" to='paint'>paint</div>
                    <div className="side__dropdown__content">
                        <div
                            onClick={() => {
                                props.movieNoHandler();
                                props.movieArtNoHandler();
                                props.noBioHandler();
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
                            <NavLink  to="raz">raz</NavLink>
                        </div>
                        <div
                            onClick={() => {
                                props.movieNoHandler();
                                props.movieArtNoHandler();
                                props.noBioHandler();
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
                            <NavLink to="dwa">dwa</NavLink>
                        </div>
                        <div
                            onClick={() => {
                                props.movieNoHandler();
                                props.movieArtNoHandler();
                                props.noBioHandler();
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
                            <NavLink to="trzy">trzy</NavLink>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu;