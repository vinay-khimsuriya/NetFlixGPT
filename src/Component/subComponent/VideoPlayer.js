import React, { useEffect, useState } from "react";
import { options } from "../../Utils/Constant";
import { useParams } from "react-router-dom";

export default function VideoPlayer() {
  const [videoKey, setVideoKey] = useState(null);

  const { movieId } = useParams();
  //   console.log(movieId, "videoPlayer");

  useEffect(() => {
    const fetchVideoDetail = async () => {
      if (movieId) {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          options
        );
        // console.log(movieId, "videoPlayer");

        const jsonData = await data.json();
        // console.log(jsonData);
        const filteredData = jsonData.results.filter(
          (object) => object.type === "Trailer"
        );
        setVideoKey(filteredData[0].key);
      }
    };
    fetchVideoDetail();
  }, []);

  console.log(videoKey);

  if (!videoKey) return <div>No video Found</div>;

  return (
    <div className="w-full">
      <div className="w-full  h-screen">
        <iframe
          className="w-full h-screen"
          src={`https://www.youtube.com/embed/${videoKey}?&loop=1&controls=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
