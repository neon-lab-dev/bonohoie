import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  redirectPath: "/", // Store redirect path (default to home)
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    logout: (state) => {
      state.user = null;
    },
    setRedirectPath: (state, action) => {
      state.redirectPath = action.payload; // Set the path user tried to visit
    },
    clearRedirectPath: (state) => {
      state.redirectPath = "/"; // Reset to default path after login
    },
  },
});

export const { setUser, logout, setRedirectPath, clearRedirectPath } = authSlice.actions;
export default authSlice.reducer;

// Selectors
export const useCurrentUser = (state) => state.auth.user;
export const useRedirectPath = (state) => state.auth.redirectPath;
