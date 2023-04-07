import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'><img src="../../images/logo.jpg" alt="logo" /></div>
            <nav className='nav'>
                <ul className='nav__list'>
                    <li className='nav__item' ><Link to={"/"} replace={true}>  Home</Link></li>
                    <li className='nav__item' ><a href="/actors">Actors</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;