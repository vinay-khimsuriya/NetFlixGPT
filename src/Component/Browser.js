import { useSelector } from "react-redux";
import BrowserHeader from "./BrowserHeader";
import { useNowPlaingMovie } from "../CustomHooks/useNowPlayingMovie";
import VideoPlay from "./subComponent/VideoPlay";
import VideoContainer from "./subComponent/VideoContainer";
import { useFetchVideo } from "../CustomHooks/useFetchVideo";

export default function Browser() {
  const movies = useSelector((store) => store.movie);

  // console.log(movieDetail);

  useNowPlaingMovie();
  useFetchVideo();
  // console.log(fetchdata);
  // useEffect(() => {
  // console.log(movies);
  // });
  // {
  //   movies.length > 0 ? console.log(movies[0]) : console.log("no data found");
  // }

  // const dispetch = useDispatch();
  // console.log(user);
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWFiYjFjMGE4OGEzY2E2ZWZkYjA1ZDc5MDc2MjNjZiIsIm5iZiI6MTcyMzUzNzk2Ni41NzYwNTksInN1YiI6IjY2YmFmZTY0NTJhMTg3OTBkNTFhZjYxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WCuLE4GPYuEpftFnY1AeWskMTj_Hu8YGTl7yKlAbY8E",
  //   },
  // };

  // useEffect(() => {
  //   fetchVideo();

  //   fetch(
  //     "https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       dispetch(addNowPlaingMovie(response.results));
  //     })
  //     .catch((err) => console.error(err));
  // });

  // console.log(movies);

  // useEffect(() => {
  //   fetchVideo();
  // }, []);

  // const fetchVideo = async () => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/movie/533535/videos?language=en-US",
  //     options
  //   );
  //   const jsonData = await data.json();
  //   console.log(jsonData);
  //   const filteredData = jsonData.results.filter(
  //     (object) => object.type === "Trailer" && object.name === "Final Trailer"
  //   );
  //   console.log(filteredData, "filtered data");
  // };

  return (
    <div className="w-full h-screen relative">
      <BrowserHeader />
      <div className="w-full relative h-screen">
        <VideoContainer />
        <VideoPlay />
      </div>
    </div>
  );
}
