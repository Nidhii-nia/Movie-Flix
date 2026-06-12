// import React from "react";

// class App extends React.Component{

//   render(){
//     return <h1>Class Component</h1>
//   }
// }
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { Component } from "react";
import movies from "./moviesData";
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  addStars = (movie) => {
    const { movies } = this.state;
    const updateAddStars = movies.map((m) => {
      if (m === movie && m.stars < 5) {
        return {
          ...m,
          stars: m.stars + 0.5,
        };
      }
      return m;
    });
    this.setState({
      movies: updateAddStars,
    });
  };

  decreaseStars = (movie) => {
    const { movies } = this.state;
    const updateStars = movies.map((m) => {
      if (m === movie && m.stars > 0) {
        return {
          ...m,
          stars: m.stars - 0.5,
        };
      }
      return m;
    });
    this.setState({
      movies: updateStars,
    });
  };

  toggleFav = (movie) => {
    const { movies } = this.state;

    const updateFavBtn = movies.map((m) => {
      if (m === movie) {
        return {
          ...m,
          favourite: !m.favourite,
        };
      }
      return m;
    });
    this.setState({
      movies: updateFavBtn,
    });
  };

toggleCart = (movie) => {
  this.setState((prevState) => {
    const updatedMovies = prevState.movies.map((m) => {
      if (m === movie) {
        return {
          ...m,
          cart: !m.cart,
        };
      }
      return m;
    });

    return {
      movies: updatedMovies,
      cartCount: movie.cart
        ? prevState.cartCount - 1
        : prevState.cartCount + 1,
    };
  });
};

  render() {
    const {movies} = this.state;
    return (
      <>
        <Navbar cartCount = {this.state.cartCount}/>
        <MovieList movies = {movies}
        cartCount={this.state.cartCount}
        addStars = {this.addStars}
        decreaseStars = {this.decreaseStars}
        toggleFav={this.toggleFav}
        toggleCart = {this.toggleCart}
        />
      </>
    );
  }
}

export default App;
