import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

class Library extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
    }
  }

  componentDidMount = () => {
    axios.get(`http://localhost:3000/movies`)
    .then((response) => {
      this.setState({
        movies: response.data,
      });
    })
    .catch((error) => {
      this.setState({error: error.message})
    });
  }


  renderMovieList = () => {
    const componentList = this.state.movies.map((movie,index) =>{
      return (
        <Movie
        key={index}
        id={movie.id}
        image={movie.image_url}
        title={movie.title}
        />

      )
    } );
    return componentList;
  }

  render() {
    return(
      <section>
        <header><h2> Library </h2></header>
        <p>{this.state.error}</p>
        { this.renderMovieList()}
      </section>
    )
  }
}

export default Library;
