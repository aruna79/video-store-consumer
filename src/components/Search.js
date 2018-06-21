import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css'

class Search extends Component{
  constructor(){
    super();

    this.state = {
      query: ''
    }
  }
  onFieldChange = (event) => {
    const fieldName =event.target.name;
    const fieldValue =event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.searchMovieCallback(this.state.query);
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit}>
      <header className='new-card-form__header'><h3>Search by Movie Title</h3></header>

      <div>
        <input
          className="searchField"
          name="query"
          value={this.state.query}
          onChange={this.onFieldChange}
          type="text" />
      </div>
      <input type='submit' value='Search for Movie' />
      </form>
      )
  }
}


Search.propTypes = {
  searchMovieCallback: PropTypes.func.isRequired,
}


export default Search;
