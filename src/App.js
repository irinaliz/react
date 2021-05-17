// import axios from "axios";
import React from "react";
import moviesjson from "./movies.json"
import Movie from "./Movie.js"
import "./App.css";
// import propTypes from "prop-types";


class App extends React.Component {
  state = {
    isLoading: true,
    count: 0,
    movies: []
  }
  // add = () =>{
  //   console.log("add1 : "+this.state.count);
  //   this.setState( current => ( {count: current.count +1})); //현재 state에 있는 최신값을 가져온 다음 더함.
  //   //setstate는 할때마다 리랜더링을 함.
  // }
  // minus =() =>{
  //   console.log("minus")
  //   this.setState( {count: this.state.count -1}); //랜더링 된 값을 가져와서 뺌
  //   // this.setState( current => ( {count: current.count -1}));
  // }

  // constructor(pros){
  //   super(pros)
  //   console.log("constructor");
  // }
  // shouldComponentUpdate(){
  //   console.log("update전 : "+this.state.count)
  //   return true;
  //   // setstate는 무조건 업데이트에 속해있고 setstate를 할때마다 리랜더링이 되지만, 
  //   // 이 return false값에 의해 리랜더링이 거절된다
  // }

  // componentDidMount(){
  //   console.log("DidMount");
  // }
  // componentDidUpdate(){
  //   console.log("update후: " + this.state.count);
  // }
  getMovies = async () => {
    console.log("3");
    // const {data:{data:{moves}}} = await axios.get("url");
    const movies = moviesjson.data.movies;
   // console.log(movies);
    this.setState( {movies ,isLoading:false});

  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState(current => ({isLoading: current.isLoading = false}))
    // }, 2000);
    console.log("1");
    this.getMovies();
    console.log("2");
  }
  render() {
    const { isLoading ,movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (<div className="loader">
        <span className="loader_text"> Loading... </span>
        </div> 
        ) : (
        <div className="movies"> 
        {movies.map( movie =>(
          <Movie 
          key ={movie.id}
          id = {movie.id}
          year = {movie.year}
          title = {movie.title}
          summary =  {movie.summary}
          poster = {movie.medium_cover_image}
          genres = {movie.genres}
          />
        )) }
        </div>)
  }
      </section>
        
    )
  }

  // render() {
  //   const { isLoading } = this.state;
  //   return (
  //     <div>
  //       <div>{isLoading ? "Loading..." : this.state.movies.map()}</div>
  //     </div>
  //   )
  // }

}

export default App;
