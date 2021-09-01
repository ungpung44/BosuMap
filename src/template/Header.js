import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="logo">BosuMap</div>
            <ul>
                <li>About</li>
                <li>Board</li>
                <li>Program</li>
                <li>Login</li>
                <li>Register</li>
            </ul>
            <a href="#" className="hamburger"/>
        </header>
    );
}

export default Header;