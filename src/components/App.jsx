import React from 'react';
import Movies from './Movies.jsx';
import Search from './Search.jsx';
import exampleMovies from '../exampleData/exampleMovies';
import config from '../../config'

import '../styles/App.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: exampleMovies.movieData,
      favorites: [{ deway: 'favorites' }],
      genres: [],
      showFaves: false,
    };
    // you might have to do something important here!
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=1a0d1fd156dd91954aa4ead254bd031f&language=en-US')
      .then((response) => response.json())
      .then((something) => this.setState({something }, () => console.log(this.state)) )
  }

  swapFavorites() {
    // don't touch
    this.setState({
      showFaves: !this.state.showFaves,
    });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>
        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
             genres={this.state.genres}
            movies={this.state.showFaves ? this.state.favorites : this.state.movies}
          />
          <Movies
            movies={this.state.showFaves ? this.state.favorites : this.state.movies}
            showFaves={this.state.showFaves}

          />
        </div>
      </div>
    );
  }
}

export default App;
