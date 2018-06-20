import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

  onFormSubmit = (event) => {
    event.preventDefault();
    let movie = {
      title: this.props.title,
      overview: this.props.overview,
      release_date: this.props.release_date,
      image_url: this.props.image_url,
      external_id: this.props.external_id
    }
    this.props.addToLibraryCallback(movie)
  }


  render() {
    return (
      <article>
        <img src={this.props.image}/>
        <p>{this.props.title}</p>
      <form onSubmit={this.onFormSubmit}>
        <input type='submit' value='Add to Library' />
      </form>
      
      </article>
    )
  }
}

Movie.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Movie;
