import React from 'react';
import logo from '../assets/Logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search Trademark Here eg. Mickey Mouse" />
                <button>Search</button>
            </div>
        </nav>
    );
};

export default Navbar;
