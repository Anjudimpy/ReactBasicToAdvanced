import { Component } from "react";

class MovieCard extends Component{

    render(){
        const {addStars,deceasreStar, toggleFav, toggleCart, movies} =  this.props;
        const {title, plot, price, rating, stars,fav, cart,poster} = this.props.movies;
        return(
          <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img src={poster} alt="Poster"/>
                </div>

                <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">{price}</div>

                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                            <img onClick={() => {deceasreStar(movies)}} className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png"/>

                            <img className="stars"
                            src="https://cdn-icons-png.flaticon.com/128/616/616490.png"/>

                            <img onClick={() => {addStars(movies)}} className = "str-btn " alt="increase" src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"/>
                            <span>{stars}</span>
                        </div>

                        {/* {fav?<button className="unfavourite-btn " onClick={this.handleFav}>Un-favourite</button>:
                        <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>}
                         */}
                                            {/* or */}
                                            
                        <button className={fav?"unfavourite-btn":"favourite-btn"}onClick={() => {toggleFav(movies)}}>{fav?"Un-favourite":"Favourite"}</button>
                    
                        <button className={cart?"remove":"cart-btn"} onClick={() => {toggleCart(movies)}}>{cart?"Remove":"Add to cart"}</button>
                    </div>
                </div>
            </div>

          </div>
        )
    }
}

export default MovieCard