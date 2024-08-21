import React from "react";
import MovieCard from "../ReUsableComponent/MovieCard";

export default function NowPlaingMovies() {
  return (
    <div>
      <div className="flex overflow-x-auto scroll">
        <div className="flex h-36">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
