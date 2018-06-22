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
  renderMessage = () => {
    if(this.state.message){
      return(
        <p>{this.state.message}</p>
      )
    }
  }

  createRental = () => {
    let date = new Date();
    date.setDate(date.getDate() + 7);
    axios.post(URL + `${this.state.selectedMovie}/check-out?customer_id=${this.state.customerId}&due_date=${date}`)
    .then((response) => {
      console.log(response);
      this.setState({
        message: "Successfully created Rental",

        selectedMovie: "None",
        selectedCustomer: "None",
        selectedCustomerId: "",
      })

    })
    .catch((error) => {
      this.setState({
        message: error.message
      })
      console.log(error);
    })
  }
  render() {

    const home = () => {
      return (<iframe src="https://giphy.com/embed/tBvPFCFQHSpEI" width="100%" fullscreen="true"  height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>);
    };


    return (
      <Router>
      <section className="body">
      <header className="hollywood">
      <Link to="/"><img src={mainLogo} className="App-logo" />Hollywood Video</Link>
      </header>
      <section className="nav-bar">
      <ul className="nav-items">
      <li><Link to="/search"> <Ionicon icon="ios-search" color="black" fontSize="35px" /><div>Search</div>
      </Link></li>
      <li><Link to="/library"><Ionicon icon="ios-film" fontSize="35px" color="black"/><div>Library</div></Link></li>
      <li><Link to="/customers"><Ionicon icon="ios-people" fontSize="35px" color="black"/><div>Customers</div></Link></li>
      </ul>
      <ul className="rental-items">
      <li><div className="selection-container">Selected Movie: <div className="selection">{this.state.selectedMovie}</div></div></li>
      <li><div className="selection-container">Customer:<div className="selection"> {this.state.selectedCustomer}</div></div></li>
      <li><button className="button" onClick={this.createRental}> Check-out</button></li>
      </ul>
      </section>
      {this.renderMessage() && <section className="message">{this.renderMessage()}</section>}

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
