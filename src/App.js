import React, { Component } from 'react';
import {
    Router,
    Route,
    Link
} from 'react-router'

import './App.css';
<<<<<<< HEAD
=======
import SearchCollection from './components/SearchCollection';
// import { Router, Route, Switch, Link } from 'react-router'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Search from './components/Search'
>>>>>>> ed242354a289ed40aa19528d272d28d53a5bda88

class App extends Component {
  render() {

    const home = () => {
      return (<p>Welcome!</p>);
    };

    return (
<<<<<<< HEAD
        <Router>
          <section>
            <ul>
              <li><Link to="/">Home</Link></li>
              {/*<li><Link to="/search">Search</Link></li>*/}
              {/*<li><Link to="/library">Library</Link></li>*/}
              {/*<li><Link to="/customers">Customers</Link></li>*/}
            </ul>

            <hr/>

            <Route exact path="/" component={home}/>
            {/*<Route path="/search" component={Search}/>*/}
            {/*<Route path="/library" component={Library}/>*/}
            {/*<Route path="/customers" component={Customers}/>*/}
          </section>
        </Router>
=======
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Video Store</h1>
        </header>
      </div>
>>>>>>> ed242354a289ed40aa19528d272d28d53a5bda88
    );
  }
}

export default App;
