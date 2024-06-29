
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import { UserContext } from '../contexts/UserContext';

const FavoritesPage = () => {
    const { user } = useContext(UserContext);
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

        if (user) {
            fetchFavorites();
        }
    }, [user]);

    return (
        <div className="favorites-page">
            <h1>My Favorite Countries</h1>
            {user ? (
                <>
                    {favorites.length === 0 ? (
                        <p>No favorite countries yet.</p>
                    ) : (
                        <div className="country-list">
                            {favorites.map((country) => (
                                <CountryCard key={country._id} country={country} />
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <p>Please log in to view your favorite countries.</p>
            )}
        </div>
    );
};

export default FavoritesPage;