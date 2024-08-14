import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./userInfo";
import movieReducer from "./MovieSlice";
import movieDetailReducer from "./MovieDetailSlice";
import videoDetailReducer from "./videoDetailSlice";

const appStore = configureStore({
  reducer: {
    user: userInfo,
    movie: movieReducer,
    movieDetail: movieDetailReducer,
    videoDetail: videoDetailReducer,
  },
});

export default appStore;
