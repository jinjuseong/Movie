import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const moiveTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/91sTE00%2Bm%2BL._SY606_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg",
  "http://images2.fanpop.com/images/photos/5300000/Star-Wars-Movies-star-wars-5346079-1024-768.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Movie title={moiveTitles[0]} poster={movieImages[0]}/>
        <Movie title={moiveTitles[1]} poster={movieImages[1]}/>
        <Movie title={moiveTitles[2]} poster={movieImages[2]}/>
        <Movie title={moiveTitles[3]} poster={movieImages[3]}/>

      </div>
    );
  }
}

export default App;
