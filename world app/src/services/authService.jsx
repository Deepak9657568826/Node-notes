
import api from './api';

const authService = {
    async login(email, password) {
        try {
            const response = await api.post('/api/auth/login', { email, password });
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message || 'Login failed. Please try again.');
        }
    },

    async register(name, email, password) {
        try {
            const response = await api.post('/api/auth/register', { name, email, password });
            return response.data; 
        } catch (error) {
            throw new Error(error.response.data.message || 'Registration failed. Please try again.');
        }
    },

    async logout() {
        try {
            await api.post('/api/auth/logout');
        } catch (error) {
            throw new Error(error.response.data.message || 'Logout failed. Please try again.');
        }
    },

    async checkAuth() {
        try {
            const response = await api.get('/api/auth/check-auth');
            return response.data; 
        } catch (error) {
            throw new Error(error.response.data.message || 'Authentication check failed.');
        }
    },
};

export default authService;