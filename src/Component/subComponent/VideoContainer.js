import React from "react";
import { useSelector } from "react-redux";

export default function VideoContainer() {
  const movieDetail = useSelector((store) => store.movieDetail);

  console.log(movieDetail);

  return (
    <div className="w-full h-screen flex items-center justify-start absolute top-0 z-10 text-slate-200 text-start text-white">
      <div className="ps-8 w-5/6 md:w-4/6 lg:w-3/6">
        <h1 className="text-balance my-2 text-5xl font-mono font-semibold">
          {movieDetail.moviedetail.title}
        </h1>
        <p className="text-balance my-2 text-base font-serif text-start">
          {movieDetail.moviedetail.overview}
        </p>
        <p
          className="text-pretty text-lg my-2 font-bold"
          style={{ color: movieDetail.moviedetail.adult ? "red" : "" }}
        >
          adult: {movieDetail.moviedetail.adult ? "true" : "false"}
        </p>
        <p className="text-pretty">
          Popularity: {movieDetail.moviedetail.popularity}
        </p>
      </div>
    </div>
  );
}
