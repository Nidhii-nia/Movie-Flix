import MovieCard from "./MovieCard";
// import movies from "./moviesData";

function MovieList(props){
    // const { title, plot, price, rating, stars, favourite, cart, poster } = this.state.movies;
    const { movies } = props;
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movies={movie}
            addStars={props.addStars}
            decreaseStars={props.decreaseStars}
            toggleFav={props.toggleFav}
            toggleCart={props.toggleCart}
          />
        ))}
      </>
    );
}
export default MovieList;
