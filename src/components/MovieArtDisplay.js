import React from 'react'
import { NavLink } from 'react-router-dom';


const MovieArtDisplay = (props) => {
    return (
        <div className="movies__container">
            <div className="movies__box">
                {/* <div className="lefty"></div> */}
                <div className="movie__box">
                    <NavLink 
                        to="/film"
                        onClick={() => {
                            props.movieArtNoHandler();
                            props.filmArt1YesHandler();
                    }}>
                        <div className="movie__display kulki"></div>
                    </NavLink>
                    <div className="movie__title__box">kulki</div>
                </div>
                <div className="movie__box">
                    <NavLink 
                        to="/film"
                        onClick={() => {
                            props.movieArtNoHandler();
                            props.filmArt2YesHandler();
                    }}>
                        <div className="movie__display znikam"></div>
                    </NavLink>
                    <div className="movie__title__box">znikam</div>
                </div>
                <div className="movie__box">
                    <NavLink 
                        to="/film"
                        onClick={() => {
                            props.movieArtNoHandler();
                            props.filmArt3YesHandler();
                    }}>
                        <div className="movie__display samoloty"></div>
                    </NavLink>
                    <div className="movie__title__box">lot nr.0</div>
                </div>
                <div className="movie__box">
                    <NavLink 
                        to="/film"
                        onClick={() => {
                            props.movieArtNoHandler();
                            props.filmArt4YesHandler();
                    }}>
                        <div className="movie__display domw"></div>
                    </NavLink>
                    <div className="movie__title__box">dom wariatów</div>
                </div>
                <div className="movie__box">
                    <NavLink 
                        to="/film"
                        onClick={() => {
                            props.movieArtNoHandler();
                            props.filmArt5YesHandler();
                    }}>
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