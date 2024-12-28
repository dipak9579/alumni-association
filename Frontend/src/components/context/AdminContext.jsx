import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';


const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState('');
  

    const login = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/admin/login', {
                username,
                password,
            });

            const { token } = response.data;
            setToken(token);
            setIsAuthenticated(true);
            localStorage.setItem('authToken', token); // Optional: Save token
            return true;
        } catch (error) {
            return false;
        }
    };

    const logout = () => {
        setToken('');
        setIsAuthenticated(false);
        localStorage.removeItem('authToken');
      
    };

    return (
        <AdminContext.Provider value={{ isAuthenticated, login, logout, token }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAuth = () => useContext(AdminContext);
