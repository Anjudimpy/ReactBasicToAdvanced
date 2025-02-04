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
        }
       
    }
    addStars=() =>{
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
        this.setState((prevState) =>{
            return{
                stars: prevState.stars-0.5
            }
        })
    }
    render(){
        const {title, plot, price, rating, stars} = this.state;
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
                        <button className="favourite-btn">Favourite</button>
                        <button className="cart-btn">Add to cart</button>
                    </div>
                </div>
            </div>

          </div>
        )
    }
}

export default MovieCard