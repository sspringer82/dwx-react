import React, { Component } from 'react';

export class TeamForm extends Component {
  state = {
    name: 'Deutschland',
    group: '',
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', group: '' });
  }

  render() {
    return (
      <form
        onSubmit={event => this.handleSubmit(event)}
        onChange={event => this.handleChange(event)}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={this.state.name} />
          <input type="text" name="group" id="group" value={this.state.group} />
        </div>
        <button>speichern</button>
      </form>
    );
  }
}
