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
  //fetch page number from url (uploaded from Pagination component)
  const [searchParams] = useSearchParams();
  const actualPage = searchParams.get("page");

  const [page, setPage] = useState(Number(actualPage) || 1); //selected page local state
  const [total, setTotal] = useState(0); //total quantity of products
  const [skip, setSkip] = useState(0); //

  //when url param change (updated in Pagination component), update local page state
  useEffect(() => {
    setPage(Number(actualPage));
  }, [actualPage]);

  //fetch products and actualized them when local page state is updated
  const { data, isPending } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProductsPage(page),
  });
  console.log(data);

  //when is not loading data fetch total amount of products and add it to state
  useEffect(() => {
    if (!isPending) {
      setTotal(data.total);
      setSkip(data.skip);
    }
  }, [data]);

  ////UI
  return (
    <>
      <section className="px-4 sm:px-[100px] max-container">
        <div className="border-b-2" />
        <Breadcrumbs />
        <div className="flex mt-[20px]">
          <Filters />
          <div className=" ml-[20px] w-full">
            <ShopInfoBar total={total} skip={skip} />
            <div className="mt-4 flex flex-wrap  gap-5 min-h-[1300px]">
              {isPending ? (
                <CircularProgress color="inherit" className="m-auto" />
              ) : (
                data.products.map((product: ProductProps) => (
                  <Product key={product.id} {...product} />
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
