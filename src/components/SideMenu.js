import React from 'react';
import { NavLink } from 'react-router-dom';

const SideMenu = props => {

    let sideMenuClasses = 'side__menu'
    if (props.show) {
        sideMenuClasses = 'side__menu open'
    }

    return (
        <div className={sideMenuClasses}>
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
    )
}

export default SideMenu;