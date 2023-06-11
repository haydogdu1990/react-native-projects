import { createSlice } from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const authSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;

      const storeData = async () => {
        try {
          const jsonData = JSON.stringify(state.value);
          await AsyncStorage.setItem("@user", jsonData);
        } catch (e) {
          // saving error
        }
      };
      storeData();
    },
    reomveUser: (state) => {
      state.value = null;
      AsyncStorage.removeItem("@user");
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

export const { setUser, reomveUser } = authSlice.actions;
export default authSlice.reducer;
