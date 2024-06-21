
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setPlayers, setCurrentPlayer, players }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && !players.includes(username)) {
      setPlayers([...players, username]);
      setCurrentPlayer(username);
      navigate('/lobby');
    } else {
      alert('Username is either empty or already taken!');
    }
  };

  console.log('Players:', players); 

  return (
    <div className="login">
      <h2>Enter Username to Join</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button onClick={handleLogin}>Join</button>
    </div>
  );
};

export default Login;
