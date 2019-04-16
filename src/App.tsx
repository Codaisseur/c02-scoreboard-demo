import React, { Component } from 'react';
import './App.css';
import UserBoard from './components/UserBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserBoard />
      </div>
    );
  }
}

export default App;
