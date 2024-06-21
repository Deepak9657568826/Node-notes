
import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Login</Link>
      <Link to="/lobby" className="nav-link">Lobby</Link>
      <Link to="/game" className="nav-link">Game</Link>
      <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
      <Link to="/waiting" className="nav-link">Waiting</Link>
    </nav>
  );
}

export default Navbar;
