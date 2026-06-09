import React from "react";

class MovieCard extends React.Component{
    render(){
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://tse4.mm.bing.net/th/id/OIP.zNDZbJ1vd_HW_D_3F1zaYgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"/>
                    </div>
                    <div className="right">
                        <div className="title">The Avengers</div>
                        <div className="plot">SuperNatural Powers shhown in movie.</div>
                        <div className="price">Rs. 199</div>

                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="stars">star</div>
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;