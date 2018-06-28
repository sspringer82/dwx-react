import React, { Component } from 'react';
import './App.css';
import { Team } from './Team';
import { Match } from './Match';

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
        <Team name="Schweden" group="F" />
        <hr />

        {matches.map(match => <Match {...match} />)}
      </div>
    );
  }
}

export default App;
