import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movieObject }) {
  // console.log(movieObject.backdrop_path);

  const navigate = useNavigate();
  const handelViewMoreClick = () => {
    navigate(`/viewMovieDetailPage/${movieObject.id}`);
  };
  const handleVideoPlayer = () => {
    navigate(`/videoPlayer/${movieObject.id}`);
  };
  return (
    <div className="w-64 relative">
      <div className="mx-1 border rounded-md bg-slate-300">
        <div className="rounded-md ">
          <img
            className="w-full block rounded-t-md"
            src={`https://image.tmdb.org/t/p/w500${movieObject.backdrop_path}`}
          ></img>
        </div>
        <div className="p-1">
          <h1 className="text-start text-xl font-bold truncate">
            {movieObject.title}
          </h1>
          <div className="mt-1 relative">
            <h3 className="text-start">
              <span className="font-semibold">Vote Average:</span>{" "}
              {movieObject.vote_average}
            </h3>
            <p className="text-right">
              <span className="font-semibold">language:</span>{" "}
              {movieObject.original_language}
            </p>
            <p
              className="text-center pr-3 text-blue-900 font-mono hover:cursor-pointer"
              onClick={handelViewMoreClick}
            >
              View More...
            </p>
            {/* <p className="text-white top-full absolute z-30">
              {movieObject.overview}
            </p> */}
          </div>
        </div>
      </div>
      <div
        className="p-2 text-xl bg-slate-500 rounded-full bg-opacity-75 translate-x-1/2 translate-y-1/2 transform absolute top-[20%] left-[33%] hover:cursor-pointer"
        onClick={handleVideoPlayer}
      >
        ⏯️
      </div>
    </div>
  );
}
