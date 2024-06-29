
import React from 'react';

const CountryCard = ({ country }) => {
    const { name, currency, capital, languages, flag } = country;

    return (
        <div className="country-card">
            <img src={flag} alt={`Flag of ${name}`} />
            <div className="country-details">
                <h3>{name}</h3>
                <p><strong>Currency:</strong> {currency}</p>
                <p><strong>Capital:</strong> {capital}</p>
                <p><strong>Languages:</strong> {languages}</p>
            </div>
        </div>
    );
};

export default CountryCard;