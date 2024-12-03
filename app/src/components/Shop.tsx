import Breadcrumbs from "./Breadcrumbs";
import settings from "../assets/Settings.png";
import arrow from "../assets/Arrow down.png";
import { useQuery } from "@tanstack/react-query";
import fetchCategoriesList from "../api/queries/categories";
import { useState } from "react";

const Shop = () => {
  //
  ////DATA
  const [priceOpen, setPriceOpen] = useState(true);
  const [categoryOpen, setCategoryOpen] = useState(true);

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategoriesList,
  });

  ////LOGIC
  const handleFiltersOpen = () => {
    setCategoryOpen(true);
    setPriceOpen(true);
    if (priceOpen && categoryOpen) {
      setCategoryOpen(false);
      setPriceOpen(false);
    }
  };

  ////UI
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
            className="-rotate-90 opacity-60 hover:opacity-100 cursor-pointer"
            onClick={handleFiltersOpen}
          />
        </div>
        <div className="border-t-2 pb-6" />

        <div className="flex justify-between items-center">
          <p className="font-satoshi font-bold text-[20px]">Category</p>
          <img
            src={arrow}
            width={20}
            height={20}
            alt="arrow"
            onClick={() => setCategoryOpen(!categoryOpen)}
            className="opacity-60 hover:opacity-100 cursor-pointer"
            style={{
              transform: `rotate(${!priceOpen ? "180deg" : "0deg"})`,
            }}
          />
        </div>

        <div className="pb-6">
          {categoryOpen &&
            categories?.map((category) => (
              <div
                key={category}
                className="flex items-center justify-between first:pt-6"
              >
                {" "}
                <p className="font-satoshi pb-2 opacity-60 hover:opacity-100 cursor-pointer">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </p>
                <img src={arrow} alt="arow" className="-rotate-90" />
              </div>
            ))}
        </div>
        <div className="border-t-2 pb-6" />
        {/* PRICE */}
        <div className="flex justify-between items-center pb-6">
          <p className="font-satoshi font-bold text-[20px] ">Price</p>
          <img
            src={arrow}
            width={20}
            height={20}
            alt="arrow"
            onClick={() => setPriceOpen(!priceOpen)}
            className="opacity-60 hover:opacity-100 cursor-pointer"
            style={{
              transform: `rotate(${!priceOpen ? "180deg" : "0deg"})`,
            }}
          />
        </div>
        {priceOpen && (
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
        )}

        <div className="border-t-2 pb-6" />
        <button className="w-full text-[14px] px-[86px] py-[15px] bg-black rounded-full text-white transition ease-in-out duration-100 hover:scale-95">
          Apply Filter
        </button>
      </div>
    </section>
  );
};

export default Shop;
