import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import Breadcrumbs from "./Breadcrumbs";
import Filters from "./Filters";
import PaginationBar from "./PaginationBar";
import Product from "./Product";
import ShopInfoBar from "./ShopInfoBar";

const Shop = () => {
  //
  ////DATA

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
            <div className="mt-4 grid-cols-3 gap-5">
              <Product />
            </div>

            <PaginationBar />
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
