import { useQuery } from "@tanstack/react-query";
import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import Breadcrumbs from "./Breadcrumbs";
import Filters from "./Filters";
import PaginationBar from "./PaginationBar";
import Product, { ProductProps } from "./Product";
import ShopInfoBar from "./ShopInfoBar";
import fetchProductsPage from "../api/queries/productsPagination";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

const Shop = () => {
  const [page, setPage] = useState(0);

  //
  ////DATA
  const { data, isPending } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProductsPage(page),
  });

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
            <PaginationBar onClick={handleSetPage} />
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
