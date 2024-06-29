
import api from './api';

const historyService = {
    async getSearchHistory() {
        try {
            const response = await api.get('/api/history');
            return response.data; 
        } catch (error) {
            throw new Error(error.response.data.message || 'Failed to fetch search history.');
        }
    },

    async clearSearchHistory() {
        try {
            const response = await api.post('/api/history/clear');
            return response.data; 
        } catch (error) {
            throw new Error(error.response.data.message || 'Failed to clear search history.');
        }
    },
};

export default historyService;