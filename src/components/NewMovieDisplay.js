import React from 'react'
import { NavLink } from 'react-router-dom';


const MovieDisplay = () => {
    return (
        <div className="nmovies__container">
            <div className="nmovies__box">
                <div className="lefty"></div>
                <div className="nmovie__box">
                    <NavLink to="/film1">
                        <div className="nmovie__display nachgdyby"></div>
                    </NavLink>
                    <div className="nmovie__title__box">ach gdyby tak błądzę</div>
                </div>
                <div className="nmovie__box">
                    <NavLink to="/film2">
                        <div className="nmovie__display negzul"></div>
                    </NavLink>
                    <div className="nmovie__title__box">egzul</div>
                </div>
                <div className="nmovie__box">
                    <NavLink to="/film3">
                        <div className="nmovie__display nflowfol"></div>
                    </NavLink>
                    <div className="nmovie__title__box">floating on fire</div>
                </div>
                <div className="nmovie__box">
                    <NavLink to="/film4">
                        <div className="nmovie__display nzaba"></div>
                    </NavLink>
                    <div className="nmovie__title__box">chłopiec z żabą</div>
                </div>
                {/* <div className="nmovie__box">
                    <NavLink to="/film5">
                        <div className="nmovie__display nsciezki"></div>
                    </NavLink>
                    <div className="nmovie__title__box">ścieżki tekstu</div>
                </div> */}
                <div className="righty"></div>
            </div>
        </div>
    )
}

export default MovieDisplay;