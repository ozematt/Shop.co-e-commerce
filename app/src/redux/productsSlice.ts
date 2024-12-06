import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsFetchedData } from "../api/queries/products";

type InitialState = {
  sortBy: string;
  categoryName: string;
  filteredProductsByCategory: null | ProductsFetchedData;
  fetchedProducts: ProductsFetchedData;
};

const initialState: InitialState = {
  sortBy: "Alphabetical",
  categoryName: "",
  filteredProductsByCategory: null,
  fetchedProducts: {
    products: [
      {
        id: 0,
        title: "",
        price: 0,
        images: [],
        rating: 0,
        category: "",
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
    addCategorizedProducts: (
      state,
      action: PayloadAction<ProductsFetchedData>
    ) => {
      state.filteredProductsByCategory = action.payload;
    },
    addCategoryName: (state, action: PayloadAction<string>) => {
      state.categoryName = action.payload;
    },
    addSortMethod: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
  },
});

export const {
  addProducts,
  addCategorizedProducts,
  addSortMethod,
  addCategoryName,
} = productsSlice.actions;

export default productsSlice.reducer;
