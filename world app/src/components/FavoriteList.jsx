
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';

const FavoriteList = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
      
        const fetchFavorites = async () => {
            try {
                const response = await axios.get('/api/favorites');
                setFavorites(response.data); 
            } catch (error) {
                console.error('Error fetching favorites:', error.response.data.message);
            
            }
        };

        fetchFavorites();
    }, []); 

    return (
        <div className="favorite-list">
            <h2>Favorite Countries</h2>
            {favorites.length === 0 ? (
                <p>No favorite countries yet.</p>
            ) : (
                favorites.map((country) => <CountryCard key={country._id} country={country} />)
            )}
        </div>
    );
};

export default FavoriteList;