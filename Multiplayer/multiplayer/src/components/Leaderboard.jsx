
import React from 'react';

const Leaderboard = ({ leaderboard }) => {
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {Object.entries(leaderboard).sort((a, b) => b[1] - a[1]).map(([player, score], index) => (
          <li key={index}>
            {player}: {score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
