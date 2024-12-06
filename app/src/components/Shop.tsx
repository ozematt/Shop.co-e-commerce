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
import CircularProgress from "@mui/material/CircularProgress";

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

const Shop = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();

  //fetch page number from url (uploaded from Pagination component)
  const [searchParams] = useSearchParams();
  const actualPage = Number(searchParams.get("page")) || 1; // when is NaN assigns 1 (NaN invalid string)

  const [page, setPage] = useState(Number(actualPage)); //selected page, local state

  //sorting state
  const [sortOptions, setSortOptions] = useState({
    field: "title",
    direction: "asc",
  });

  //global state
  const { filteredProductsByCategory, fetchedProducts } = useSelector(
    (state: RootState) => state.products
  );

  //check if category is selected, if not display all products form state
  const productsData = filteredProductsByCategory
    ? filteredProductsByCategory
    : fetchedProducts;

  //state of total items
  const total = productsData.total;

  //products indexes for displayed items
  const firstIndex = (page - 1) * 9;
  const secondIndex = total < 9 ? total : firstIndex + 9;

  //sorting actual products
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

  // fetched products
  const { data, isPending } = useQuery<ProductsFetchedData>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  //add products data if data from api is ready and total = 0
  useEffect(() => {
    if (data?.products.length) {
      dispatch(addProducts(data));
    } else if (!data) {
      console.error("No data fetched from API");
    }
  }, [data, dispatch]);

  //when url param change (updated in Pagination component), update local page state
  useEffect(() => {
    setPage(Number(actualPage));
  }, [actualPage]);

  //when sorting method is selected (in ShopInfoBar component) add specify state
  const handleSelectedSortMethod = (sortMethod: SortMethod) => {
    //assign act
    const selectedOption = sortOptionsMap[sortMethod];
    if (selectedOption) {
      setSortOptions((prev) => ({ ...prev, ...selectedOption }));
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
              first={firstIndex}
              second={secondIndex}
              onSelect={handleSelectedSortMethod}
            />
            <div className="mt-4 flex flex-wrap  gap-5 min-h-[1300px]">
              {isPending ? (
                <CircularProgress color="inherit" className="m-auto" />
              ) : (
                sortedProducts()
                  ?.slice(firstIndex, secondIndex)
                  .map((product) => <Product key={product.id} {...product} />)
              )}
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
