import React from 'react';

export const Match = ({ date, teamA, teamB, scoreA, scoreB }) => {
  return (
    <div>
      <div>{date}</div>
      <div>
        {teamA} : {teamB}
      </div>
      <div>
        {scoreA} : {scoreB}
      </div>
    </div>
  );
};
