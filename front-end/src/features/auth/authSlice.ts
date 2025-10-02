import { createSlice } from "@reduxjs/toolkit";
import type{ PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/data/types";

type AuthState = {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
};

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state, action: PayloadAction<{ email: string }>) {
      state.loading = true;
      console.log('action:',action)
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
    },
    loginFailure(state) {
      state.loading = false;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
