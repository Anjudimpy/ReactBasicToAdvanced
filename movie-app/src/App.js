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
      <Navbar/>
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
