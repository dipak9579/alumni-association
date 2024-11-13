import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';
import UserProfile from './UserProfile';
import userIcon from '../../assets/user.png';

const Navbar = () => {
  const { user } = useAuth(); // Get user from AuthContext
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleProfileClick = () => {
    setShowProfileMenu((prevState) => !prevState); // Toggle profile menu visibility
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">AlumniAssociation</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
       
        {user && <li><Link to="/getJobs">Jobs</Link></li>} {/* Show Jobs link only if user is logged in */}
        <li><Link to="/aboutUs">AboutUs</Link></li>
        <li>
          <img
            src={userIcon}
            alt="User Profile"
            className="navbar-profile-image"
            onClick={handleProfileClick}
          />
          {showProfileMenu && (
            <>
              {user ? (
                // If user is logged in, show UserProfile
                <UserProfile />
              ) : (
                // If not logged in, show login button
                <div className="profile-menu">
                  <Link to="/login">
                    <button className="login-button1">Login</button>
                  </Link>
                </div>
              )}
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
