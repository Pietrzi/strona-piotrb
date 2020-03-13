import React from 'react'
import { NavLink } from 'react-router-dom';


const MovieDisplay = (props) => {
    return (
        <div className="movies__container">
            <div className="movies__box">
                <div className="lefty"></div>
                <div className="movie__box">
                    <NavLink onClick={props.movieNoHandler} to="/film1">
                        <div className="movie__display achgdyby"></div>
                    </NavLink>
                    <div className="movie__title__box">ach gdyby tak błądzę</div>
                </div>
                <div className="movie__box">
                    <NavLink onClick={props.movieNoHandler} to="/film2">
                        <div className="movie__display egzul"></div>
                    </NavLink>
                    <div className="movie__title__box">egzul</div>
                </div>
                <div className="movie__box">
                    <NavLink onClick={props.movieNoHandler} to="/film1">
                        <div className="movie__display achgdyby"></div>
                    </NavLink>
                    <div className="movie__title__box">ach gdyby tak błądzę</div>
                </div>
                <div className="movie__box">
                    <NavLink onClick={props.movieNoHandler} to="/film2">
                        <div className="movie__display egzul"></div>
                    </NavLink>
                    <div className="movie__title__box">egzul</div>
                </div>
                {/* <div className="movie__box">
                    <NavLink onClick={props.movieNoHandler} to="/film1">
                        <div className="movie__display"></div>
                    </NavLink>
                    <div className="movie__title__box">
                        ach gdyby tak błądzę
                    </div>
                    <div className="movie__description__box">
                        <div className="polish__description">
                            Oszczędności w portach na granicy światów widać gołym okiem, gołym uchem słychać niewykwalifikowany personel.
                            Ale nic to, najważniejsze dla wędrowca to światło w szczelinie zobaczyć i się nie przestraszyć.
                        </div>
                        <div className="english__description">
                            Savings kept in harbors on the border of worlds can be seen with a naked eye.
                            Unqualified staff can be heard with a naked ear. But that's nothing.
                            The most important thing for a wanderer is to see the light in the gap and not to be scared.
                        </div>
                    </div>
                </div>
                <div className="movie__box">
                    <NavLink onClick={props.movieNoHandler} to="/film2">
                        <div className="movie__display"></div>
                    </NavLink>
                    <div className="movie__title__box">
                        egzul   
                    </div>
                    <div className="movie__description__box">
                        <div className="polish__description">
                            Egzul pracuje, żeby jeść. Je, żeby pracować. A kiedy nie je i nie pracuje to patrzy w księżyc.
                        </div>
                        <div className="english__description">
                            Egzul works to eat.
                            Eat to work.
                            And when he doesn't eat and work he looks at the moon.
                        </div>
                    </div>
                </div>
                <div className="movie__box">
                    <NavLink onClick={props.movieNoHandler} to="/film1">
                        <div className="movie__display"></div>
                    </NavLink>
                    <div className="movie__title__box">
                        ach gdyby tak błądzę
                    </div>
                    <div className="movie__description__box">
                        <div className="polish__description">
                            Oszczędności w portach na granicy światów widać gołym okiem, gołym uchem słychać niewykwalifikowany personel.
                            Ale nic to, najważniejsze dla wędrowca to światło w szczelinie zobaczyć i się nie przestraszyć.
                        </div>
                        <div className="english__description">
                            Savings kept in harbors on the border of worlds can be seen with a naked eye.
                            Unqualified staff can be heard with a naked ear. But that's nothing.
                            The most important thing for a wanderer is to see the light in the gap and not to be scared.
                        </div>
                    </div>
                </div>
                <div className="movie__box">
                    <NavLink onClick={props.movieNoHandler} to="/film2">
                        <div className="movie__display"></div>
                    </NavLink>
                    <div className="movie__title__box">
                        egzul
                    </div>
                    <div className="movie__description__box">
                        <div className="polish__description">
                            Egzul pracuje, żeby jeść. Je, żeby pracować. A kiedy nie je i nie pracuje to patrzy w księżyc.
                        </div>
                        <div className="english__description">
                            Egzul works to eat.
                            Eat to work.
                            And when he doesn't eat and work he looks at the moon.
                        </div>
                    </div>
                </div> */}
                <div className="righty"></div>
            </div>
        </div>
    )
}

export default MovieDisplay;