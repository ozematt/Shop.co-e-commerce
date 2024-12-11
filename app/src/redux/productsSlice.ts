import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsFetchedData } from "../api/queries/products";

export type SortMethod =
  | "Alphabetical"
  | "Hightest Price"
  | "Lowest Price"
  | "Top Rated"
  | "Least Rated";

const sortOptionsMap = {
  Alphabetical: { field: "title" },
  "Hightest Price": { field: "price", direction: "desc" },
  "Lowest Price": { field: "price", direction: "asc" },
  "Top Rated": { field: "rating", direction: "desc" },
  "Least Rated": { field: "rating", direction: "asc" },
} as const;

type SortingOptions = {
  field: string;
  direction?: string;
};

type InitialState = {
  sortOptions: SortingOptions;
  categoryName: string;
  filteredProductsByCategory: null | ProductsFetchedData;
  fetchedProducts: ProductsFetchedData;
};

const initialState: InitialState = {
  sortOptions: {
    field: "title",
    direction: "asc",
  },
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
      const category = action.payload;
      const categoryUpperCase =
        category.charAt(0).toUpperCase() + category.slice(1);
      state.categoryName = categoryUpperCase;
    },
    addSortMethod: (state, action: PayloadAction<SortMethod>) => {
      const selectedOption = sortOptionsMap[action.payload];
      if (selectedOption) {
        state.sortOptions = { ...selectedOption };
      }
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
