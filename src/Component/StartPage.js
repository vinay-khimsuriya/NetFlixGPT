import axios from "axios";
import React, { useEffect, useReducer, useRef, useState } from "react";
import background from "../Images/loginbackground.jpg";
import LoginHeader from "./LoginHeader";
import SignUp from "./SignUp";

function StartPage() {
  return (
    <div className="w-full bg-gray-700">
      <section className="w-full h-full relative">
        <div
          className="w-full h-screen"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),url( ${background} )`,
            backgroundSize: "cover",
            backgroundPosition: "cover",
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <LoginHeader />
          <SignUp />
        </div>
      </section>
      <section className="w-full bg-black mt-2 text-white">
        <div className="md:flex items-center justify-center">
          <div className="mx-4 md:w-2/4 pt-12 md:pt-0">
            <h1 className="text-3xl md:text-4xl">Enjoy on your TV</h1>
            <p className="text-xl md:text-2xl my-2">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="relative z-10">
            <img
              className="overflow-clip w-full "
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            />
            <div className="absolute w-full h-full flex top-0 z-[-1] bg-white ">
              <video
                className=" ms-20 mb-4 w-3/4"
                autoPlay
                playsInline
                muted
                loop
              >
                <source
                  className=""
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                  type="video/mp4"
                ></source>
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-black mt-2 text-white py-12">
        <div className="md:flex items-center justify-center">
          <div className="relative">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
            <div className=" w-full absolute bottom-10 md:bottom-2 lg:bottom-10 flex pe-0 sm:pe-24 md:pe-0 justify-center items-center bg-black">
              <div className="w-96 border border-gray-500 h-2/4 rounded-lg flex justify-evenly items-center">
                <div className="">
                  <img
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                    className="h-24 sm:h-28 md:h-32 lg:h-36 rounded-md"
                  />
                </div>
                <div className="ms-2">
                  <div className="my-2">Stranger Things</div>
                  <div className="my-2 text-blue-600">Downloading...</div>
                </div>
                <div className="default-ltr-cache-1q4up1i e15c37ii5"></div>
              </div>
            </div>
          </div>
          <div className="mx-4 flex justify-center md:w-2/4">
            <div className="w-full md:w-3/4 my-28 md:my-0 pe-0 sm:pe-0">
              <h1 className="text-3xl md:text-4xl">
                Download your shows to watch offline
              </h1>
              <p className="text-xl md:text-2xl">
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StartPage;
