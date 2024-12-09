import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Admin Dashboard</h1>
            <p>Welcome to the Admin Panel! Manage your events, gallery, and more from here.</p>
            <div className="dashboard-overview">
                <div className="card">
                    <h3>Total Events</h3>
                    <p>15</p>
                </div>
                <div className="card">
                    <h3>Gallery Images</h3>
                    <p>48</p>
                </div>
                <div className="card">
                    <h3>Active Users</h3>
                    <p>120</p>
                </div>
                <div className="card">
                    <h3>Pending Requests</h3>
                    <p>8</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
