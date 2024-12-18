import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import Breadcrumbs from "./Breadcrumbs";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { selectAllCart } from "../redux/cartSlice";
import CartItem from "./CartItem";
import discount from "../assets/Discount.svg";
import arrowWhite from "../assets/Arrow_white.svg";

const Cart = () => {
  const total = useSelector((state: RootState) => state.cart.total);
  const cart = useSelector(selectAllCart);
  console.log(cart);

  console.log(total);

  return (
    <>
      {" "}
      <section className="max-container px-4 sm:px-[100px]">
        <div className="border-b-2" />
        <Breadcrumbs />
        <div>
          <h2 className="mt-[24px] font-integralCFBold text-[40px] max-md:leading-[36px] sm:text-5xl">
            your cart
          </h2>
          <div className="mt-[24px] flex gap-[20px]">
            <div className="w-[715px] rounded-[20px] ring-1 ring-black ring-opacity-10">
              {/* purchased products */}
              {cart.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>

            <div className="w-[505px] rounded-[20px] ring-1">
              <div className="px-6 pb-[33px] pt-[20px]">
                <h6 className="pb-1 font-satoshi text-2xl font-bold">
                  Order Summary
                </h6>
                <div>
                  <div className="flex justify-between pt-5">
                    <p className="font-satoshi text-xl opacity-60">Subtotal </p>{" "}
                    <p className="font-satoshi text-xl font-bold">$555</p>
                  </div>

                  <div className="flex justify-between pt-5">
                    <p className="font-satoshi text-xl opacity-60">
                      Discount <span>(-20%)</span>{" "}
                    </p>{" "}
                    <p className="font-satoshi text-xl font-bold text-red-500">
                      -$100
                    </p>
                  </div>

                  <div className="flex justify-between pt-5">
                    <p className="font-satoshi text-xl opacity-60">
                      Delivery Fee{" "}
                    </p>{" "}
                    <p className="font-satoshi text-xl font-bold">$15</p>
                  </div>

                  <div className="border-b-2 pt-5" />

                  <div className="flex justify-between pt-5">
                    <p className="font-satoshi text-xl">Total </p>{" "}
                    <p className="font-satoshi text-2xl font-bold">$215</p>
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
