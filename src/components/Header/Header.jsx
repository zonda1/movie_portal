import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <ul className='nav__list'>
                    <li className='nav__item' ><a href="#">Home</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;