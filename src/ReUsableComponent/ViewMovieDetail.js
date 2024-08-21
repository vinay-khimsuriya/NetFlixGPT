import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { options } from "../Utils/Constant";
import VideoPlayer from "../Component/subComponent/VideoPlayer";

export default function ViewMovieDetail() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          options
        );
        setMovieDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center border">
      <img
        src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
      />
      {/* <VideoPlayer movieId={moviId} /> */}
      <div className="absolute bg-slate-900 bg-opacity-40 rounded-lg py-2 px-2 w-[60%]  top-[60%] text-sky-400">
        <h1 className="font-mono font-bold text-3xl mb-2 text-rose-600">
          {movieDetails.title}
        </h1>
        <p className="font-serif font-light text-center indent-10 text-xl">
          {movieDetails.overview}
        </p>
      </div>
      {/* Render other movie details */}
    </div>
  );
}
