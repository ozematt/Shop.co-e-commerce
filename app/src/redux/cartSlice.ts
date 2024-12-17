import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "./store";

// const initialState = {
//   products: [
//     {
//       id: "",
//       title: "",
//       image: "",
//       price: 0,
//       quantity: "",
//       shippingTime: "",
//     },
//   ],
//   total: 0,
// };

type CartProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  shippingTime: string;
};

const cartAdapter = createEntityAdapter({
  selectId: (product: CartProduct) => product.id, //
});

const cartSlice = createSlice({
  name: "cart",
  initialState: cartAdapter.getInitialState({
    total: 0,
  }),
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const item = action.payload;
      const existingItem = state.entities[item.id]; //assign if item already exist

      if (existingItem) {
        const updatedPieces = existingItem.quantity + item.quantity;
        state.total = Number((state.total + item.price).toFixed(2)); //update total price

        // if item exist update pieces
        cartAdapter.updateOne(state, {
          id: item.id,
          changes: { quantity: updatedPieces },
        });
      } else {
        cartAdapter.addOne(state, item); //add new item with modified data
        state.total = Number((state.total + item.price).toFixed(2)); //update total price
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

export const { selectAll: selectAllCart } = cartAdapter.getSelectors(
  (state: RootState) => state.cart,
);
