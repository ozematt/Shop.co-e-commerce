import { Rating } from "@mui/material";
import Breadcrumbs from "./Breadcrumbs";
import { useEffect, useState } from "react";

import Newsletter from "../sections/Newsletter";
import Footer from "../sections/Footer";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Product } from "../api/queries/products";
import useDiscount from "../lib/hooks/useDiscount";
import minus from "../assets/Minus.png";
import plus from "../assets/Plus.png";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
  //
  //DATA
  //data form local storage
  const localProduct = JSON.parse(localStorage.getItem("product") || "{}");

  //displayed product state, initial state is product from local storage
  const [displayedProduct, setDisplayedProduct] =
    useState<Product>(localProduct);

  const [bigImg, setBigImg] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  //extracted price nad discount from state
  const { discountPercentage, price } = displayedProduct;

  //use custom hook to calculate the new price
  const { newPrice, discount } = useDiscount({ discountPercentage, price });

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

  useEffect(() => {
    if (displayedProduct) {
      setBigImg(displayedProduct.images[0]);
      return;
    }
  }, [displayedProduct]);

  const handleQuantityIncrement = () => {
    if (quantity >= 1 && quantity < displayedProduct.stock) {
      setQuantity(quantity + 1);
    }
    return;
  };
  const handleQuantityDecrement = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  };

  ////UI
  return (
    <>
      <section className="max-container px-4 sm:px-[100px]">
        <div className="border-b-2" />
        <Breadcrumbs />
        {/* ALL */}
        <div className="mt-9 flex">
          {/* IMG S */}
          <div className="flex w-full max-w-[610px] gap-[14px]">
            {" "}
            <div className="w-[152px] space-y-[14px]">
              {displayedProduct.images.slice(0, 3).map((img) => (
                <img
                  key={img}
                  src={img}
                  alt="image"
                  width={152}
                  height={167}
                  onClick={() => setBigImg(img)}
                  className="h-[167px] rounded-[20px] bg-grayBG object-contain ring-black hover:ring-1"
                />
              ))}
            </div>
            {/* main IMG */}
            <img
              src={bigImg}
              alt="main image"
              width={444}
              height={530}
              className="h-[530px] rounded-[20px] bg-grayBG object-contain"
            />
          </div>
          {/* Details */}
          <div className="ml-[40px] flex flex-col justify-between">
            {/* title */}
            <div>
              <h2 className="font-integralCFBold text-[40px] leading-[43px]">
                {displayedProduct.title}
              </h2>
              <div className="flex pt-[14px]">
                <Rating
                  name="rating"
                  value={
                    displayedProduct.rating
                      ? Math.round(displayedProduct?.rating * 2) / 2
                      : 5
                  }
                  precision={0.5}
                  size="large"
                  readOnly
                />{" "}
                <p className="pl-2 pt-1 font-satoshi">
                  {Math.round(displayedProduct.rating * 2) / 2}
                  <span className="opacity-50">/5</span>
                </p>
              </div>
              {/* price */}
              <div className="flex items-center gap-[2px] pt-[14px] font-satoshi text-[32px] font-bold">
                {" "}
                ${newPrice}
                {discount && (
                  <>
                    <span className="mx-[-9px] scale-[0.65] line-through opacity-30">
                      ${price}
                    </span>
                    <div className="h-[28px] w-[58px] rounded-[62px] bg-red-500 bg-opacity-10 py-[6.5px] text-center font-satoshi text-xs font-medium text-red-500">
                      -{discount}%
                    </div>
                  </>
                )}
              </div>
              {/* captions */}
              <p className="pt-[20px] font-satoshi opacity-60">
                {displayedProduct.description}
              </p>
            </div>

            {/* availability */}
            <div>
              <div className="my-6 border-b-2" />
              <p className="font-satoshi opacity-60">Shipping time:</p>
              <button className="mt-[16px] rounded-full bg-grayBG px-6 py-3 font-satoshi font-medium opacity-60">
                {displayedProduct.shippingInformation}
              </button>
              <div className="my-6 border-b-2" />
              {/* quantity */}
              <div className="flex h-[52px]">
                {" "}
                <button className="flex w-full max-w-[170px] justify-between rounded-full bg-grayBG px-6 py-3 font-satoshi font-medium">
                  <img
                    src={minus}
                    alt="minus"
                    width={24}
                    height={24}
                    onClick={handleQuantityDecrement}
                  />
                  {quantity}
                  <img
                    src={plus}
                    alt="plus"
                    width={24}
                    height={24}
                    onClick={handleQuantityIncrement}
                  />
                </button>
                <button className="ml-[20px] w-full max-w-[400px] rounded-full bg-black px-6 py-3 font-satoshi font-medium text-white ring-1 hover:scale-95">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Product details + reviews */}
        <ProductInfo {...displayedProduct} />
      </section>
      <div className="max-container">
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;
