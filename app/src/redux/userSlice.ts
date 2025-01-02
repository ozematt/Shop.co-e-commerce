import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderData } from "../components/Checkout";

type UserState = {
  username: null | string;
  orders: OrderData[];
};

//added cart to local storage
const saveOrderToLocalStorage = (userState: UserState) => {
  localStorage.setItem("order", JSON.stringify(userState));
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
    addOrder: (state, action: PayloadAction<OrderData[]>) => {
      state.orders = [...state.orders, ...action.payload];
    },
  },
});
export const { logUser, logOutUser, addOrder } = userSlice.actions;

export default userSlice.reducer;
