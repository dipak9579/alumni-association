import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);  // Update user state after decoding the token
      } catch (err) {
        console.error('Invalid token', err);
      }
    }
    setLoading(false);  // Set loading to false after checking the token
  }, []);

  const login = async (email, password, role) => {
    const res = await axios.post('http://localhost:5000/api/users/login', { email, password, role });
    const { token } = res.data;
    localStorage.setItem('token', token);  // Store token in localStorage
    const decoded = jwtDecode(token);  // Decode the token to get user details
    setUser(decoded);  // Set user after successful login
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);  // Reset user on logout
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
