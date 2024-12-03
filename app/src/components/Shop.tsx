import Breadcrumbs from "./Breadcrumbs";
import settings from "../assets/Settings.png";
import arrow from "../assets/Arrow down.png";

const Shop = () => {
  return (
    <section className="px-4 sm:px-[100px] max-container">
      <div className="border-b-2" />
      <Breadcrumbs />

      <div className="w-full max-w-[295px] rounded-[20px] ring-1 ring-black ring-opacity-20 mt-[20px] pt-[20px] pb-6 px-6">
        <div className="flex justify-between items-center pb-6">
          <p className="font-satoshi font-bold text-[20px] ">Filters</p>
          <img
            src={settings}
            width={24}
            height={24}
            alt="settings"
            className="-rotate-90 opacity-60"
          />
        </div>
        <div className="border-t-2 pb-6" />
        <div className="pb-6">
          <p>categiries</p>
          <p>categiries</p>
          <p>categiries</p>
          <p>categiries</p>
        </div>
        <div className="border-t-2 pb-6" />
        <div className="flex justify-between items-center pb-6">
          <p className="font-satoshi font-bold text-[20px] ">Price</p>
          <img
            src={arrow}
            width={20}
            height={20}
            alt="arrow"
            className=" opacity-60"
          />
        </div>
        <div className="flex gap-2 pb-6">
          <input
            type="text"
            className="ring-1 ring-black ring-opacity-20 focus:ring-black  focus:outline-none  w-full max-w-[120px] h-7 placeholder:text-sm  pl-2 rounded-sm "
            placeholder="from:"
          />
          <input
            type="text"
            className="ring-1 ring-black ring-opacity-20 focus:ring-black  focus:outline-none w-full max-w-[120px] h-7 placeholder:text-sm pl-2 rounded-sm"
            placeholder="to:"
          />
        </div>
        <div className="border-t-2 pb-6" />
        <button className="w-full text-[14px] px-[86px] py-[15px] bg-black rounded-full text-white transition ease-in-out duration-100 hover:scale-95">
          Apply Filter
        </button>
      </div>
    </section>
  );
};

export default Shop;
