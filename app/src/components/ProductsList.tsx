import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/queries";
import { Product } from ".";
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../redux/store";
import { ProductsFetchedData } from "../api/queries/products";
import { useLocation, matchPath } from "react-router-dom";
import { useEffect, useState } from "react";
import { addCategorizedProducts, addProducts } from "../redux/productsSlice";
import usePagedItems from "../lib/hooks/usePagedItems";

const ProductsList = () => {
  //
  ////DATA
  const { pathname } = useLocation();
  const dispatch: AppDispatch = useAppDispatch();
  const { firstIndex, secondIndex } = usePagedItems();

  //global state
  const { filteredProductsByCategory, fetchedProducts, sortOptions } =
    useSelector((state: RootState) => state.products);

  //check if category is selected, if not display all products form state
  const [productsData, setProductsData] = useState(
    filteredProductsByCategory || fetchedProducts,
  );
  //fetch date if needed - seconde time
  const { data: products } = useQuery<ProductsFetchedData>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    if (fetchedProducts.products.length <= 1 && products) {
      dispatch(addProducts(products));
    }
  }, [dispatch, fetchedProducts, products]);

  ////LOGIC
  //if location change, assign different products to the state
  useEffect(() => {
    if (pathname === "/shop") {
      setProductsData(fetchedProducts);
      dispatch(addCategorizedProducts(null));
    } else if (
      filteredProductsByCategory &&
      matchPath("/shop/:category", pathname)
    ) {
      setProductsData(filteredProductsByCategory);
    }
  }, [pathname, filteredProductsByCategory]);

  //set data after render
  useEffect(() => {
    if (filteredProductsByCategory) {
      setProductsData(filteredProductsByCategory);
    } else if (fetchedProducts) {
      setProductsData(fetchedProducts);
    }
  }, [filteredProductsByCategory, fetchedProducts]);

  //sorting products based on sortOption from global state
  const sortedProducts = () => {
    if (sortOptions.field === "title") {
      const sortedProducts = [...productsData.products].sort((a, b) =>
        a.title.localeCompare(b.title),
      );
      return sortedProducts;
    }
    if (sortOptions.field === "price") {
      const sortedByPrice =
        sortOptions.direction === "asc"
          ? [...productsData.products].sort((a, b) => a.price - b.price)
          : [...productsData.products].sort((a, b) => b.price - a.price);
      return sortedByPrice;
    }
    if (sortOptions.field === "rating") {
      const sortedByRating =
        sortOptions.direction === "asc"
          ? [...productsData.products].sort((a, b) => a.rating - b.rating)
          : [...productsData.products].sort((a, b) => b.rating - a.rating);
      return sortedByRating;
    }
  };

  return sortedProducts()
    ?.slice(firstIndex, secondIndex)
    .map((product) => (
      <div
        key={product.id}
        className="m-0 scale-100 max-lg:m-[-20px] max-lg:scale-90 max-md:m-[-50px] max-md:scale-[0.7]"
      >
        <Product {...product} />
      </div>
    ));
};

export default ProductsList;
