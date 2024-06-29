import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';
import HistoryList from './HistoryList';
import '../App.css';  // Import the CSS file to ensure styles are applied

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const searchInputRef = useRef(null);

    // Fetch search results based on the currency code
    useEffect(() => {
        const fetchSearchResults = async () => {
            if (!searchTerm.trim()) {
                setSearchResults([]);
                return;
            }

            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`/api/countries/${searchTerm}`);
                if (Array.isArray(response.data)) {
                    setSearchResults(response.data);
                } else {
                    throw new Error('Unexpected response format');
                }
            } catch (error) {
                console.error('Error fetching search results:', error.message);
                setError('Failed to fetch search results. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        // Debounce the search request to avoid too many API calls
        const debounceTimeout = setTimeout(fetchSearchResults, 300);

        // Clean up the debounce timeout on component unmount or searchTerm change
        return () => clearTimeout(debounceTimeout);
    }, [searchTerm]);

    // Handle changes in the search input
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Clear the search input
    const handleClearSearch = () => {
        setSearchTerm('');
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    };

    // Auto-focus the search input on component mount
    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, []);

    return (
        <div className="homepage">
            <h1>Search Countries by Currency Code</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Enter currency code (e.g., USD)"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    ref={searchInputRef}
                />
                <button onClick={handleClearSearch}>Clear</button>
            </div>
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && searchResults.length === 0 && (
                <p>No results found. Start typing to search.</p>
            )}
            <div className="country-list">
                {searchResults.map((country) => (
                    <CountryCard key={country._id} country={country} />
                ))}
            </div>
            <HistoryList />
        </div>
    );
};

export default HomePage;
