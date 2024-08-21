import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../ReUsableComponent/MovieCard";

export default function PopularMovies() {
  const popularMovies = useSelector((store) => store.movie.popularMovie);

  console.log(popularMovies);

  useEffect(() => {
    if (popularMovies) {
      //   console.log(popularMovies);
    } else {
      console.log("popular movies is not yet available or empty:");
    }
  }, [popularMovies]);

  if (!popularMovies) return <div>Nothing is their</div>;

  return (
    <div className="my-1 border border-red-400 rounded-lg ">
      <div className=" text-white bg-black text-left px-2">
        <h4>Popular Movies</h4>
      </div>
      <div className="flex overflow-auto no-scrollbar bg-slate-950 px-2">
        <div className="flex items-center bg-black my-2 py-1">
          {popularMovies.map((popularMovies, index) => (
            <MovieCard key={index} movieObject={popularMovies} />
          ))}
        </div>
      </div>
    </div>
  );
}
