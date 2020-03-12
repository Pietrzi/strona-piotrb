import React from 'react';
import Hamburger from './Hamburger';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
            <div className="centering__container">
                <div onClick={props.movieNoHandler} className="name__container">
                    <NavLink to='/' className="logo__name">piotr bartos</NavLink>
                </div>
                <div className="navmenu__container">
                    <ul>
                        <li onClick={props.movieYesHandler}>
                            <NavLink className="menu__link__element" to='/movie'>film</NavLink>
                        </li>
                        <li onClick={props.movieNoHandler}>
                            <NavLink className="menu__link__element" to='movieart'>video-art</NavLink>
                        </li>
                        <li onClick={props.movieNoHandler}>
                            <NavLink className="menu__link__element" to='paint'>paint</NavLink>
                        </li>
                    </ul>
                    <Hamburger click={props.menuHandler}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;