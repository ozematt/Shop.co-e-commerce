import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import Breadcrumbs from "./Breadcrumbs";
import Filters from "./Filters";
import PaginationBar from "./PaginationBar";
import Product from "./Product";
import ShopInfoBar from "./ShopInfoBar";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../redux/store";
import { useQuery } from "@tanstack/react-query";
import fetchProducts, { ProductsFetchedData } from "../api/queries/products";
import { addProducts } from "../redux/productsSlice";

const Shop = () => {
  //
  ////DATA
  //fetch page number from url (uploaded from Pagination component)
  const [searchParams] = useSearchParams();
  const actualPage = Number(searchParams.get("page")) || 1; // when is NaN assigns 1 (NaN invalid string)

  const [page, setPage] = useState(Number(actualPage)); //selected page, local state

  const first = (page - 1) * 9;
  const second = first + 9;

  const dispatch: AppDispatch = useAppDispatch();

  const [sortOptions, setSortOptions] = useState({
    field: "title",
    direction: "asc",
  });
  console.log(sortOptions);

  //object from api, products, total, limit, skip
  const { filteredProductsByCategory, fetchedProducts } = useSelector(
    (state: RootState) => state.products
  );

  //check if category is selected, if not display
  const productsData = filteredProductsByCategory
    ? filteredProductsByCategory
    : fetchedProducts;

  const sortedProducts = () => {
    if (sortOptions.field === "title") {
      const sortedProducts = [...productsData.products].sort((a, b) =>
        a.title.localeCompare(b.title)
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
  console.log(sortedProducts());

  // fetched products
  const { data } = useQuery<ProductsFetchedData>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  //state of total items
  const total = useSelector(
    (state: RootState) => state.products.fetchedProducts.total
  );

  //add products data if data from api i ready i total = 0
  useEffect(() => {
    if (data && total === 0) {
      dispatch(addProducts(data));
    }
  }, [data, total]);

  //when url param change (updated in Pagination component), update local page state
  useEffect(() => {
    setPage(Number(actualPage));
  }, [actualPage]);

  const handleSelectedSortMethod = (sortMethod: string) => {
    if (sortMethod === "Alphabetical") {
      setSortOptions((prev) => ({ ...prev, field: "title" }));
    }
    if (sortMethod === "Hightest Price") {
      setSortOptions((prev) => ({
        ...prev,
        field: "price",
        direction: "desc",
      }));
    }
    if (sortMethod === "Lowest Price") {
      setSortOptions((prev) => ({ ...prev, field: "price", direction: "asc" }));
    }
    if (sortMethod === "Top Rated") {
      setSortOptions((prev) => ({
        ...prev,
        field: "rating",
        direction: "desc",
      }));
    }
    if (sortMethod === "Least Rated") {
      setSortOptions((prev) => ({
        ...prev,
        field: "rating",
        direction: "asc",
      }));
    }
  };

  ////UI
  return (
    <>
      <section className="px-4 sm:px-[100px] max-container">
        <div className="border-b-2" />
        <Breadcrumbs />
        <div className="flex mt-[20px]">
          <Filters />
          <div className=" ml-[20px] w-full">
            <ShopInfoBar
              total={total}
              first={first}
              second={second}
              onSelect={handleSelectedSortMethod}
            />
            <div className="mt-4 flex flex-wrap  gap-5 min-h-[1300px]">
              {sortedProducts()
                ?.slice(first, second)
                .map((product) => (
                  <Product key={product.id} {...product} />
                ))}
            </div>
            <div className="border-b-2 mt-[32px]" />

            <PaginationBar total={total} page={page} />
          </div>
        </div>
      </section>

      <div className="max-container">
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Shop;
