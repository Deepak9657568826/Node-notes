
import React, { useState, useRef } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const searchInputRef = useRef(null);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
        onSearch(''); 
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm.trim());
    };

    return (
        <form className="search-bar" onSubmit={handleSearchSubmit}>
            <input
                type="text"
                placeholder="Enter currency code (e.g., USD)"
                value={searchTerm}
                onChange={handleSearchChange}
                ref={searchInputRef}
            />
            <button type="submit">Search</button>
            <button type="button" onClick={handleClearSearch}>Clear</button>
        </form>
    );
};

export default SearchBar;