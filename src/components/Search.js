import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    console.log(this.state.query);
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit}>
      <div>

        <input
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

export default Search;
