import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  username: null | string;
  orders: string[];
};

const initialState: UserState = { username: null, orders: [] };

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
    addOrder: (state, action: PayloadAction<string[]>) => {
      state.orders = [...state.orders, ...action.payload];
    },
  },
});
export const { logUser, logOutUser, addOrder } = userSlice.actions;

export default userSlice.reducer;
