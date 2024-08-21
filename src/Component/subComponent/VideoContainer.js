import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function VideoContainer({ updateAutoPlayStatus }) {
  const movieDetail = useSelector((store) => store.movieDetail);
  const [autoPlayStatus, setAutoPlayStatus] = useState(1);
  const [isData, setIsData] = useState(0);

  updateAutoPlayStatus(autoPlayStatus);

  const status = updateAutoPlayStatus(autoPlayStatus);
  // console.log(status);

  const handleAutoPlayStatus = () => {
    if (autoPlayStatus === 1) {
      setAutoPlayStatus(0);
    } else {
      setAutoPlayStatus(1);
    }
  };

  useEffect(() => {
    if (
      movieDetail &&
      movieDetail.moviedetail &&
      Object.keys(movieDetail.moviedetail).length > 0
    ) {
      setIsData(1);
    }
  }, [movieDetail]);

  if (isData === 0) {
    return (
      <div>
        <p>Loding .....</p>
      </div>
    );
  }

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
        <div className="flex">
          <button
            className="bg-white text-black rounded-sm py-2 px-5"
            onClick={handleAutoPlayStatus}
          >
            ⏯️ Play
          </button>
          <button className="bg-slate-600 bg-opacity-80 ms-2 py-2 rounded-sm px-5">
            View More
          </button>
        </div>
        {/* <p className="text-pretty">
          Popularity: {movieDetail.moviedetail.popularity}
        </p> */}
      </div>
    </div>
  );
}
