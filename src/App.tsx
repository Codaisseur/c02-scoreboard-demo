import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo';
import Title from "./components/Title";
import LightSwitch from './components/LightSwitch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Title>Hello, World</Title>
          <LightSwitch />
          <LightSwitch />
          <LightSwitch off />
          <LightSwitch />
          <LightSwitch />
          <LightSwitch />
          <LightSwitch />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
