import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router';
import Nav from './components/Nav';
import Search from './components/Search';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <Nav />
              <Switch>
                <Route exactly component={Search} pattern="/search" render={Search}/>
              </Switch>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
