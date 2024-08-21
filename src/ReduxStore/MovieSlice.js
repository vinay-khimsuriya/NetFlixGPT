import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaingMovie: null,
    popularMovie: null,
    topRatedMovie: null,
    upComingMoive: null,
  },
  reducers: {
    addNowPlaingMovie: (state, action) => {
      state.nowPlaingMovie = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    addUpComingMovie: (state, action) => {
      state.upComingMoive = action.payload;
    },
  },
});

export const {
  addNowPlaingMovie,
  addPopularMovie,
  addTopRatedMovie,
  addUpComingMovie,
} = MovieSlice.actions;

export default MovieSlice.reducer;
