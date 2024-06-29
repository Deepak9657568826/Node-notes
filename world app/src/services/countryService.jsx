import api from './api';

const countryService = {
    async getCountriesByCurrency(currencyCode) {
        try {
            const response = await api.get(`/api/countries / ${ currencyCode }`);
            return response.data; // Assuming response.data contains an array of countries
        } catch (error) {
            throw new Error(error.response.data.message || 'Failed to fetch countries.');
        }
    },

    async getCountryById(countryId) {
        try {
            const response = await api.get(`/api/countries / id / ${ countryId }`);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message || 'Failed to fetch country details.');
        }
    },

    async getFavorites() {
        try {
            const response = await api.get('/api/favorites');
            return response.data; 
        } catch (error) {
            throw new Error(error.response.data.message || 'Failed to fetch favorite countries.');
        }
    },

    async addToFavorites(countryId) {
        try {
            const response = await api.post('/api/favorites/add', { countryId });
            return response.data; 
        } catch (error) {
            throw new Error(error.response.data.message || 'Failed to add to favorites.');
        }
    },

    async removeFromFavorites(countryId) {
        try {
            const response = await api.post('/api/favorites/remove', { countryId });
            return response.data; 
        } catch (error) {
            throw new Error(error.response.data.message || 'Failed to remove from favorites.');
        }
    },

    async getSearchHistory() {
        try {
            const response = await api.get('/api/history');
            return response.data; 
        } catch (error) {
            throw new Error(error.response.data.message || 'Failed to fetch search history.');
        }
    },
};

export default countryService;