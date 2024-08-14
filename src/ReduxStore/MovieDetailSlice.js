import { createSlice } from "@reduxjs/toolkit";

const movieDetailSlice = createSlice({
  name: "moviedetail",
  initialState: {
    moviedetail: null,
  },
  reducers: {
    addMovieDetail: (state, action) => {
      state.moviedetail = action.payload;
    },
  },
});

export const { addMovieDetail } = movieDetailSlice.actions;
export default movieDetailSlice.reducer;
