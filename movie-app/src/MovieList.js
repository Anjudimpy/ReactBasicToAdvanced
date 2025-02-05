import { Component } from "react";
import MovieCard from "./MovieCard";
import { movies } from "./MovieData";

class MovieList extends Component{
 
    // addStars=() =>{
    //     if(this.state.stars >= 5){
    //         return;
    //     }
    //     //form 1

    // //    this.setState({
    // //         stars: this.state.stars +0.5
    // //     });
    
    // // form2

    //     this.setState((prevState) =>{
    //         return{
    //             stars: prevState.stars+0.5
    //         }
    //     });
    // }
    // minusStars=() =>{
    //     if(this.state.stars <=0){
    //         return;
    //     }
    //     this.setState((prevState) =>{
    //         return{
    //             stars: prevState.stars-0.5
    //         }
    //     });
    // }

    // handleFav=()=>{
    //    this.setState({fav: !this.state.fav})
    // }

    // handleCart=()=>{
    //     this.setState({cart: !this.state.cart})
    // }



    render(){
        const {movies,addStars ,deceasreStar,toggleFav,toggleCart} = this.props;
        return(
            <>
            {movies.map((movie) => <MovieCard movies = {movie} 
                                              addStars = {addStars}
                                              deceasreStar ={deceasreStar}
                                              toggleFav = {toggleFav}
                                              toggleCart = {toggleCart}
                                              key={movie.id}
                                              />)}
            </>
        )
    }
}

export default MovieList;