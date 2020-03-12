import React from 'react'
import { NavLink } from 'react-router-dom';


const MovieDisplay = () => {
    return (
        <div className="movies__container">
            <div className="movies__box">
                <NavLink to="/film1" className="movie__display"></NavLink>
                <NavLink to="/film2" className="movie__display"></NavLink>
                <NavLink to="/film1" className="movie__display"></NavLink>
                <NavLink to="/film2" className="movie__display"></NavLink>
            </div>
        </div>
    )
}

export default MovieDisplay;