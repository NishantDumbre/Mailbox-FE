import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    theme: "DARK",
    showNavbar: false,
  },
  reducers: {
    toggleNavbar: (state) => {
      state.showNavbar = !state.showNavbar;
    },
  },
});

export default configSlice.reducer;
export const { toggleNavbar } = configSlice.actions;
