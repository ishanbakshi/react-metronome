import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Metronome from './components/Metronome/Metronome.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Metronome  />
        </header>
      </div>
    );
  }
}

export default App;
