import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browser from "./Browser";
import StartPage from "./StartPage";
import Login from "./Login";
import { useDispatch } from "react-redux";
import ViewMovieDetail from "../ReUsableComponent/ViewMovieDetail";
import VideoPlayer from "./subComponent/VideoPlayer";

export default function Home() {
  const dispetch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <StartPage />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/viewMovieDetailPage/:movieId",
      element: <ViewMovieDetail />,
    },
    {
      path: "/videoPlayer/:movieId",
      element: <VideoPlayer />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
