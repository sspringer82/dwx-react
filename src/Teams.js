import React from 'react';
import { Team } from './Team';
import { PropTypes } from 'prop-types';
import { TeamForm } from './TeamForm';

export const Teams = ({ teams, addTeam, removeTeam }) => {
  return (
    <div>
      {teams
        ? teams.map(team => (
            <Team
              key={team.name}
              {...team}
              onDelete={team => removeTeam(team)}
            />
          ))
        : ''}
      <TeamForm
        onSubmit={team => {
          addTeam(team);
        }}
      />
    </div>
  );
};

Teams.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object),
  removeTeam: PropTypes.func,
  addTeam: PropTypes.func,
};
