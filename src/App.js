import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchCollection from './components/SearchCollection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Search</div>
          <div>Library</div>
          <div>Customers</div>
          <div>Selected Movie</div>
          <div>Selected Customer</div>
        </header>
        < SearchCollection />
      </div>
    );
  }
}

export default App;
