import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  username: null | string;
};

const initialState: UserState = { username: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logUser: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    logOutUser: (state) => {
      state.username = null;
      //   state.orders = [];
    },
    // addOrder: (state, action: PayloadAction<Orders[]>) => {
    //   state.orders = [...state.orders, ...action.payload];
    // },
  },
});
export const { logUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
