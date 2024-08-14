import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUSer: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUSer } = userInfo.actions;
export default userInfo.reducer;
