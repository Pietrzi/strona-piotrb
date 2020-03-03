import React from 'react';
import { NavLink } from 'react-router-dom';


const Movie = () => {
    return (
        <div className="movies__container">
            <div className="movies__box">
                <NavLink to="/film" className="movie__display"></NavLink>
                <NavLink to="/film" className="movie__display"></NavLink>
                <NavLink to="/film" className="movie__display"></NavLink>
                <NavLink to="/film" className="movie__display"></NavLink>
                <NavLink to="/film" className="movie__display"></NavLink>
                <NavLink to="/film" className="movie__display"></NavLink>
                <NavLink to="/film" className="movie__display"></NavLink>
                <NavLink to="/film" className="movie__display"></NavLink>
            </div>
        </div>
    )
}

export default Movie;