import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieList from "../../ReUsableComponent/MovieList";

export default function TopRatedMovieRe() {
  const topRatedMovie = useSelector((store) => store.movie.topRatedMovie);

  useEffect(() => {
    if (!topRatedMovie) {
      console.log("movieDetail is not yet available or empty:");
    }
  }, [topRatedMovie]);

  if (!topRatedMovie) return;

  return (
    <div>
      <MovieList
        name="Top Rated Movies from TopRatedMovieRe.js"
        movieList={topRatedMovie}
      />
    </div>
  );
}
