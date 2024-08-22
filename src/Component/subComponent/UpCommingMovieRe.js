import React, { useEffect } from "react";
import MovieList from "../../ReUsableComponent/MovieList";
import { useSelector } from "react-redux";

export default function UpCommingMovieRe() {
  const upComingMovies = useSelector((store) => store.movie.upComingMoive);
  useEffect(() => {
    if (upComingMovies) {
    } else {
      console.log("movieDetail is not yet available or empty:");
    }
  }, [upComingMovies]);

  if (!upComingMovies) return;

  return (
    <div>
      <MovieList
        name="Up Comming Movies from UpCommingMovie.js"
        movieList={upComingMovies}
      />
    </div>
  );
}
