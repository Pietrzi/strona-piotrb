import React from 'react';
import Hamburger from './Hamburger';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
            <div className="centering__container">
                <div className="name__container">
                    <NavLink to='/' className="logo__name">piotr bartos</NavLink>
                </div>
                <div className="navmenu__container">
                    <ul>
                        <li>
                            <NavLink className="menu__link__element" to='movie'>film</NavLink>
                        </li>
                        <li >
                            <NavLink className="menu__link__element" to='movieart'>video-art</NavLink>
                        </li>
                        <li className="dropdown">
                            <div className="menu__link__element">paint</div>
                            <div className="dropdown__content">
                                <div>
                                    <NavLink  to="raz">unit 1</NavLink>
                                </div>
                                <div>
                                    <NavLink to="dwa">unit 2</NavLink>
                                </div>
                                <div>
                                    <NavLink to="trzy">unit 3</NavLink>
                                </div>
                            </div>
                        </li>
                        <li >
                            <NavLink className="menu__link__element" to='emotes'>emotes</NavLink>
                        </li>
                    </ul>
                    <Hamburger click={props.menuHandler}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;