import React, { useState } from 'react';
import Sidebar from '../components/admin/Sidebar';
import './AdminDashboard.css';
import Dashboard from './Dashboard';
import CreateEvent from './CreateEvent';
import GalleryImageUpload from './GalleryImageUpload';


const AdminDashboard = () => {
    
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="admin-dashboard">
            
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="admin-main-content">
                {activeTab === 'dashboard' && <Dashboard/>}
                {activeTab === 'manageEvents' && <CreateEvent/>}
                {activeTab === 'galleryImage' && <GalleryImageUpload/>}
               
             

            </div>
        </div>
    );
};

export default AdminDashboard;
