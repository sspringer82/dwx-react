import React from 'react';
import PropTypes from 'prop-types';

export const Team = ({ name, group = 'F', onDelete }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>{group}</div>
      <button onClick={() => onDelete({ name, group })}>löschen</button>
    </div>
  );
};

Team.propTypes = {
  name: PropTypes.string.isRequired,
  group: PropTypes.string,
  onDelete: PropTypes.func,
};
