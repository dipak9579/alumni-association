// src/components/UserProfile.js
import React from 'react';
import './UserProfile.css';

const UserProfile = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout(); // Trigger logout
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-email">johndoe@example.com</p>
      </div>
      <div className="profile-details">
        <h3>About Me</h3>
        <p>
          Hello! I'm John, a software engineer with a passion for building web applications.
          In my free time, I enjoy hiking, photography, and cooking.
        </p>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
