import React from "react";

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "SuperNatural Powers shown in movie.",
      price: "Rs. 199",
      rating: 8.9,
      stars: 0,
    };
  }

  addStars = () => {
    this.setState((prevState) => {
      console.log(prevState);
      if (prevState.stars < 5) {
        return {
          stars: prevState.stars + 0.5,
        };
      }
    });
  };

  decreaseStars = () => {
    this.setState((prevState) => {
        console.log(prevState);
      if (prevState.stars >= 0.5) {
        return {
          stars: prevState.stars - 0.5,
        };
      }
    });
  };

  render() {
    const { title, plot, price, rating, stars } = this.state;
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
                  onClick={this.decreaseStars}
                  src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                />
                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                />
                <img
                  alt="plus"
                  onClick={this.addStars}
                  src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png"
                />
                <span className="starCount">{stars}</span>
              </div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
