import React from 'react';
import './logo.css';

const Logo = (props) => {
    const { logoImg , classValue} = props;

    return (
        <a
            className={`${classValue} food-easy-logo-link`}
            href="/"
            >
            <img src={logoImg} className="food-easy-logo-img" alt="foodeasy logo" />
        </a>
    )
}

export default Logo;