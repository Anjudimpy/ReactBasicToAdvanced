import { Component } from "react";

class MovieCard extends Component{
    constructor(){
        super();
        this.state = {
            title:"The Avengers",
            plot:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at ullam corrupti aperiam officia perspiciatis praesentiu",
            price:"199",
            rating:"8.9",
            stars:0,
            fav: false,
            cart:false
        }
       
    }
    addStars=() =>{
        if(this.state.stars >= 5){
            return;
        }
        //form 1

    //    this.setState({
    //         stars: this.state.stars +0.5
    //     });
    
    // form2

        this.setState((prevState) =>{
            return{
                stars: prevState.stars+0.5
            }
        });
    }
    minusStars=() =>{
        if(this.state.stars <=0){
            return;
        }
        this.setState((prevState) =>{
            return{
                stars: prevState.stars-0.5
            }
        });
    }

    handleFav=()=>{
       this.setState({fav: !this.state.fav})
    }

    handleCart=()=>{
        this.setState({cart: !this.state.cart})
    }
    render(){
        const {title, plot, price, rating, stars,fav, cart} = this.state;
        return(
          <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img src="https://th.bing.com/th/id/OIP.yZqxvO2SQ-tJ9bGFcuobhwHaLH?w=2000&h=3000&rs=1&pid=ImgDetMain" alt="Poster"/>
                </div>

                <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">{price}</div>

                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                            <img onClick={this.minusStars} className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/43/43625.png"/>

                            <img className="stars"
                            src="https://cdn-icons-png.flaticon.com/128/616/616490.png"/>

                            <img onClick={this.addStars} className = "str-btn " alt="decrease" src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"/>
                            <span>{stars}</span>
                        </div>

                        {/* {fav?<button className="unfavourite-btn " onClick={this.handleFav}>Un-favourite</button>:
                        <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>}
                         */}
                                            {/* or */}
                                            
                        <button className={fav?"unfavourite-btn":"favourite-btn"}onClick={this.handleFav}>{fav?"Un-favourite":"Favourite"}</button>
                    
                        <button className={cart?"remove":"cart-btn"} onClick={this.handleCart}>{cart?"Remove":"Add to cart"}</button>
                    </div>
                </div>
            </div>

          </div>
        )
    }
}

export default MovieCard