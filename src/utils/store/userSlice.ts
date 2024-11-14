import { createSlice } from "@reduxjs/toolkit";
import { UserSliceInterface } from "../interfaces/authInterfaces";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: null,
      email: null,
    },
  } as UserSliceInterface,
  reducers: {
    loginUser: (state, action) => {
      state.user.email = action.payload.email;
      state.user.id = action.payload.id;
    },
    logoutUser: (state) => {
      state.user.email = null;
      state.user.id = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
