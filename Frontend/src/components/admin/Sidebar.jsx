import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab }) => {
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
            </ul>
        </div>
    );
};

export default Sidebar;
