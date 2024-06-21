
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const choices = ['Rock', 'Paper', 'Scissors'];

const Game = ({ setLeaderboard }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentPlayer, opponent } = location.state || {};

  const [playerChoice, setPlayerChoice] = useState(null);
  const [opponentChoice, setOpponentChoice] = useState(null);
  const [result, setResult] = useState('');

  console.log('Current Player in Game:', currentPlayer); 
  console.log('Opponent in Game:', opponent); 

  const playGame = (choice) => {
    const opponentRandomChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setOpponentChoice(opponentRandomChoice);

    if (choice === opponentRandomChoice) {
      setResult('Draw');
    } else if (
      (choice === 'Rock' && opponentRandomChoice === 'Scissors') ||
      (choice === 'Paper' && opponentRandomChoice === 'Rock') ||
      (choice === 'Scissors' && opponentRandomChoice === 'Paper')
    ) {
      setResult('Win');
     
      setLeaderboard(prevLeaderboard => {
        const newLeaderboard = { ...prevLeaderboard };
        newLeaderboard[currentPlayer] = (newLeaderboard[currentPlayer] || 0) + 1;
        return newLeaderboard;
      });
    } else {
      setResult('Lose');
    }
  };


  if (!opponent) {
  
    navigate('/lobby');
    return null; 
  }

  return (
    <div className="game">
      <h2>{currentPlayer} vs {opponent}</h2>
      <div>
        <button onClick={() => playGame('Rock')}>Rock</button>
        <button onClick={() => playGame('Paper')}>Paper</button>
        <button onClick={() => playGame('Scissors')}>Scissors</button>
      </div>
      {playerChoice && opponentChoice && (
        <div>
          <p>Your choice: {playerChoice}</p>
          <p>{opponent}'s choice: {opponentChoice}</p>
          <p>Result: {result}</p>
          <button onClick={() => navigate('/lobby')}>Back to Lobby</button>
        </div>
      )}
    </div>
  );
};

export default Game;
