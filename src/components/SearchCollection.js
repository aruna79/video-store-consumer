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

  onFormSubmit = (event) => {
    const movies = this.state.matchingMovies
    event.preventDefault();
    console.log(movies[event.target.getAttribute('value')]);
  }


  renderMovieList = () => {
    const componentList = this.state.matchingMovies.map((movie,index) =>{
      return (
        <form key={movie.title} onSubmit={this.onFormSubmit} value={index}  >
          <Movie
            value={index}
            key={index}
            title={movie.title}
            image={movie.image_url}
          />
          <input type='submit' value='Add to Library'/>
        </form>
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
