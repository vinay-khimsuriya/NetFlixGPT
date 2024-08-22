import React, { useEffect } from "react";
import MovieList from "../../ReUsableComponent/MovieList";
import { useSelector } from "react-redux";

export default function MovieListsContainer() {
  const nowPlaingMovies = useSelector((store) => store.movie.nowPlaingMovie);
  const popularMovie = useSelector((store) => store.movie.popularMovie);
  const topRatedMovie = useSelector((store) => store.movie.topRatedMovie);
  const upComingMoive = useSelector((store) => store.movie.upComingMoive);

  useEffect(() => {}, [
    nowPlaingMovies,
    upComingMoive,
    popularMovie,
    topRatedMovie,
  ]);

  return (
    <div>
      {nowPlaingMovies && (
        <MovieList
          name="Now Playing Movies from MovieListsContainer.js"
          movieList={nowPlaingMovies}
        />
      )}
      {popularMovie && (
        <MovieList
          name="Popular Movies from MovieListsContainer.js"
          movieList={popularMovie}
        />
      )}
      {topRatedMovie && (
        <MovieList
          name="Top Rated Movies from MovieListsContainer.js"
          movieList={topRatedMovie}
        />
      )}
      {upComingMoive && (
        <MovieList
          name="Up Comming Movies from MovieListsContainer.js"
          movieList={upComingMoive}
        />
      )}
    </div>
  );
}
