import React from 'react';
import '../App.css'; // Ensure this is imported to apply the styles

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <h1 className="not-found-title">404 - Page Not Found</h1>
            <p className="not-found-message">The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFoundPage;
