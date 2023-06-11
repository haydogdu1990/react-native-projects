import { createSlice } from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const authLoading = createSlice({
  name: "isAuthLoading",
  initialState: {
    value: true,
  },
  reducers: {
    setAuthLoading: (state, action) => {
      state.value = action.payload;
    },
    //  decrement: (state) => {
    //     state.value -= 1;
    //   },
    //   incrementByAmount: (state, action) => {
    //     state.value += Number(action.payload);
    //   },
    //  decrementByAmount: (state, action) => {
    //     state.value -= Number(action.payload);
    //   },
  },
});

export const { setAuthLoading } = authLoading.actions;
export default authLoading.reducer;
