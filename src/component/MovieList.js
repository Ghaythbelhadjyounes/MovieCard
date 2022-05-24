import React, { useState } from "react";
import { MoviesData } from "../constants/Data";
import MovieCard from "./MovieCard";
import Add from "./Add";
function MovieList({ input }) {
  const [movie,setMovie] = useState(MoviesData);
  const addMovie=(newMovie)=>{
    setMovie([...movie,newMovie])
  }
  return (
    <div>
    <Add addMv={addMovie}/>
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {movie
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(input.toLowerCase()) ||
            movie.rate >= input
        )
        .map((el) => (
          <MovieCard key={el.id} films={el} />
        ))}
    </div>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    </div>
  );
}

export default MovieList;
