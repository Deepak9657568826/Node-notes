
import api from './api';

const favoriteService = {
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
};

export default favoriteService;