import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userState",
  initialState: {
    id: "",
    userName: "",
    email: "",
    imageUrl: "",
    jobTitle: "",
    skills: "",
  },
  reducers: {
    addUserData(state, action) {
      state.userName = action.payload.username;
      if (!state.userName) {
        state.userName = action.payload.name;
      }
      state.email = action.payload.email;
      state.imageUrl = action.payload.imageUrl;
      state.jobTitle = action.payload.jobTitle;
      state.skills=action.payload.skills;
      state.id = action.payload._id;
    },

    removeUserData(state, action) {
      state.userName = null;
      if (!state.userName) {
        state.userName = null;
      }
      state.email = null;
      state.imageUrl = null;
      state.jobTitle = null;
      state.id = null;
    },
  },
});

export default userSlice.reducer;
export const { addUserData, removeUserData } = userSlice.actions;
