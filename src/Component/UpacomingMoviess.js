import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../ReUsableComponent/MovieCard";

export default function UpacomingMoviess() {
  const upComingMovies = useSelector((store) => store.movie.upComingMoive);
  useEffect(() => {
    if (upComingMovies) {
      // console.log(nowPlaingMovies);
    } else {
      console.log("movieDetail is not yet available or empty:");
    }
  }, [upComingMovies]);

  if (!upComingMovies) return <div>Nothing is their</div>;

  return (
    <div className="my-1">
      <div className="text-white bg-black text-left px-2">
        <h4>Up Comeing Movies</h4>
      </div>
      <div className="flex overflow-auto no-scrollbar bg-slate-950 px-2">
        <div className="flex items-center bg-black my-2 py-1">
          {upComingMovies.map((upComingMovies, index) => (
            <MovieCard key={index} movieObject={upComingMovies} />
          ))}
        </div>
      </div>
    </div>
  );
}
