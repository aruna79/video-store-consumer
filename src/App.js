import React, { Component } from 'react';

import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,Props
} from 'react-router-dom';
import './App.css';
import SearchCollection from './components/SearchCollection';
import CustomerCollection from './components/CustomerCollection';
import Library from './components/Library';

const URL = "http://localhost:3000/rentals/"

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedMovie: "",
      selectedCustomer: "",
      customerId: ""
    }
  }

  setSelectedMovie = (title) => {
    this.setState({
      selectedMovie: title,
    });
  }
  setSelectedCustomer = (name,id) => {
    this.setState({
      selectedCustomer: name,
      customerId: id
    });
  }

   createRental = () => {
     let date = new Date();
     date.setDate(date.getDate() + 7);
    axios.post(URL + `${this.state.selectedMovie}/check-out?customer_id=${this.state.customerId}&due_date=${date}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
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
      <li><Link to="/customers">Customer</Link></li>
      <li><Link to="/library">Library</Link></li>
      <li>selectedMovie: {this.state.selectedMovie}</li>
      <li>selectedCustomer: {this.state.selectedCustomer}</li>
      <button className="button" onClick={this.createRental}>Create Rental</button>
      </ul>

      <Route exact path="/" component={home}/>
      <Route path="/search" component={SearchCollection}/>

      <Route path="/library"
      render={(props) => <Library {...props} selectedMovieCallback={this.setSelectedMovie} />}

      />
      <Route path="/customers"
      render={(props) => <CustomerCollection {...props} selectedCustomerCallback={this.setSelectedCustomer} />}

      />
      </section>
      </Router>
    );
  }
}

export default App;
