import React from "react";
import NowPlaingMovies from "./NowPlaingMovies";
import TopRatedMovie from "./TopRatedMovie";
import UpacomingMoviess from "./UpacomingMoviess";
import PopularMovies from "./PopularMovies";

export default function MoviesListParentContainer() {
  return (
    <div className="bg-white">
      <NowPlaingMovies />
      <TopRatedMovie />
      <UpacomingMoviess />
      <PopularMovies />
    </div>
  );
}
