import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Timer from "./components/Timer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer phase="Bloom" />
        <Timer phase="Main" />
      </div>
    );
  }
}

export default App;
