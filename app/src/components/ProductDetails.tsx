import Breadcrumbs from "./Breadcrumbs";
import { useEffect, useState } from "react";
import Newsletter from "../sections/Newsletter";
import Footer from "../sections/Footer";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Product } from "../api/queries/products";
import ProductInfo from "./ProductInfo";

import ProductMainDetails from "./ProductMainDetails";
import ProductImages from "./ProductImages";
import ProductMainButtons from "./ProductMainButtons";
import AlsoLike from "./AlsoLike";

const ProductDetails = () => {
  //
  //DATA
  //data form local storage
  const localProduct = JSON.parse(localStorage.getItem("product") || "{}");

  //displayed product state, initial state is product from local storage
  const [displayedProduct, setDisplayedProduct] =
    useState<Product>(localProduct);

  //extracted id from ulr
  const [searchParams] = useSearchParams();
  const productId = Number(searchParams.get("id")) || 1;

  //found product from all products
  const productFind = useSelector((state: RootState) =>
    state.products.fetchedProducts.products.find(
      (item) => item.id === Number(productId),
    ),
  );

  ////LOGIC
  useEffect(() => {
    if (productFind) {
      setDisplayedProduct(productFind); // added to local state
      localStorage.setItem("product", JSON.stringify(productFind)); //added to local storage
    }
  }, [productFind]);

  ////UI
  return (
    <>
      <section className="max-container px-4 sm:px-[100px]">
        <div className="border-b-2" />
        <Breadcrumbs />
        <div className="mt-9 lg:flex">
          <ProductImages images={displayedProduct.images} />
          <div className="mx-auto flex w-full max-w-[627px] flex-col justify-between max-lg:mt-7 lg:ml-[40px]">
            <ProductMainDetails {...displayedProduct} />
            <ProductMainButtons {...displayedProduct} />
          </div>
        </div>
        {/* Product details + reviews */}
        <ProductInfo {...displayedProduct} />
        <AlsoLike />
      </section>

      <div className="max-container">
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;
