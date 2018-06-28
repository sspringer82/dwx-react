import React from 'react';

export const Team = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>{props.group}</div>
    </div>
  );
};
