import React from "react";

class MovieCard extends React.Component {

  render() {
    const { title, plot, price, rating, stars, favourite, cart } = this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://tse4.mm.bing.net/th/id/OIP.zNDZbJ1vd_HW_D_3F1zaYgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
            />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="stars">
                <img
                  alt="minus"
                  onClick={()=>{this.props.decreaseStars(this.props.movies)}}
                  src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                />
                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                />
                <img
                  alt="plus"
                  onClick={()=>{this.props.addStars(this.props.movies)}}
                  src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png"
                />
                <span className="starCount">{stars}</span>
              </div>
              <button className={favourite?"unfavourite-btn":"favourite-btn"} onClick={()=>{this.props.toggleFav(this.props.movies)}}>{favourite?"Unfavourite":"Favourite"}</button>
              <button className={cart?"removeCart-btn":"cart-btn"} onClick={()=>{this.props.toggleCart(this.props.movies)}}>{cart?"Remove from Cart":"Add to Cart"}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
