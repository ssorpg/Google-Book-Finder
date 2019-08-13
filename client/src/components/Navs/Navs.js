import React from 'react';
import './Navs.css';

function Navs() {
    return (
        <nav className="Navs">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={window.location.pathname === '/' ? "nav-link active Navs-a" : "nav-link"} href="/">Search Books</a>
                </li>
                <li className="nav-item">
                    <a className={window.location.pathname === '/saved' ? "nav-link active Navs-a" : "nav-link"} href="/saved">Saved Books</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navs;
