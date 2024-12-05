import { useQuery } from "@tanstack/react-query";
import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import Breadcrumbs from "./Breadcrumbs";
import Filters from "./Filters";
import PaginationBar from "./PaginationBar";
import Product, { ProductProps } from "./Product";
import ShopInfoBar from "./ShopInfoBar";
import fetchProductsPage from "../api/queries/productsPagination";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const Shop = () => {
  //
  ////DATA

  //url data
  const [searchParams] = useSearchParams();
  const actualPage = searchParams.get("page");

  const [page, setPage] = useState(Number(actualPage) || 1);

  useEffect(() => {
    setPage(Number(actualPage));
  }, [actualPage]);

  //query
  const { data, isPending } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProductsPage(page),
  });

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(data.total);
  }, []);

  const handleSetPage = (number: number) => {
    setPage(number);
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
            <ShopInfoBar />
            <div className="mt-4 flex flex-wrap gap-5 min-h-[1300px]">
              {isPending ? (
                <CircularProgress color="inherit" className="m-auto" />
              ) : (
                data.products.map((product: ProductProps) => (
                  <Product key={product.id} {...product} />
                ))
              )}
            </div>
            <div className="border-b-2 mt-[32px]" />

            <PaginationBar total={total} page={page} onClick={handleSetPage} />
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
