import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Search from './Search';
import Movie from './Movie';

class SearchCollection extends Component {
  constructor(props){
    super(props);
    this.state = {
      matchingMovies: [],
    }
  }

  searchMovie = (movie) => {


    axios.get(`localhost:3000/movies?query=${movie}`)
    .then((response) => {
      this.setState({
        matchingMovies: response.data,
      });
    })
    .catch((error) => {
      this.setState({error: error.message})
    });
  }


  renderMovieList = () => {
    const componentList = this.state.matchingMovies.map((movie,index) =>{
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
      <header><h2>Movies Found </h2></header>
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
