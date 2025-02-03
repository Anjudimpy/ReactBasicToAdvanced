import { Component } from "react";

class MovieCard extends Component{
    render(){
        return(
          <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img src="https://th.bing.com/th/id/OIP.yZqxvO2SQ-tJ9bGFcuobhwHaLH?w=2000&h=3000&rs=1&pid=ImgDetMain" alt="Poster"/>
                </div>

                <div className="right">
                    <div className="title">The Avengers</div>
                    <div className="plot">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at ullam corrupti aperiam officia perspiciatis praesentium et nam saepe, sit optio magnam amet quasi. Doloremque itaque tenetur voluptates ut culpa?</div>
                    <div className="price">Rs. 199</div>

                    <div className="footer">
                        <div className="rating">8.9</div>
                        <div className="star-dis">
                            <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"/>
                            <img className="stars"
                            src="https://cdn-icons-png.flaticon.com/128/616/616490.png"/>
                            <img className = "str-btn " alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png"/>
                            <span>0</span>
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