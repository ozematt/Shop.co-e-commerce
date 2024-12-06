import settings from "../assets/Settings.png";
import arrow from "../assets/Arrow down.png";
import { useQuery } from "@tanstack/react-query";
import fetchCategoriesList from "../api/queries/categories";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../redux/store";
import { addCategorizedProducts } from "../redux/productsSlice";

const Filters = () => {
  //
  ////DATA
  const [priceOpen, setPriceOpen] = useState(true); //price filter open/close
  const [categoryOpen, setCategoryOpen] = useState(true); //category filter open/close
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();

  // fetch category list
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategoriesList,
  });

  ////LOGIC
  //open/close all filters
  const handleFiltersOpen = () => {
    setCategoryOpen(true);
    setPriceOpen(true);
    if (priceOpen && categoryOpen) {
      setCategoryOpen(false);
      setPriceOpen(false);
    }
  };

  const dispatch: AppDispatch = useAppDispatch();

  const products = useSelector(
    (state: RootState) => state.products.fetchedProducts
  );

  console.log(products);

  const categorizedProducts = products.products.filter(
    (product) => product.category === selectedCategory
  );
  console.log(categorizedProducts);

  useEffect(() => {
    if (selectedCategory) {
      const dataToAdd = {
        products: categorizedProducts,
        total: categorizedProducts.length,
        skip: 0,
        limit: 0,
      };
      dispatch(addCategorizedProducts(dataToAdd));
    }
  }, [selectedCategory]);

  //UI
  return (
    <div className="w-full max-w-[295px] h-full max-h-[1200px] rounded-[20px] ring-1 ring-black ring-opacity-20  pt-[20px] pb-6 px-6">
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
      {/* CATEGORY */}
      <div
        onClick={() => {
          setCategoryOpen(!categoryOpen), setSelectedCategory("");
        }}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="font-satoshi font-bold text-[20px]">Category</p>
        <img
          src={arrow}
          width={20}
          height={20}
          alt="arrow"
          className="opacity-60 hover:opacity-100 cursor-pointer"
          style={{
            transform: `rotate(${!categoryOpen ? "180deg" : "0deg"})`,
          }}
        />
      </div>

      <div className="pb-6">
        {categoryOpen &&
          categories?.map((category) => (
            <div
              key={category}
              className="flex items-center justify-between first:pt-6"
              onClick={() => {
                navigate(`/shop/${category}`), setSelectedCategory(category);
              }}
            >
              {" "}
              <p className="font-satoshi pb-2 opacity-60 hover:opacity-100 cursor-pointer">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </p>
            </div>
          ))}
      </div>
      <div className="border-t-2 pb-6" />
      {/* PRICE */}
      <div
        onClick={() => setPriceOpen(!priceOpen)}
        className="flex justify-between items-center pb-6 cursor-pointer"
      >
        <p className="font-satoshi font-bold text-[20px] ">Price</p>
        <img
          src={arrow}
          width={20}
          height={20}
          alt="arrow"
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
  );
};

export default Filters;
