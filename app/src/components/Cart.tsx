import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import Breadcrumbs from "./Breadcrumbs";
import deleteIcon from "../assets/Delete.svg";
import QuantityButton from "./QuantityButton";

const Cart = () => {
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
            <div className="w-[715px] rounded-[20px] ring-1">
              {/* purchased products */}
              <div className="flex pl-[24px] pt-[20px]">
                {/* IMG */}
                <div className="h-[124px] w-[124px] rounded-lg ring-1" />
                {/* product details */}
                <div className="flex flex-col justify-between pl-[16px]">
                  {" "}
                  <h6 className="font-satoshi text-xl font-bold"> Title</h6>
                  <p className="font-satoshi text-2xl font-bold">$ Price</p>
                </div>
                <div>
                  <img src={deleteIcon} alt="" />
                  <QuantityButton stock={1} />
                </div>
              </div>
            </div>
            <div className="h-[458px] w-[505px] rounded-[20px] ring-1">
              summary
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
