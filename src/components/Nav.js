import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom'


export default class Nav extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav__container">

          <div className="Nav__right">
            <ul className="Nav__item-wrapper">
              <li className="Nav__item">
                <Link className="Nav__link" to="/search">Search</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/library">Library</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/customers">Customers</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
