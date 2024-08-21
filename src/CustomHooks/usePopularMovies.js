import axios from "axios";
import { options } from "../Utils/Constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../ReduxStore/MovieSlice";

export const usePopularMovies = () => {
  const dispetch = useDispatch();
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );

    if (response ?? response?.data) {
      dispetch(addPopularMovie(response.data.results));
    }
  };
};
