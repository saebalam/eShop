import { createSlice } from "@reduxjs/toolkit";

interface loginInterface {
  isLoggedIn: boolean;
}

const initialState: loginInterface = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;