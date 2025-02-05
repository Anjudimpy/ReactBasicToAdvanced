import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component{
    constructor(){
        super();
        this.state = {
          movies: [
             {
                title:"The Avengers",
                poster:"https://th.bing.com/th/id/OIP.yZqxvO2SQ-tJ9bGFcuobhwHaLH?w=2000&h=3000&rs=1&pid=ImgDetMain",
                plot:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at ullam corrupti aperiam officia perspiciatis praesentiu",
                price:"199",
                rating:"8.9",
                stars:0,
                fav: false,
                cart:false
             },
             {
                title:"MONSTER HOUSE",
                poster:"https://th.bing.com/th/id/OIP.1umjRUVLTbPQCPVU_q1HPgHaK-?w=1400&h=2075&rs=1&pid=ImgDetMain",
                plot:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at ullam corrupti aperiam officia perspiciatis praesentiu",
                price:"199",
                rating:"8.9",
                stars:0,
                fav: false,
                cart:false
             },
             {
                title:"AVATAR",
                poster:"https://3.bp.blogspot.com/-H57vRpipBhs/T92h_GLMFAI/AAAAAAAAAAc/zLYxoSfXv9w/s1600/avatar_movie_poster_final_01.jpg",
                plot:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at ullam corrupti aperiam officia perspiciatis praesentiu",
                price:"199",
                rating:"8.9",
                stars:0,
                fav: false,
                cart:false
             }
          ]
        }
       
    }

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

    handleInc = (movie) =>{
      const {movies} = this.state;
      const mid =  movies.indexOf(movie);

    if(movies[mid].stars <5){
        movies[mid].stars +=0.5;
    }
       this.setState({
        movies
       })
    }
 
    handleDec= (movie) =>{
        const {movies}  =  this.state;
        const mid = movies.indexOf(movie);

        if(movies[mid].stars >0){
            movies[mid].stars -=0.5;
        }

        this.setState({
            movies
        })
    }

    handleFav = (movie) => {
        const {movies} = this.state;
        const mid = movies.indexOf(movie)

        movies[mid].fav = !movies[mid].fav;
        this.setState({
            movies
        })
    }

    handleCart = (movie) =>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie);

        movies[mid].cart = !movies[mid].cart;
        this.setState({
            movies
        })
    }

    render(){
        const {movies} = this.state;
        return(
            <>
            {movies.map((movie) => <MovieCard movies = {movie} 
                                              addStars = {this.handleInc}
                                              deceasreStar ={this.handleDec}
                                              toggleFav = {this.handleFav}
                                              toggleCart = {this.handleCart}
                                              />)}
            </>
        )
    }
}

export default MovieList;