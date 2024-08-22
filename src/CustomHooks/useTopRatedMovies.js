import axios from "axios";
import { useEffect } from "react";
import { options } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../ReduxStore/MovieSlice";

export const useTopRatedMovies = () => {
  const dispetch = useDispatch();
  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  const fetchTopRatedMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      if (response && response?.data) {
        dispetch(addTopRatedMovie(response.data.results));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
