import settings from "../assets/Settings.png";
import arrow from "../assets/Arrow down.png";
import { useQuery } from "@tanstack/react-query";
import fetchCategoriesList from "../api/queries/categories";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../redux/store";
import {
  addCategorizedProducts,
  addCategoryName,
} from "../redux/productsSlice";
import { Product } from "../api/queries/products";

type FiltersProps = {
  iconHide?: boolean;
};

const Filters = ({ iconHide }: FiltersProps) => {
  //
  ////DATA
  const [priceOpen, setPriceOpen] = useState(true); //price filter open/close
  const [categoryOpen, setCategoryOpen] = useState(true); //category filter open/close
  const [selectedCategory, setSelectedCategory] = useState(""); //selected category name
  const [priceRange, setPriceRange] = useState({
    from: "",
    to: "",
  });

  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  //products list form global state
  const allProducts = useSelector(
    (state: RootState) => state.products.fetchedProducts
  );

  //filtered products list form global state
  const filteredProductsByCategory = useSelector(
    (state: RootState) => state.products.filteredProductsByCategory
  );

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

  //filtered products by category
  const categorizedProducts: Product[] = allProducts.products.filter(
    (product) => product.category === selectedCategory
  );

  //when selected category will change, updated filtered product list in global state and add actual category name
  useEffect(() => {
    if (selectedCategory) {
      const dataToAdd = {
        products: categorizedProducts,
        total: categorizedProducts.length,
        skip: 0,
        limit: 0,
      };
      dispatch(addCategorizedProducts(dataToAdd));
      const categoryUppercase =
        selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
      dispatch(addCategoryName(categoryUppercase));
    }
  }, [selectedCategory]);

  //helper function
  const filterByPriceRange = (products: Product[], from: number, to: number) =>
    products.filter((product) => product.price >= from && product.price <= to);

  //filter products with price range
  const handleFilterApply = () => {
    const actualProducts = filteredProductsByCategory || allProducts; //assign actual products

    const from = Number(priceRange.from) || 0;
    const to = Number(priceRange.to) || Infinity;

    if (from > to) {
      console.error("Invalid price range: 'from' cannot be greater than 'to'.");
      return;
    }

    //used helper function
    const priceRangedProducts = filterByPriceRange(
      actualProducts.products,
      from,
      to
    );
    //creating relevant data to add
    const dataToAdd = {
      products: priceRangedProducts,
      total: priceRangedProducts.length,
      skip: 0,
      limit: 0,
    };
    //add relevant data
    dispatch(addCategorizedProducts(dataToAdd));
  };

  //UI
  return (
    <div className=" h-full max-h-[1200px] rounded-[20px] ring-1 ring-black ring-opacity-20  pt-[20px] pb-6 px-6">
      <div className="flex justify-between items-center pb-6">
        <p className="font-satoshi font-bold text-[20px] ">Filters</p>
        {iconHide && (
          <img
            src={settings}
            width={24}
            height={24}
            alt="settings"
            className="-rotate-90 opacity-60 hover:opacity-100 cursor-pointer"
            onClick={handleFiltersOpen}
          />
        )}
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
            value={priceRange.from}
            name="from"
            onChange={(e) =>
              setPriceRange((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            type="text"
            className="ring-1 ring-black ring-opacity-20 focus:ring-black  focus:outline-none  w-full max-w-[120px] h-7 placeholder:text-sm  pl-2 rounded-sm "
            placeholder="from:"
          />
          <input
            value={priceRange.to}
            name="to"
            onChange={(e) =>
              setPriceRange((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            type="text"
            className="ring-1 ring-black ring-opacity-20 focus:ring-black  focus:outline-none w-full max-w-[120px] h-7 placeholder:text-sm pl-2 rounded-sm"
            placeholder="to:"
          />
        </div>
      )}

      <div className="border-t-2 pb-6" />
      <button
        onClick={handleFilterApply}
        className="w-full text-[14px] px-[86px] py-[15px] bg-black rounded-full text-white transition ease-in-out duration-100 hover:scale-95"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default Filters;
