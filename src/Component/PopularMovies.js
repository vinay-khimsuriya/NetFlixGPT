import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../ReUsableComponent/MovieCard";

export default function PopularMovies() {
  const popularMovies = useSelector((store) => store.movie.popularMovie);
  const scrollContainerRef = useRef();

  const handleLeftClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -256, behavior: "smooth" });
    }
  };
  const handleRightClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 256, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!popularMovies) {
    } else {
      console.log("popular movies is not yet available or empty:");
    }
  }, [popularMovies]);

  if (!popularMovies) return <div>Nothing is their</div>;

  return (
    <div className="my-1 border border-red-400 rounded-lg relative">
      <div className=" text-white bg-black text-left px-2">
        <h4>Popular Movies</h4>
      </div>
      <div
        className="absolute top-[50%] translate-y-[-50%] rounded-lg left-5 z-20 text-2xl p-2 bg-slate-400 bg-opacity-60 hover:cursor-pointer hover:bg-blue-700"
        onClick={handleLeftClick}
      >
        ⬅️
      </div>
      <div
        className="flex overflow-hidden no-scrollbar bg-slate-950 px-2"
        ref={scrollContainerRef}
      >
        <div className="flex items-center bg-black my-2 py-1">
          {popularMovies.map((popularMovies, index) => (
            <MovieCard key={index} movieObject={popularMovies} />
          ))}
        </div>
      </div>
      <div
        className="absolute top-[50%] translate-y-[-50%] rounded-lg right-5 z-20 text-2xl p-2 bg-slate-400 bg-opacity-60 hover:cursor-pointer hover:bg-blue-700"
        onClick={handleRightClick}
      >
        ➡️
      </div>
    </div>
  );
}
