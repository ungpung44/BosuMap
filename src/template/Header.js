import React from 'react';

function Header() {
    return (
        <header>
            BosuMap
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