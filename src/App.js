import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import SearchCollection from './components/SearchCollection';
import CustomerCollection from './components/CustomerCollection';


class App extends Component {
  constructor () {
    super()
  this.state = {
      selectedMovie: "",
      selectedCustomer: "",
    }
  }

  setSelectedMovie = (title) => {
    this.setState({
      selectedMovie: title,
    });
  }

  render() {

    const home = () => {
      return (<p>Welcome!</p>);
    };


    return (
      <Router>
      <section>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/customers">CustomerCollection</Link></li>
      <li>selectedMovie: {this.state.selectedMovie}</li>
      </ul>



      <Route exact path="/" component={home}/>
      <Route path="/search" component={SearchCollection}/>
      <Route path="/customers" component={CustomerCollection}/>
      render () => {
        <Library selectedMoviecallback = {this.selectedMovie} />
      }
      </section>
      </Router>
    );
  }
}

export default App;
