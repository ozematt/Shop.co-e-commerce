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

export type CartProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  stock: number;
  shippingTime: string;
};

const cartAdapter = createEntityAdapter({
  selectId: (product: CartProduct) => product.id, //
});

const cartSlice = createSlice({
  name: "cart",
  initialState: cartAdapter.getInitialState({
    total: 0,
    itemsInCart: 0,
  }),
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const item = action.payload;
      const existingItem = state.entities[item.id]; //assign if item already exist

      if (existingItem) {
        const updatedPieces = existingItem.quantity + item.quantity;
        state.total = Number((state.total + item.price).toFixed(2)); //update total price
        state.itemsInCart += 1;
        // if item exist update pieces
        cartAdapter.updateOne(state, {
          id: item.id,
          changes: { quantity: updatedPieces },
        });
      } else {
        cartAdapter.addOne(state, item); //add new item with modified data
        state.total = Number((state.total + item.price).toFixed(2)); //update total price
        state.itemsInCart += 1;
      }
    },
    updateCart: (
      state,
      action: PayloadAction<{ id: number; changes: Partial<CartProduct> }>,
    ) => {
      const { id, changes } = action.payload;
      const existingItem = state.entities[id]; //check if item already exist

      if (existingItem) {
        //calculate the difference in quantity (in case the product quantity changes)
        const amountDifference = changes.quantity
          ? changes.quantity - existingItem.quantity
          : 0;
        state.total = Number(
          (state.total + existingItem.price * amountDifference).toFixed(2), //update total price
        );
        existingItem.quantity = changes.quantity ?? existingItem.quantity; //update product amount
        state.itemsInCart += amountDifference;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const itemToRemove = state.entities[itemId]; //check if item already exist

      if (itemToRemove) {
        state.total = Number(
          (state.total - itemToRemove.price * itemToRemove.quantity).toFixed(2), // update total price
        );
        state.itemsInCart -= itemToRemove.quantity; //update quantity
      }
      cartAdapter.removeOne(state, itemId);
    },
  },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

export const { selectAll: selectAllCart } = cartAdapter.getSelectors(
  (state: RootState) => state.cart,
);
