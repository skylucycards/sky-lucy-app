import React, { Component } from 'react';
import headerImage from './header_nl.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={headerImage} alt="logo" />
          <p>
            Sky Lucy
          </p>
        </header>
      </div>
    );
  }
}

export default App;
