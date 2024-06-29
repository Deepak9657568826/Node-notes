import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure this is imported to apply the styles

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/" className="logo-link">Countries App</Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/favorites" className="nav-link">Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
