import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function VideoPlay({ AutoPlayStatus }) {
  const videoDetail = useSelector((store) => store.videoDetail);
  const [videoId, setVideoId] = useState("");

  // console.log(AutoPlayStatus);

  useEffect(() => {
    if (
      videoDetail &&
      videoDetail.videoDetail &&
      videoDetail.videoDetail.length > 0
    ) {
      // console.log(videoDetail);
      setVideoId(videoDetail.videoDetail[0].key);
    } else {
      console.log("movieDetail is not yet available or empty:", videoDetail);
    }
  }, [videoDetail]);

  if (!videoId) {
    return (
      <div className="w-100 h-screen">
        <p>Loading.....</p>
      </div>
    );
  }

  return (
    <div className="w-100 h-screen">
      <iframe
        className="w-full h-screen"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${AutoPlayStatus}&loop=1&controls=0&playlist=${videoId}&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
