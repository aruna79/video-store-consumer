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
import Ionicon from 'react-ionicons'
import mainLogo from './components/film-reel.png'

const URL = "http://localhost:3000/rentals/"

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedMovie: "None",
      selectedCustomer: "None",
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
      <section className="body">
        <header>
        <Link to="/"><img src={mainLogo} className="App-logo" />Hollywood Video</Link>
        </header>
        <section className="nav-bar">
          <ul className="nav-items">
            <li><Link to="/search"> <Ionicon icon="ios-search" fontSize="35px" color="black"/><div>Search</div>
            </Link></li>
            <li><Link to="/customers"><Ionicon icon="ios-people" fontSize="35px" color="black"/><div>Customers</div></Link></li>
            <li><Link to="/library"><Ionicon icon="ios-film" fontSize="35px" color="black"/><div>Library</div></Link></li>
          </ul>
          <ul className="rental-items">
            <li>Selected Movie: {this.state.selectedMovie}</li>
            <li>Selected Customer: {this.state.selectedCustomer}</li>
            <button className="button" onClick={this.createRental}>Create Rental</button>
          </ul>
        </section>

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
