import React from "react";
import MovieCard from "../ReUsableComponent/MovieCard";

export default function MovieList({ name, movieList }) {
  console.log(name);
  return (
    <div className="my-1 border border-white">
      <div className="text-white bg-black text-left px-2">
        <h4>{name}</h4>
      </div>
      <div className="flex overflow-auto no-scrollbar bg-slate-950 px-2">
        <div className="flex items-center my-2 py-1">
          {movieList.map((movie, index) => (
            <MovieCard key={index} movieObject={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
