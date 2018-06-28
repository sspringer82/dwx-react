import React from 'react';

export const Team = ({ name, group }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>{group}</div>
    </div>
  );
};
