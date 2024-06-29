
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HistoryList = () => {
    const [searchHistory, setSearchHistory] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      
        const fetchSearchHistory = async () => {
            try {
                const response = await axios.get('/api/history');
                if (Array.isArray(response.data)) {
                    setSearchHistory(response.data); 
                } else {
                    throw new Error('Unexpected response format');
                }
            } catch (error) {
                console.error('Error fetching search history:', error.message);
                setError('Failed to fetch search history. Please try again later.');
            }
        };

        fetchSearchHistory();
    }, []); 

    return (
        <div className="history-list">
            <h2>Search History</h2>
            {error ? (
                <p>{error}</p>
            ) : searchHistory.length === 0 ? (
                <p>No search history yet.</p>
            ) : (
                <ul>
                    {searchHistory.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HistoryList;
