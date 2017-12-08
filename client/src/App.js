import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    axios.post('/list', { title: this.title.value });
    this.form.reset();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={this.handleSubmit} ref={form => (this.form = form)}>
          <div className="input-field">
            <label htmlFor="list-title">Label</label>
            <input
              ref={input => (this.title = input)}
              id="list-title"
              placeholder="title"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
