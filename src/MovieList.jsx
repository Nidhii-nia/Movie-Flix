import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "The Avengers",
          plot: "Earth's mightiest heroes unite to save the world.",
          price: "Rs. 199",
          rating: 8.9,
          stars: 0,
          favourite: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjY2NmEtYzQ0Zi00YzQzLWFmODAtZGQ5N2VmM2QxZjQ4XkEyXkFqcGc@._V1_.jpg",
        },
        {
          title: "Iron Man",
          plot: "Tony Stark builds a powerful suit and becomes a superhero.",
          price: "Rs. 149",
          rating: 8.5,
          stars: 0,
          favourite: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/M/MV5BNjQzNzY0MjEtM2Q5NS00MzM0LWFmNTEtYjE2YjQ0Njk4YzVlXkEyXkFqcGc@._V1_.jpg",
        },
        {
          title: "The Dark Knight",
          plot: "Batman faces the Joker in a battle for Gotham City.",
          price: "Rs. 249",
          rating: 9.0,
          stars: 0,
          favourite: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        },
        {
          title: "Spider-Man: No Way Home",
          plot: "Spider-Man encounters villains from multiple universes.",
          price: "Rs. 299",
          rating: 8.7,
          stars: 0,
          favourite: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/M/MV5BNmFiZDM2NzMtZDE2Mi00M2U5LTk3ODEtOGE2N2M5NmQ5ZGRkXkEyXkFqcGc@._V1_.jpg",
        },
      ],
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
    const { movies } = this.state;
    const updateCartBtn = movies.map((m) => {
      if (m === movie) {
        return {
          ...m,
          cart: !m.cart,
        };
      }
      return m;
    });
    this.setState({
      movies: updateCartBtn,
    });
  };

  render() {
    // const { title, plot, price, rating, stars, favourite, cart, poster } = this.state.movies;
    const { movies } = this.state;
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movies={movie}
            addStars={this.addStars}
            decreaseStars={this.decreaseStars}
            toggleFav={this.toggleFav}
            toggleCart={this.toggleCart}
          />
        ))}
      </>
    );
  }
}
export default MovieList;
