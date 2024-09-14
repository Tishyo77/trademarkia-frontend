import React, { useState } from 'react';
import Navbar from './Navbar/NavBar';
import './Trademarkia.css';

const Trademarkia = () => {
    return (
        <div className="trademarks-page">
            <Navbar />
            <div className="results-amount">
                <p>About 159 Trademarks found for "nike"</p>
                <hr />
            </div>
            <div className="search-suggestion">
                <p>
                    <span>
                        Also try searching for
                        <button className="search-button">nike*</button>
                        <button className="search-button">*ike</button>
                    </span>
                    <span className="right-buttons">
                        <button className="filter-button">Filter</button>
                        <button className="share-button">Share</button>
                        <button className="menu-button">Menu</button>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Trademarkia;