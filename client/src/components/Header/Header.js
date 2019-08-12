import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="Header">
            <div className="Header-size">
                <h1 className="Header-text">
                    Google Books Search
                </h1>
                <h4>
                    Search and Save Books of Interest
                </h4>
            </div>
        </header>
    );
}

export default Header;
