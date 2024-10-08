import { useDispatch } from "react-redux";
import { options } from "../Utils/Constant";
import { addNowPlaingMovie } from "../ReduxStore/MovieSlice";
import { useEffect } from "react";
import { addMovieDetail } from "../ReduxStore/MovieDetailSlice";

export const useNowPlaingMovie = () => {
  const dispetch = useDispatch();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        dispetch(addMovieDetail(response.results[0]));
        dispetch(addNowPlaingMovie(response.results));
      })
      .catch((err) => console.log(err));
  }, []);
};
