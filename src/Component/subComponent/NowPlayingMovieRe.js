import React, { useEffect } from "react";
import MovieList from "../../ReUsableComponent/MovieList";
import { useSelector } from "react-redux";

export default function NowPlayingMovieRe() {
  const nowPlaingMovies = useSelector((store) => store.movie.nowPlaingMovie);

  useEffect(() => {
    if (!nowPlaingMovies) {
      console.log("movieDetail is not yet available or empty:");
    }
  }, [nowPlaingMovies]);

  if (!nowPlaingMovies) return;

  return (
    <div>
      (
      <MovieList
        name="Now Playing Movies from NowPlayingMoviesRe.js"
        movieList={nowPlaingMovies}
      />
      )
    </div>
  );
}
