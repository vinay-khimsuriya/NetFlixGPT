import React, { useEffect } from "react";
import MovieCard from "../ReUsableComponent/MovieCard";
import { useSelector } from "react-redux";

export default function NowPlaingMovies() {
  const nowPlaingMovies = useSelector((store) => store.movie.nowPlaingMovie);

  useEffect(() => {
    if (nowPlaingMovies) {
    } else {
      console.log("movieDetail is not yet available or empty:");
    }
  }, [nowPlaingMovies]);

  if (!nowPlaingMovies) return <div>Nothing is their</div>;

  return (
    <div className="my-1">
      <div className="text-white bg-black text-left px-2">
        <h4>Now Plaing Movies</h4>
      </div>
      <div className="flex overflow-auto no-scrollbar bg-slate-950 px-2">
        <div className="flex items-center my-2 py-1">
          {nowPlaingMovies.map((nowPlaingMovie, index) => (
            <MovieCard key={index} movieObject={nowPlaingMovie} />
          ))}
        </div>
      </div>
    </div>
  );
}
