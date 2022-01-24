
import React from "react";
import { Component } from "react/cjs/react.production.min";
import {Header, MovieList, MovieDetails, Loading} from "./components";
import DataMovies from './data';


class App extends Component{

  constructor(props) {
    super(props);
    this.state= {
      movies:null,
      selectedMovie: 0,
      loaded: false
    }
    setTimeout(() => {
      this.setState({
        movies: DataMovies,
        loaded:true
      })
    },2000) ;     
  }

  updateSelectedMovie = (index) => {    
    this.setState({
      selectedMovie : index
    })
  }



  render() {
    return (
      <div className="App d-flex flex-column">
        <Header/>
        { this.state.loaded ? (
             <div className="d-flex flex-row  flex-fill pt-4 p-2">
             <MovieList movies={ this.state.movies} updateSelectedMovie={this.updateSelectedMovie}/>
             <MovieDetails movie={this.state.movies[this.state.selectedMovie]}/>
           </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }  
}

export default App;