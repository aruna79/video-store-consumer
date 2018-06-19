import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchCollection from './components/SearchCollection';
// import { Router, Route, Switch, Link } from 'react-router'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Search from './components/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Video Store</h1>
        </header>
      </div>
    );
  }
}

export default App;
