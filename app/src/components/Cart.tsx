import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import Breadcrumbs from "./Breadcrumbs";

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
