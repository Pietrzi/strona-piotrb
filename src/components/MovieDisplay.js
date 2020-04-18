import React from 'react'
import { NavLink } from 'react-router-dom';


const MovieDisplay = (props) => {
    return (
        <div className="movies__container">
            <div className="movies__box">
                <div className="lefty"></div>
                <div className="movie__box">
                    <NavLink 
                        to="/film"
                        onClick={() => {
                            props.movieNoHandler();
                            props.film1YesHandler();
                    }}>
                        <div className="movie__display achgdyby"></div>
                    </NavLink>
                    <div className="movie__title__box">ach gdyby tak błądzę</div>
                </div>
                <div className="movie__box">
                    <NavLink 
                        to="/film"
                        onClick={() => {
                            props.movieNoHandler();
                            props.film2YesHandler();
                    }}>
                        <div className="movie__display egzul"></div>
                    </NavLink>
                    <div className="movie__title__box">egzul</div>
                </div>
                <div className="movie__box">
                    <NavLink 
                        to="/film"
                        onClick={() => {
                            props.movieNoHandler();
                            props.film3YesHandler();
                    }}>
                        <div className="movie__display flowfol"></div>
                    </NavLink>
                    <div className="movie__title__box">floating on fire</div>
                </div>
                <div className="movie__box">
                    <NavLink 
                        to="/film"
                        onClick={() => {
                            props.movieNoHandler();
                            props.film4YesHandler();
                    }}>
                        <div className="movie__display zaba"></div>
                    </NavLink>
                    <div className="movie__title__box">chłopiec z żabą</div>
                </div>
                <div className="righty"></div>
            </div>
        </div>
    )
}

export default MovieDisplay;