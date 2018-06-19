import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(`movie id ${this.props}`);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <img src={this.props.image}/>
        <p>{this.props.title}</p>
        <p>{this.props.id}</p>
        <input type='submit' value='Add To Library' />
      </form>
    )
  }
}

Movie.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Movie;
