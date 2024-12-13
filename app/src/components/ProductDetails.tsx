import { Rating } from "@mui/material";
import Breadcrumbs from "./Breadcrumbs";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import Newsletter from "../sections/Newsletter";
import Footer from "../sections/Footer";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Product } from "../api/queries/products";

const ProductDetails = () => {
  //
  //DATA
  //state to handle which details were about to show
  const [details, setDetails] = useState("Product");

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
      setDisplayedProduct(productFind);
      localStorage.setItem("product", JSON.stringify(productFind));
    }
  }, [productFind]);

  ////UI
  return (
    <>
      <section className="max-container px-4 sm:px-[100px]">
        <div className="border-b-2" />
        <Breadcrumbs />
        {/* ALL */}
        <div className="mt-9 flex">
          {/* IMG S */}
          <div className="flex gap-[14px]">
            {" "}
            <div className="space-y-[14px]">
              <img
                src=""
                alt=""
                className="h-[167px] w-[152px] rounded-[20px] ring-1"
              />
              <img
                src=""
                alt=""
                className="h-[167px] w-[152px] rounded-[20px] ring-1"
              />
              <img
                src=""
                alt=""
                className="h-[167px] w-[152px] rounded-[20px] ring-1"
              />
            </div>
            {/* main IMG */}
            <img
              src=""
              alt=""
              className="h-[530px] w-[444px] rounded-[20px] ring-1"
            />
          </div>
          {/* Details */}
          <div className="ml-[40px]">
            {/* title */}
            <h2 className="font-integralCFBold text-[40px] leading-[43px]">
              {displayedProduct?.title}
            </h2>
            <div className="flex pt-2">
              {/* <Rating
                defaultValue={
                  product?.rating ? Math.round(product?.rating * 2) / 2 : 5
                }
                precision={0.5}
                size="large"
                readOnly
              />{" "} */}
              <p className="pl-2 pt-1 font-satoshi text-sm">
                {/* {Math.round(rating * 2) / 2} */}
                <span className="opacity-50">/5</span>
              </p>
            </div>
            {/* price */}
            <p className="font-satoshi text-[32px] font-bold">Price $</p>
            {/* captions */}
            <p className="font-satoshi opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              inventore reprehenderit deserunt temporibus architecto, iure quos
              odio voluptatem{" "}
            </p>

            <div className="my-6 border-b-2" />
            {/* availability */}
            <p className="font-satoshi opacity-60">Availability</p>
            <button className="mt-[16px] rounded-full px-6 py-3 font-satoshi font-medium ring-1">
              Low, normal, hight
            </button>
            <div className="my-6 border-b-2" />
            {/* quantity */}
            <button className="mt-[16px] w-full max-w-[170px] rounded-full px-6 py-3 font-satoshi font-medium ring-1">
              <span className="pr-5">-</span> 1 <span className="pl-5">+</span>
            </button>
            <button className="ml-[20px] w-full max-w-[400px] rounded-full px-6 py-3 font-satoshi font-medium ring-1">
              Add to Cart
            </button>
          </div>
        </div>
        {/* details + reviews */}
        <div className="w-full">
          {/* buttons */}
          <div>
            <button
              onClick={() => setDetails("Product")}
              className="duration-600 w-[50%] border-b-2 py-6 font-satoshi text-xl opacity-60 transition ease-in-out hover:border-b-black hover:font-bold hover:opacity-100"
              style={
                details === "Product"
                  ? {
                      opacity: "1",
                      fontWeight: "bold",
                      borderBottom: "2px solid black",
                    }
                  : undefined
              }
            >
              Product Details
            </button>
            <button
              onClick={() => setDetails("Reviews")}
              className="duration-600 mb-9 w-[50%] border-b-2 py-6 font-satoshi text-xl opacity-60 transition ease-in-out hover:border-b-black hover:font-bold hover:opacity-100"
              style={
                details === "Reviews"
                  ? {
                      opacity: "1",
                      fontWeight: "bold",
                      borderBottom: "2px solid black",
                    }
                  : undefined
              }
            >
              Rating & Reviews
            </button>
            <div className="mb-8 font-satoshi">
              {details === "Product" ? (
                <div className="space-y-2 text-xl opacity-60">
                  <p className=""> Brand: ...</p>
                  <p className=""> Weight: ...</p>
                  <ul className="">
                    {" "}
                    Dimensions
                    <li>Width: ...</li>
                    <li>Height: ...</li>
                    <li>Depth: ...</li>
                  </ul>
                  <p>Warranty: ...</p>
                  <p>Shipping information: ...</p>
                </div>
              ) : (
                <div className="flex justify-between">
                  <Comment
                    rating={2}
                    name={"John D."}
                    text={"Lorem ipsum ........"}
                  />
                  <Comment
                    rating={2}
                    name={"John D."}
                    text={"Lorem ipsum ........"}
                  />
                  <Comment
                    rating={2}
                    name={"John D."}
                    text={"Lorem ipsum ........"}
                  />
                </div>
              )}
            </div>
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

export default ProductDetails;
