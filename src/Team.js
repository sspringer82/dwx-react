import React from 'react';
import PropTypes from 'prop-types';

export const Team = ({ name, group }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>{group}</div>
    </div>
  );
};

Team.propTypes = {
  name: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
};
