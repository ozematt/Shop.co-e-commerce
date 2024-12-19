import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import Breadcrumbs from "./Breadcrumbs";
import { useSelector } from "react-redux";

import { selectAllCart } from "../redux/cartSlice";
import CartItem from "./CartItem";
import discount from "../assets/Discount.svg";
import arrowWhite from "../assets/Arrow_white.svg";
import { RootState } from "../redux/store";
import calculateTotalDiscount from "../lib/helpers/calculateTotalDiscount";
import { useEffect, useState } from "react";

const Cart = () => {
  //
  ////DATA
  const cart = useSelector(selectAllCart);
  const total = useSelector((state: RootState) => state.cart.total);

  const [totalDiscount, setTotalDiscount] = useState(0);
  const [savings, setSavings] = useState(0);

  ////LOGIC
  useEffect(() => {
    if (cart.length) {
      const { effectiveDiscount } = calculateTotalDiscount(cart);
      const discount = Math.round(Number(effectiveDiscount));
      setTotalDiscount(discount);
    }
    if (total === 0) {
      setTotalDiscount(0);
    }
  }, [cart, total]);

  useEffect(() => {
    if (totalDiscount !== 0) {
      const savings = Math.round((total * totalDiscount) / 100);
      setSavings(savings);
    }
  }, [cart, totalDiscount]);

  ////UI
  return (
    <>
      {" "}
      <section className="max-container px-4 sm:px-[100px]">
        <div className="border-b-2" />
        <Breadcrumbs />
        <div>
          <h2 className="mt-[8px] font-integralCFBold text-[32px] max-md:leading-[36px] sm:mt-[24px] sm:text-5xl">
            your cart
          </h2>
          <div className="mt-[20px] flex flex-wrap justify-center gap-[20px] sm:mt-[24px]">
            {/* cart items */}
            <div className="h-full max-h-[505px] w-full rounded-[20px] ring-1 ring-black ring-opacity-10 min-[1454px]:max-w-[715px]">
              {cart.length ? (
                cart.map((item) => <CartItem key={item.id} {...item} />)
              ) : (
                <h2 className="insert-0 py-[190px] text-center font-integralCFBold text-7xl opacity-10 sm:text-8xl">
                  Empty
                </h2>
              )}
            </div>
            {/* SUMMARY */}
            <div className="w-full max-w-[805px] rounded-[20px] ring-1 ring-black ring-opacity-10 min-[1454px]:max-w-[505px]">
              <div className="px-6 pb-[33px] pt-[20px]">
                <h6 className="pb-1 font-satoshi text-2xl font-bold">
                  Order Summary
                </h6>
                <div>
                  <div className="flex justify-between pt-5">
                    <p className="font-satoshi text-xl opacity-60">Subtotal </p>{" "}
                    <p className="font-satoshi text-xl font-bold">${total}</p>
                  </div>

                  <div className="flex justify-between pt-5">
                    <p className="font-satoshi text-xl opacity-60">
                      Discount <span>(-{totalDiscount}%)</span>{" "}
                    </p>{" "}
                    <p className="font-satoshi text-xl font-bold text-red-500">
                      -${savings}
                    </p>
                  </div>

                  <div className="flex justify-between pt-5">
                    <p className="font-satoshi text-xl opacity-60">
                      Delivery Fee{" "}
                    </p>{" "}
                    <p className="font-satoshi text-xl font-bold">$15</p>
                  </div>

                  <div className="border-b-[1px] pt-5" />

                  <div className="flex justify-between pt-5">
                    <p className="font-satoshi text-xl">Total </p>{" "}
                    <p className="font-satoshi text-2xl font-bold">
                      ${(total - savings + 15).toFixed(2)}
                    </p>
                  </div>

                  <div className="relative flex justify-between pt-6">
                    <img
                      src={discount}
                      alt="discount icon"
                      className="absolute left-4 top-[50%] z-10 opacity-40"
                    />
                    <input
                      type="text"
                      placeholder="Add promo code"
                      className="h-[48px] w-full max-w-[326px] rounded-full bg-grayBG pl-[50px] placeholder:opacity-40 focus:outline-none focus:ring-1 focus:ring-black"
                    />{" "}
                    <button className="rounded-full bg-black px-[38px] py-[13px] font-satoshi font-medium text-white transition duration-100 ease-in-out hover:scale-95">
                      Apply
                    </button>
                  </div>

                  <button className="relative mt-6 w-full max-w-[457px] rounded-full bg-black py-[19px] pr-9 font-satoshi font-medium text-white transition duration-100 ease-in-out hover:scale-95">
                    Go to Checkout{" "}
                    <img
                      src={arrowWhite}
                      alt="white arrow icon"
                      className="absolute left-[60%] top-[32%]"
                    />
                  </button>
                </div>
              </div>
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

export default Cart;
