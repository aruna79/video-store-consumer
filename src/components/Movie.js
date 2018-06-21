
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    selectedMovieCallback: PropTypes.func.isRequired,
  }

  selectedMovieCallback = () => {
    this.props.selectedMovieCallback(this.props.title);
  }

  render() {
    return (
      <div className="Movie">
        <h2>{this.props.title}</h2>
        <p>{this.props.releaseDate}</p>
        <img src={this.props.image} />
        <p>{this.props.overview}</p>
        <button onClick={this.selectedMovieCallback} >Select This Movie</button>
      </div>
    );
  }
}


Movie.propTypes = {
  image: PropTypes.string.isRequired,
}


export default Movie;
