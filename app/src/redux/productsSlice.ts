import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsFetchedData } from "../api/queries/products";

type InitialState = {
  sortBy: string;
  filteredProductsByCategory: null;
  fetchedProducts: ProductsFetchedData;
};

const initialState: InitialState = {
  sortBy: "Alphabetical",
  filteredProductsByCategory: null,
  fetchedProducts: {
    products: [
      {
        id: 0,
        title: "",
        price: 0,
        images: [],
        rating: 0,
        thumbnail: "",
        discountPercentage: 0,
      },
    ],
    total: 0,
    skip: 0,
    limit: 0,
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<ProductsFetchedData>) => {
      state.fetchedProducts = action.payload;
    },
    addSortMethod: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { addProducts, addSortMethod } = productsSlice.actions;

export default productsSlice.reducer;
