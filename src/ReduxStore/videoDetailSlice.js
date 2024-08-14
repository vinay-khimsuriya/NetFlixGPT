import { createSlice } from "@reduxjs/toolkit";
import { ActionCodeOperation } from "firebase/auth";

const videoDetailSlice = createSlice({
  name: "videoDetail",
  initialState: {
    videoDetail: null,
  },
  reducers: {
    addVideoDetail: (state, action) => {
      state.videoDetail = action.payload;
    },
  },
});

export const { addVideoDetail } = videoDetailSlice.actions;

export default videoDetailSlice.reducer;
