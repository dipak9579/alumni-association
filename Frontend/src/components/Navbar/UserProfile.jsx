import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const { logout } = useAuth();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error("No token found");
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        
        const response = await axios.get('http://localhost:5000/api/users/profile', config);
        setUser(response.data.user);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error('Unauthorized: Token might be expired or invalid');
          logout();
        } else {
          console.error('Error fetching user profile:', error);
        }
      }
    };

    fetchUserProfile();
  }, [logout]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>
      </div>
      <div className="profile-details">
        <h3>About Me</h3>
        {user.role === 'student' && <p>Enrollment Year: {user.enrollmentYear}</p>}
        {user.role === 'alumni' && <p>Graduation Year: {user.graduationYear}</p>}
        <p>Role: {user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
      </div>

      {/* Show Job Post button only if the user is an alumni */}
      {user.role === 'alumni' && (
        <Link to="jobCreate"><button className='btn-job'>Job Post</button></Link>
      )}
      <button className="logout-button1" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
