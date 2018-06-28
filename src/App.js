import React, { Component } from 'react';
import './App.css';
import { Match } from './Match';
import { Teams } from './Teams';

class App extends Component {
  render() {
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

    return (
      <div>
        <Teams />
        <hr />

        {matches.map(match => (
          <Match key={match.date + match.teamA} {...match} />
        ))}
      </div>
    );
  }
}

export default App;
