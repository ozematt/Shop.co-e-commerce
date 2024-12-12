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
  const [details, setDetails] = useState("Product");
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState<Product | null>(null);

  const productId = Number(searchParams.get("id")) || 1;

  const productFind = useSelector((state: RootState) =>
    state.products.fetchedProducts.products.find(
      (item) => item.id === Number(productId)
    )
  );

  useEffect(() => {
    if (productFind) {
      setProduct(productFind);
    }
  }, []);

  return (
    <>
      <section className="px-4 sm:px-[100px] max-container">
        <div className="border-b-2 " />
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
                className="w-[152px] h-[167px] rounded-[20px] ring-1"
              />
              <img
                src=""
                alt=""
                className="w-[152px] h-[167px] rounded-[20px] ring-1"
              />
              <img
                src=""
                alt=""
                className="w-[152px] h-[167px] rounded-[20px] ring-1"
              />
            </div>
            {/* main IMG */}
            <img
              src=""
              alt=""
              className="w-[444px] h-[530px] rounded-[20px] ring-1"
            />
          </div>
          {/* Details */}
          <div className="ml-[40px]">
            {/* title */}
            <h2 className="font-integralCFBold text-[40px] leading-[43px]">
              {product?.title}
            </h2>
            <div className="flex pt-2">
              <Rating
                defaultValue={
                  product?.rating ? Math.round(product?.rating * 2) / 2 : 5
                }
                precision={0.5}
                size="large"
                readOnly
              />{" "}
              <p className="font-satoshi text-sm pl-2 pt-1">
                {/* {Math.round(rating * 2) / 2} */}
                <span className="opacity-50">/5</span>
              </p>
            </div>
            {/* price */}
            <p className="font-satoshi font-bold text-[32px]">Price $</p>
            {/* captions */}
            <p className="font-satoshi opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              inventore reprehenderit deserunt temporibus architecto, iure quos
              odio voluptatem{" "}
            </p>

            <div className="border-b-2 my-6" />
            {/* availability */}
            <p className="font-satoshi opacity-60">Availability</p>
            <button className="py-3 px-6 mt-[16px] rounded-full ring-1 font-satoshi font-medium">
              Low, normal, hight
            </button>
            <div className="border-b-2 my-6" />
            {/* quantity */}
            <button className="py-3 px-6 mt-[16px] w-full max-w-[170px] rounded-full ring-1 font-satoshi font-medium ">
              <span className="pr-5">-</span> 1 <span className="pl-5">+</span>
            </button>
            <button className="font-satoshi font-medium py-3 px-6 ml-[20px] ring-1 rounded-full w-full max-w-[400px]">
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
              className="py-6 w-[50%] border-b-2 font-satoshi text-xl opacity-60 hover:border-b-black hover:opacity-100 hover:font-bold transition ease-in-out duration-600"
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
              className="mb-9 py-6 w-[50%] border-b-2 font-satoshi text-xl opacity-60 hover:border-b-black hover:opacity-100 hover:font-bold transition ease-in-out duration-600"
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
            <div className="mb-8 font-satoshi ">
              {details === "Product" ? (
                <div className="text-xl space-y-2 opacity-60">
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
