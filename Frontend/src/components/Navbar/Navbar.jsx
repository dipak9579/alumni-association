// src/components/Navbar.js
import React from 'react';
import {Link} from "react-router-dom"
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">AlumniAssociation</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#about">About</a></li>
        <li><Link to="/login"><button>Login</button></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
