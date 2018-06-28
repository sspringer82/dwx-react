import React, { Component } from 'react';
import { Match } from './Match';
import { MatchForm } from './MatchForm';
import { Link, Redirect } from 'react-router-dom';

export class Matches extends Component {
  state = {
    matches: [],
  };

  componentDidMount() {
    // emulated server communication
    const matches = [
      {
        date: '27.06.2018 16:00',
        teamA: 'Deutschland',
        teamB: 'Südkorea',
        scoreA: '0',
        scoreB: '2',
      },
      {
        date: '27.06.2018 16:00',
        teamA: 'Schweden',
        teamB: 'Mexiko',
        scoreA: '3',
        scoreB: '0',
      },
    ];
    Promise.resolve(matches).then(matches => {
      this.setState({ matches });
    });
  }

  handleSubmit(match) {
    this.setState(prevState => {
      const matchesClone = [...prevState.matches];
      matchesClone.push(match);
      return { matches: matchesClone };
    });
  }

  render() {
    //return <Redirect to="/" />;

    //console.log(this.props.match.params.team);

    return (
      <div>
        {this.state.matches.map(match => (
          <Match key={match.date + match.teamA} {...match} />
        ))}
        <MatchForm onSubmit={match => this.handleSubmit(match)} />

        <Link to="/">Teams</Link>
      </div>
    );
  }
}
