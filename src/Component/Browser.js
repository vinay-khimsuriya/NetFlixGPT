import { useSelector } from "react-redux";
import BrowserHeader from "./BrowserHeader";
import { useNowPlaingMovie } from "../CustomHooks/useNowPlayingMovie";
import VideoPlay from "./subComponent/VideoPlay";
import VideoContainer from "./subComponent/VideoContainer";
import { useFetchVideo } from "../CustomHooks/useFetchVideo";
import { useState } from "react";
import NowPlaingMovies from "./NowPlaingMovies";
import { useUpComingMovie } from "../CustomHooks/useUpcomingMovies";
import { usePopularMovies } from "../CustomHooks/usePopularMovies";
import { useTopRatedMovies } from "../CustomHooks/useTopRatedMovies";
import MoviesListParentContainer from "./MoviesListParentContainer";
import MovieList from "../ReUsableComponent/MovieList";
import NowPlayingMovieRe from "./subComponent/NowPlayingMovieRe";
import UpCommingMovieRe from "./subComponent/UpCommingMovieRe";
import TopRatedMovieRe from "./subComponent/TopRatedMovieRe";

export default function Browser() {
  const movies = useSelector((store) => store.movie);
  const [AutoPlayStatus, setAutoPlayStatus] = useState();

  const updateAutoPlayStatus = (status) => {
    setAutoPlayStatus(status);
    return status;
  };

  useNowPlaingMovie();
  useUpComingMovie();
  usePopularMovies();
  useTopRatedMovies();
  useFetchVideo();

  return (
    <div className="w-full h-screen relative">
      <BrowserHeader />
      <div className="w-full relative h-screen">
        <VideoContainer updateAutoPlayStatus={updateAutoPlayStatus} />
        <VideoPlay AutoPlayStatus={AutoPlayStatus} />
      </div>
      <div className="bg-black">
        <MoviesListParentContainer />
      </div>
    </div>
  );
}
