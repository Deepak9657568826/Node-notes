
import React from 'react';

const WaitingList = ({ waitingList, setWaitingList }) => {
  return (
    <div className="waiting-list">
      <h2>Waiting List</h2>
      <ul>
        {waitingList.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default WaitingList;
