
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
 
        const checkAuthentication = async () => {
            try {
                const response = await axios.get('/api/auth/check-auth');
                setUser(response.data.user);
            } catch (error) {
                console.error('Authentication error:', error.response.data.message);
            } finally {
                setLoading(false);
            }
        };

        checkAuthentication();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            setUser(response.data.user); 
        } catch (error) {
            console.error('Login error:', error.response.data.message);
            throw new Error('Login failed. Please try again.');
        }
    };

    const register = async (name, email, password) => {
        try {
            const response = await axios.post('/api/auth/register', { name, email, password });
            setUser(response.data.user); 
        } catch (error) {
            console.error('Registration error:', error.response.data.message);
            throw new Error('Registration failed. Please try again.');
        }
    };

    const logout = async () => {
        try {
            await axios.post('/api/auth/logout');
            setUser(null); 
        } catch (error) {
            console.error('Logout error:', error.response.data.message);
            throw new Error('Logout failed. Please try again.');
        }
    };

    return (
        <UserContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };