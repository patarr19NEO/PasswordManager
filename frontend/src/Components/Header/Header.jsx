import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
    return (
        <div className="Header">
            <header>
                <div className="logo">
                    <img src="./assets/icon-key/icon-key.png" alt="logo-key"/>
                    <h1>Password Manager</h1>
                </div>
                <nav>
                    <ul>
                        <li>About</li>
                        <li>Contacts</li>
                        <li>Prices</li>
                    </ul>
                </nav>
                <a>
                    <Link to="/getIntoAccount">Try NOW for FREE</Link>
                </a>
            </header>
        </div>
    )
}

export default Header