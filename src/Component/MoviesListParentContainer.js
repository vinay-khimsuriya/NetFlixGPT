import React from "react";
import NowPlaingMovies from "./NowPlaingMovies";
import TopRatedMovie from "./TopRatedMovie";
import PopularMovies from "./PopularMovies";
import NowPlayingMovieRe from "./subComponent/NowPlayingMovieRe";
import UpCommingMovieRe from "./subComponent/UpCommingMovieRe";
import MovieListsContainer from "./subComponent/MovieListsContainer";
import UpcomingMovies from "./UpcomingMovies";

export default function MoviesListParentContainer() {
  return (
    <div className="bg-white">
      <NowPlaingMovies />
      <TopRatedMovie />
      <UpcomingMovies />
      <PopularMovies />

      <NowPlayingMovieRe />
      <UpCommingMovieRe />
      <TopRatedMovie />

      <MovieListsContainer />
    </div>
  );
}
