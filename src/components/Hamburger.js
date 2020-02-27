import React from 'react';

const Hamburger = props => {
    return (
        <div className="button__container">
            <button className="toggle__button" onClick={props.click}>
                <div className="toggle__button__line" />
                <div className="toggle__button__line" />
                <div className="toggle__button__line" />
            </button>
        </div>
    )
}

export default Hamburger;