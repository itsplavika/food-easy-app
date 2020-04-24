import React from 'react';
import logo from '../../assets/logo.svg';
import Logo from '../logo';
import './header.css';

const Header = () => {

    return (
        <header className="food-easy-site-header">
            <Logo logoImg={logo} />
        </header>
    )
}

export default Header;