import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import authLoading from "./auth/authLoading";

export const store = configureStore({
  reducer: {
    user: authReducer,
    isAuthLoading: authLoading,
  },
});
