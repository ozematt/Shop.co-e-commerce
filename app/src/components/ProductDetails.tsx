// import { Breadcrumbs } from "@mui/material";
import { Rating } from "@mui/material";
import Breadcrumbs from "./Breadcrumbs";

const ProductDetails = () => {
  return (
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
          <h2 className="font-integralCFBold text-[40px]">Title</h2>
          <div className="flex pt-2">
            <Rating
              //   defaultValue={Math.round(rating * 2) / 2}
              precision={0.5}
              size="large"
              readOnly
            />{" "}
            <p className="font-satoshi text-sm pl-2 pt-1">
              {/* {Math.round(rating * 2) / 2} */}
              <span className="opacity-50">/5</span>
            </p>
          </div>
          <p className="font-satoshi font-bold text-[32px]">Price $</p>
          <p className="font-satoshi opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            inventore reprehenderit deserunt temporibus architecto, iure quos
            odio voluptatem{" "}
          </p>
          <div className="border-b-2 my-6" />
          <p className="font-satoshi opacity-60">Availability</p>
          <button className="py-3 px-6 mt-[16px] rounded-full ring-1 font-satoshi font-medium">
            Low, normal, hight
          </button>
          <div className="border-b-2 my-6" />
          <button className="py-3 px-6 mt-[16px] w-full max-w-[170px] rounded-full ring-1 font-satoshi font-medium ">
            <span className="pr-5">-</span> 1 <span className="pl-5">+</span>
          </button>
          <button className="font-satoshi font-medium py-3 px-6 ml-[20px] ring-1 rounded-full w-full max-w-[400px]">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
