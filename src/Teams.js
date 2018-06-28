import React, { Component } from 'react';
import { Team } from './Team';

export class Teams extends Component {
  state = {
    teams: [],
  };

  componentDidMount() {
    // emulated server communication
    const teams = [
      { name: 'Deutschland', group: 'F' },
      { name: 'Schweden', group: 'F' },
    ];
    Promise.resolve(teams).then(teams => {
      this.setState({ teams });
    });
  }

  render() {
    return (
      <div>
        {this.state.teams.map(team => <Team key={team.name} {...team} />)}
      </div>
    );
  }
}
