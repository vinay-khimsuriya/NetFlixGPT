import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaingMovie: null,
  },
  reducers: {
    addNowPlaingMovie: (state, action) => {
      state.nowPlaingMovie = action.payload;
    },
  },
});

export const { addNowPlaingMovie } = MovieSlice.actions;

export default MovieSlice.reducer;
