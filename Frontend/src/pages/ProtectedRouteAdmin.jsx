import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/context/AdminContext';

const ProtectedRouteAdmin = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/adminLogin" />;
};

export default ProtectedRouteAdmin;
