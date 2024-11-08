// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">AlumniAssociation</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#about">About</a></li>
        <li><button>Login</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
