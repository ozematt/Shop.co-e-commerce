import { useQuery } from "@tanstack/react-query";
import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import Breadcrumbs from "./Breadcrumbs";
import Filters from "./Filters";
import PaginationBar from "./PaginationBar";
import Product from "./Product";
import ShopInfoBar from "./ShopInfoBar";
import fetchProductsPage from "../api/queries/productsPagination";
import { useState } from "react";

const Shop = () => {
  const [page, setPage] = useState(0);
  // console.log(page);

  //
  ////DATA
  const { data: products, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProductsPage(page),
  });

  const handleSetPage = (number: number) => {
    setPage(number);
  };
  console.log(products);

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
            <div className="mt-4 grid-cols-3 gap-5 h-full max-h-[1030px]">
              <Product />
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
