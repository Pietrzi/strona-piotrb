import React from 'react'
import { NavLink } from 'react-router-dom';


const MovieArtDisplay = () => {
    return (
        <div className="movies__container">
            <div className="movies__box">
                {/* <div className="lefty"></div> */}
                <div className="movie__box">
                    <NavLink to="/video-art1">
                        <div className="movie__display kulki"></div>
                    </NavLink>
                    <div className="movie__title__box">kulki</div>
                </div>
                <div className="movie__box">
                    <NavLink to="/video-art2">
                        <div className="movie__display znikam"></div>
                    </NavLink>
                    <div className="movie__title__box">znikam</div>
                </div>
                <div className="movie__box">
                    <NavLink to="/video-art3">
                        <div className="movie__display samoloty"></div>
                    </NavLink>
                    <div className="movie__title__box">lot nr.0</div>
                </div>
                <div className="movie__box">
                    <NavLink to="/video-art4">
                        <div className="movie__display domw"></div>
                    </NavLink>
                    <div className="movie__title__box">dom wariatów</div>
                </div>
                <div className="movie__box">
                    <NavLink to="/video-art5">
                        <div className="movie__display flagi"></div>
                    </NavLink>
                    <div className="movie__title__box">flagi</div>
                </div>
                {/* <div className="righty"></div> */}
            </div>
        </div>
    )
}

export default MovieArtDisplay;