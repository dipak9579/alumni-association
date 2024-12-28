import React from 'react';
import './Sidebar.css';
import { useAuth } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Sidebar = ({ activeTab, setActiveTab }) => {
    const { logout } = useAuth();
    const navigate = useNavigate(); // Initialize navigate

    const handleLogout = () => {
        logout(); // Call the logout function
        navigate('/'); // Redirect to the home page after logout
    };

    return (
        <div className="sidebar">
            <h2>Admin Panel</h2>
            <ul>
                <li 
                    className={activeTab === 'dashboard' ? 'active' : ''} 
                    onClick={() => setActiveTab('dashboard')}
                >
                    Dashboard
                </li>
                <li 
                    className={activeTab === 'manageEvents' ? 'active' : ''} 
                    onClick={() => setActiveTab('manageEvents')}
                >
                    Create Events
                </li>
                <li 
                    className={activeTab === 'galleryImage' ? 'active' : ''} 
                    onClick={() => setActiveTab('galleryImage')}
                >
                    Gallery Image
                </li>
                <li onClick={handleLogout}>Logout</li> {/* Call handleLogout on logout click */}
            </ul>
        </div>
    );
};

export default Sidebar;
