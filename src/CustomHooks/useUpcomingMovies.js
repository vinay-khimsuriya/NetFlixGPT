import { useEffect } from "react";
import { options } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addUpComingMovie } from "../ReduxStore/MovieSlice";

export const useUpComingMovie = () => {
  const dispetch = useDispatch();
  useEffect(() => {
    fethUpcomingMovie();
  }, []);

  const fethUpcomingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );

    const jsonData = await data.json();

    dispetch(addUpComingMovie(jsonData.results));
    // console.log(jsonData);
  };
};
