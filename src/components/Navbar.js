import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="centering__container">
                <div className="name__container">
                    <p className="logo__name">piotr bartos</p>
                </div>
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
            </div>
        </nav>
    )
}

export default Navbar;