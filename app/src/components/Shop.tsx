import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import Breadcrumbs from "./Breadcrumbs";
import Filters from "./Filters";
import PaginationBar from "./PaginationBar";
import Product from "./Product";
import ShopInfoBar from "./ShopInfoBar";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../redux/store";
import { useQuery } from "@tanstack/react-query";
import fetchProducts, { ProductsFetchedData } from "../api/queries/products";
import { addProducts } from "../redux/productsSlice";
import CircularProgress from "@mui/material/CircularProgress";

const Shop = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();
  const { pathname } = useLocation();

  //global state
  const { filteredProductsByCategory, fetchedProducts, sortOptions } =
    useSelector((state: RootState) => state.products);

  // fetched products
  const { data, isPending } = useQuery<ProductsFetchedData>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [searchParams] = useSearchParams();
  //fetch page number from url (uploaded from Pagination component)
  const actualPage = Number(searchParams.get("page")) || 1; // when is NaN assigns 1 (NaN invalid string)
  const [page, setPage] = useState(Number(actualPage)); //selected page, local state

  //check if category is selected, if not display all products form state
  const [productsData, setProductsData] = useState(
    filteredProductsByCategory || fetchedProducts
  );

  //state of total items
  const total = productsData.total;

  ////LOGIC
  //if location change, assign different products to the state
  useEffect(() => {
    if (pathname !== "/shop" && filteredProductsByCategory) {
      setProductsData(filteredProductsByCategory);
      return;
    }
    setProductsData(fetchedProducts);
  }, [pathname, filteredProductsByCategory]);

  //set data after render
  useEffect(() => {
    if (filteredProductsByCategory) {
      setProductsData(filteredProductsByCategory);
    } else if (fetchedProducts) {
      setProductsData(fetchedProducts);
    }
  }, [filteredProductsByCategory, fetchedProducts]);

  //add products data if data from api is ready and total = 0
  useEffect(() => {
    if (fetchedProducts.total === 0 && data?.products.length) {
      dispatch(addProducts(data as ProductsFetchedData));
    }
  }, [data, dispatch]);

  //when url param change (updated in Pagination component), update local page state
  useEffect(() => {
    setPage(Number(actualPage));
  }, [actualPage]);

  //products indexes for displayed items
  const firstIndex = (page - 1) * 9;
  const secondIndex = total < 9 ? total : firstIndex + 9;

  //sorting products based on sortOption from global state
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

  ////UI
  return (
    <>
      <section className="px-4 sm:px-[100px] max-container min-h-[1300px] ">
        <div className="border-b-2" />
        <Breadcrumbs />
        <div className="flex mt-[12px] sm:mt-[20px]">
          <div className="hidden xl:block w-full max-w-[295px]">
            <Filters />
          </div>
          <div className=" xl:ml-[20px] w-full">
            <ShopInfoBar
              total={total}
              first={firstIndex}
              second={secondIndex}
            />
            <div className="mt-4 grid grid-cols-1 sm:flex flex-wrap justify-center gap-5 ">
              {isPending ? (
                <CircularProgress color="inherit" className="m-auto" />
              ) : (
                sortedProducts()
                  ?.slice(firstIndex, secondIndex)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="max-lg:scale-90 max-md:scale-[0.7] max-lg:m-[-20px] scale-100 m-0 max-md:m-[-50px]"
                    >
                      <Product {...product} />
                    </div>
                  ))
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
