import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import CircularProgress from "@mui/material/CircularProgress";
import { Footer, Newsletter } from "../sections";
import { Breadcrumbs, Filters, PaginationBar, ShopInfoBar } from "./";
import ProductsList from "./ProductsList";

const Shop = () => {
  //
  ////DATA

  const [searchParams] = useSearchParams();
  //fetch page number from url (uploaded from Pagination component)
  const actualPage = Number(searchParams.get("page")) || 1; // when is NaN assigns 1 (NaN invalid string)
  const [page, setPage] = useState(Number(actualPage)); //selected page, local state

  //state of total items
  const total = useSelector(
    (state: RootState) =>
      state.products.filteredProductsByCategory?.total ??
      state.products.fetchedProducts.total,
  );

  //products indexes for displayed items
  const firstIndex = (page - 1) * 9;
  const secondIndex = total < 9 ? total : firstIndex + 9;

  ////LOGIC
  //when url param change (updated in Pagination component), update local page state
  useEffect(() => {
    setPage(Number(actualPage));
  }, [actualPage]);

  ////UI
  return (
    <>
      <section className="max-container min-h-[1300px] px-4 sm:px-[100px]">
        <div className="border-b-2" />
        <Breadcrumbs />
        <div className="mt-[12px] flex sm:mt-[20px]">
          <div className="hidden w-full max-w-[295px] xl:block">
            <Filters />
          </div>
          <div className="w-full xl:ml-[20px]">
            <ShopInfoBar
              total={total}
              first={firstIndex}
              second={secondIndex}
            />
            <div className="mt-4 grid grid-cols-1 flex-wrap justify-center gap-5 sm:flex">
              {false ? (
                <CircularProgress color="inherit" className="m-auto" />
              ) : (
                <ProductsList />
              )}
            </div>

            <div className="mt-[32px] border-b-2" />

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
