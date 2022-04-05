import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <div className='nav-link'>
                <a href="/home">HOME</a>
                <a href="/review">REVIEWS</a>
                <a href="/dashboard">DASHBOARD</a>
                <a href="/blog">BLOGS</a>
                <a href="/about">ABOUT</a>
            </div>
        </nav>
    );
};

export default Header;