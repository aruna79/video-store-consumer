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

const URL = "http://localhost:3000/rentals/check-out"

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
 //  makeRental = (event) => {
 //
 //
 //   let date = new Date();
 //   date.setDate(date.getDate() + 7);
 //   console.log("aruna");
 //   console.log(event);
 //   console.log("!!!!!")
 //   axios.post(URL+"rentals/"+this.state.selectedMovieTitle+"/check-out", {
 //     title: this.state.selectedMovie,
 //     customer_id: this.state.customerId,
 //     due_date: date
 //   })
 //   .then((response) => {
 //     console.log(response);
 //   })
 //   .catch((error) => {
 //     console.log(error);
 //   })
 //
 // }
   createRental = () => {
     console.log(URL);
     console.log(this.state.customerId);
     console.log(this.state.selectedMovie);
    axios.post(URL + `?customer_id=${this.state.customerId}&title=${this.state.selectedMovie}`)
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
