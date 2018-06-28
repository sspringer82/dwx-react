import React, { Component } from 'react';

export class MatchForm extends Component {
  state = {
    date: '',
    teamA: '',
    teamB: '',
    scoreA: 0,
    scoreB: 0,
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ date: '', teamA: '', teamB: '', scoreA: 0, scoreB: 0 });
  }

  render() {
    return (
      <form
        onSubmit={event => this.handleSubmit(event)}
        onChange={event => this.handleChange(event)}
      >
        <div>
          <label htmlFor="name">Datum/Zeit</label>
          <input type="text" name="date" id="date" value={this.state.date} />
        </div>
        <div>
          <label htmlFor="name">Team A</label>
          <input type="text" name="teamA" id="teamA" value={this.state.teamA} />
        </div>
        <div>
          <label htmlFor="name">Team B</label>
          <input type="text" name="teamB" id="teamB" value={this.state.teamB} />
        </div>
        <div>
          <label htmlFor="name">Score A</label>
          <input
            type="text"
            name="scoreA"
            id="scoreA"
            value={this.state.scoreA}
          />
        </div>
        <div>
          <label htmlFor="name">Score B</label>
          <input
            type="text"
            name="scoreB"
            id="scoreB"
            value={this.state.scoreB}
          />
        </div>
        <button>speichern</button>
      </form>
    );
  }
}
