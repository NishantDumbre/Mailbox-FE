import { createSlice } from "@reduxjs/toolkit";
import { UserSliceInterface } from "../interfaces/authInterfaces";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    token: localStorage.getItem("token"),
  } as UserSliceInterface,
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logoutUser: (state) => {
      state.token = null;
      state.email = "";
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
