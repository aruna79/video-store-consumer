import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Search from './Search';
import Movie from './Movie';
import MovieResult from './MovieResult'

class SearchCollection extends Component {
  constructor(props){
    super(props);
    this.state = {
      matchingMovies: [],
    }
  }

  searchMovie = (movie) => {
    axios.get(`http://localhost:3000/movies?query=${movie}`)
    .then((response) => {
      this.setState({
        matchingMovies: response.data,
      });
    })
    .catch((error) => {
      this.setState({error: error.message})
    });
  }

  addToLibrary = (movie) => {
    console.log('Adding Movie');
    console.log(movie);
    axios.post(`http://localhost:3000/movies`, movie)
    .then((response) => {
      console.log(response);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
      this.setState({
        message: error.message,
      })
    });
  }

  renderMovieList = () => {
    let movies = this.state.matchingMovies
    const componentList = this.state.matchingMovies.map((movie,index) =>{
      return (
          <MovieResult
            value={index}
            key={index}
            title={movie.title}
            overview={movie.overview}
            image_url={movie.image_url.substring(31)}
            release_date={movie.release_date}
            external_id={movie.external_id}
            image={movie.image_url}
            details={movies[index]}
            addToLibraryCallback={this.addToLibrary}
          />
      )
    } );
    return componentList;
  }

  render() {
    return(
      <section>
      <p>{this.state.error}</p>
      <Search
        searchMovieCallback={this.searchMovie}
      />
      {this.renderMovieList()}
      </section>
    )
  }
}

export default SearchCollection;
