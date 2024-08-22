import { useEffect, useState } from "react";
import { options } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addVideoDetail } from "../ReduxStore/videoDetailSlice";

export const useFetchVideo = () => {
  const dispetch = useDispatch();
  const movieDetail = useSelector((store) => store.movieDetail);
  const [movieId, setMovieoId] = useState("");

  useEffect(() => {
    if (
      movieDetail &&
      movieDetail.moviedetail &&
      Object.keys(movieDetail.moviedetail).length > 0
    ) {
      setMovieoId(movieDetail.moviedetail.id);

      fetchVideo(movieDetail.moviedetail.id);
    } else {
      console.log("faild");
    }
  }, [movieDetail]);

  const fetchVideo = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    const jsonData = await data.json();
    const filteredData = jsonData.results.filter(
      (object) => object.type === "Trailer" && object.name === "Final Trailer"
    );
    dispetch(addVideoDetail(filteredData));
  };
};
