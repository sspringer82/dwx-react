import React, { Component } from 'react';
import './App.css';
import { Matches } from './Matches';
import { Teams } from './Teams';

class App extends Component {
  render() {
    return (
      <div>
        <Teams groupName="F" />
        <hr />
        <Matches />
      </div>
    );
  }
}

export default App;
