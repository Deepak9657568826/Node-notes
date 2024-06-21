
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Lobby = ({ players, currentPlayer }) => {
  const navigate = useNavigate();

  console.log('Players in Lobby:', players); 
  console.log('Current Player in Lobby:', currentPlayer); 

  const initiateGame = (opponent) => {

    navigate('/game', { state: { currentPlayer, opponent } });
  };

  return (
    <div className="lobby">
      <h2>Game Lobby</h2>
      <ul>
        {players.filter(player => player !== currentPlayer).map((player, index) => (
          <li key={index}>
            {player}
            <button onClick={() => initiateGame(player)}>Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lobby;
