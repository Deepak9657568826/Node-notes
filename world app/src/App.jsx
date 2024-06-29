// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';


import FavoritesPage from './pages/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
         
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
