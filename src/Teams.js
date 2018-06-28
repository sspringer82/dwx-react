import React, { Component } from 'react';
import { Team } from './Team';
import { PropTypes } from 'prop-types';

export class Teams extends Component {
  state = {
    teams: [],
  };

  // binding im constructor
  /*constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }*/

  static propTypes = {
    groupName: PropTypes.string.isRequired,
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

  // binding über arrow functions
  //handleDelete = team => {
  handleDelete(team) {
    this.setState(prevState => {
      const teamsClone = [...prevState.teams];
      const teams = teamsClone.filter(t => t.name !== team.name);
      return { teams };
    });
  }

  render() {
    return (
      <div>
        <h1>Gruppe: {this.props.groupName}</h1>

        {this.state.teams.map(team => (
          <Team
            key={team.name}
            {...team}
            onDelete={team => this.handleDelete(team)}
          />
        ))}
      </div>
    );
  }
}
