import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../components/context/AdminContext';
import './AdminLogin.css'; // Import the CSS file

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(username, password);
        if (success) {
            navigate('/admin'); // Redirect to AdminDashboard
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="admin-login-container">
            <h2 className="admin-login-title">Admin Login</h2>
            <form className="admin-login-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="admin-login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="admin-login-input"
                />
                <button type="submit" className="admin-login-button">Login</button>
            </form>
            {error && <p className="admin-login-error">{error}</p>}
        </div>
    );
};

export default AdminLogin;
