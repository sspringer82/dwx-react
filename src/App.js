import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './App.css';
import { Matches } from './Matches';
import { Teams } from './Teams';
import { teams } from './team.reducer';

const store = createStore(combineReducers({ teams }));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Teams groupName="F" />
          <hr />
          <Matches />
        </div>
      </Provider>
    );
  }
}

export default App;
