import React from 'react';
import { NavLink } from 'react-router-dom';

const SideMenu = (props) => {

    let sideMenuClasses = 'side__menu'
    if (props.show) {
        sideMenuClasses = 'side__menu open'
    }

    return (
        <div className={sideMenuClasses}>
            <ul>
                <li onClick={props.click}>
                    <NavLink className="menu__link__element" to='/movie'>film</NavLink>
                </li>
                <li onClick={props.click}>
                    <NavLink className="menu__link__element" to='movieart'>video - art</NavLink>
                </li>
                <li className="side__dropdown">
                    <div className="menu__link__element" to='paint'>paint</div>
                    <div className="side__dropdown__content">
                        <div onClick={props.click}>
                            <NavLink  to="raz">unit 1</NavLink>
                        </div>
                        <div onClick={props.click}>
                            <NavLink to="dwa">unit 2</NavLink>
                        </div>
                        <div onClick={props.click}>
                            <NavLink to="trzy">unit 3</NavLink>
                        </div>
                    </div>
                </li>
                <li onClick={props.click}>
                    <NavLink className="menu__link__element" to='emotes'>emotes</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu;