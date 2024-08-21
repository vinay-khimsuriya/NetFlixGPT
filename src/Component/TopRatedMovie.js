import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../ReUsableComponent/MovieCard";

export default function TopRatedMovie() {
  const topRatedMovie = useSelector((store) => store.movie.topRatedMovie);

  useEffect(() => {
    if (topRatedMovie) {
      // console.log(nowPlaingMovies);
    } else {
      console.log("movieDetail is not yet available or empty:");
    }
  }, [topRatedMovie]);

  if (!topRatedMovie) return <div>Nothing is their</div>;

  return (
    <div className="my-100">
      <div className="text-white bg-black text-left px-2">
        <h4>Top Rated Movies</h4>
      </div>
      <div className="flex overflow-auto no-scrollbar bg-slate-950 px-2">
        <div className="flex items-center bg-black my-2 py-1">
          {topRatedMovie.map((topRatedMovie, index) => (
            <MovieCard key={index} movieObject={topRatedMovie} />
          ))}
        </div>
      </div>
    </div>
  );
}
