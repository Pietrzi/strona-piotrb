import React from 'react'
import { NavLink } from 'react-router-dom';


const MovieArtDisplay = (props) => {
    return (
        <div className="movies__container">
            <div className="movies__box">
                {/* <div className="lefty"></div> */}
                <div className="movie__box">
                    <NavLink 
                        to="/filmart"
                        onClick={() => {
                            props.movieArtNoHandler();
                            props.filmArt1YesHandler();
                    }}>
                        <div className="movie__display achgdyby"></div>
                    </NavLink>
                    <div className="movie__title__box">ach gdyby tak błądzę</div>
                </div>
                <div className="movie__box">
                    <NavLink 
                        to="/filmart"
                        onClick={() => {
                            props.movieArtNoHandler();
                            props.filmArt2YesHandler();
                    }}>
                        <div className="movie__display egzul"></div>
                    </NavLink>
                    <div className="movie__title__box">egzul</div>
                </div>
                <div className="movie__box">
                    <NavLink 
                        to="/filmart"
                        onClick={() => {
                            props.movieArtNoHandler();
                            props.filmArt3YesHandler();
                    }}>
                        <div className="movie__display achgdyby"></div>
                    </NavLink>
                    <div className="movie__title__box">ach gdyby tak błądzę</div>
                </div>
                <div className="movie__box">
                    <NavLink 
                        to="/filmart"
                        onClick={() => {
                            props.movieArtNoHandler();
                            props.filmArt4YesHandler();
                    }}>
                        <div className="movie__display egzul"></div>
                    </NavLink>
                    <div className="movie__title__box">egzul</div>
                </div>
                {/* <div className="righty"></div> */}
            </div>
        </div>
    )
}

export default MovieArtDisplay;