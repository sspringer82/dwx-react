import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';
import { Matches } from './Matches';
import { TeamsContainer } from './Teams.container';
import { teams } from './team.reducer';
import { Children } from './Children';
//import { matches } from './match.reducer';

const store = createStore(
  combineReducers({ teams /*matches*/ }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" render={() => <Redirect to="/team" />} />

            <Route path="/team" component={TeamsContainer} />
            <Route path="/matches/:team" component={Matches} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
