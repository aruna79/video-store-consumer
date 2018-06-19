import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

  render() {
    return (
      <section>
        <img src={this.props.image}/>
        <p>{this.props.title}</p>
      </section>
    )
  }
}

Movie.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Movie;
