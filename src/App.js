import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ContraMusicPlayer} from "./ContraMusicPlayer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContraMusicPlayer />

      </div>
    );
  }
}

export default App;
