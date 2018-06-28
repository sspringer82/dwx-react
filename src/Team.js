import React from 'react';
import PropTypes from 'prop-types';

import { Headline } from './styles';

export const Team = ({ name, group = 'F', onDelete }) => {
  const color = 'blue';
  const className = 'team';

  return (
    <div className={className}>
      <Headline>{name}</Headline>
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
