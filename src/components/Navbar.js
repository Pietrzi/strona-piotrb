import React from 'react';
import Hamburger from './Hamburger';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
            <div className="centering__container">
                <div className="name__container">
                    <p className="logo__name">piotr bartos</p>
                </div>
                <div className="navmenu__container">
                    <ul>
                        <li>
                            <NavLink className="menu__link__element" to='/movie'>film</NavLink>
                        </li>
                        <li>
                            <NavLink className="menu__link__element" to='movieart'>video - art</NavLink>
                        </li>
                        <li>
                            <NavLink className="menu__link__element" to='paint'>paint</NavLink>
                        </li>
                    </ul>
                    <Hamburger click={props.hamburgerHandler}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;