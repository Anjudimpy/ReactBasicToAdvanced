import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import {movies} from "./MovieData";

class App extends Component{
  constructor(){
    super();
    this.state = {
      movies:movies,
      countCart: 0
    }
   
}
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
      let {movies, countCart} = this.state;
      const mid = movies.indexOf(movie);

      movies[mid].cart = !movies[mid].cart;
      if(movies[mid].cart){
           countCart += 1;
      } else{
        countCart -= 1;
      }
      this.setState({
          movies, 
          countCart
      })
  }
  render(){
    const {movies, countCart} = this.state;
    return(
      <>
      <Navbar countCart = {countCart}/>
      <MovieList movies = {movies} 
                 addStars = {this.handleInc}
                 dceasreStar ={this.handleDec}
                 toggleFav = {this.handleFav}
                 toggleCart = {this.handleCart}
      
      />
      </>
    )
  }

}

export default App;
