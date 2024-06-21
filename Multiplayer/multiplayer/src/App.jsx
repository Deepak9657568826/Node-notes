
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Lobby from './components/Lobby';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';
import WaitingList from './components/WaitingList';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [waitingList, setWaitingList] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);

  return (
 
      <div className="App">

        <Navbar/>
        <Routes>
          <Route
            path="/"
            element={
              <Login
                setPlayers={setPlayers}
                setCurrentPlayer={setCurrentPlayer}
                players={players}
              />
            }
          />
          <Route
            path="/lobby"
            element={
              <Lobby
                players={players}
                currentPlayer={currentPlayer}
                setPlayers={setPlayers}
              />
            }
          />
          <Route
            path="/game"
            element={
              <Game
                currentPlayer={currentPlayer}
                setLeaderboard={setLeaderboard}
              />
            }
          />
          <Route
            path="/leaderboard"
            element={<Leaderboard leaderboard={leaderboard} />}
          />
          <Route
            path="/waiting"
            element={
              <WaitingList
                waitingList={waitingList}
                setWaitingList={setWaitingList}
              />
            }
          />
        </Routes>
      </div>
 
  );
};

export default App;
