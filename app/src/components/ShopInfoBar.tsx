import { useEffect, useState } from "react";
import arrow from "../assets/Arrow down.png";
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../redux/store";
import { SortMethod } from "./Shop";
import { useLocation } from "react-router-dom";
import { addCategoryName } from "../redux/productsSlice";
import settings from "../assets/Settings.png";
import Filters from "./Filters";

const sortingOptions: SortMethod[] = [
  "Alphabetical",
  "Hightest Price",
  "Lowest Price",
  "Top Rated",
  "Least Rated",
] as const;

type ShopInfoBarProps = {
  first: number;
  second: number;
  total: number;
  onSelect: (method: SortMethod) => void;
};

const ShopInfoBar = ({ total, first, second, onSelect }: ShopInfoBarProps) => {
  //
  ////DATA
  const { pathname } = useLocation();
  const dispatch: AppDispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Alphabetical");

  const [filterOpen, setFilterOpen] = useState(false);

  //global state of added category name
  const categoryName = useSelector(
    (state: RootState) => state.products.categoryName
  );

  ////LOGIC
  //when pathname is changing to "/shop" set category name in global state to ""
  useEffect(() => {
    if (pathname === "/shop") {
      dispatch(addCategoryName(""));
    }
  }, [pathname]);

  const handleSortChange = (option: SortMethod) => {
    setSortBy(option);
    setOpen(false);
    onSelect(option);
  };

  ////UI
  return (
    <div className="flex justify-between items-center relative">
      <h3 className="font-satoshi font-bold text-2xl sm:text-[32px]">
        {categoryName ? categoryName : "Products"}
      </h3>
      <div className="flex max-sm:text-[14px] items-center pt-2">
        {" "}
        <p className=" sm:pt-2  font-satoshi opacity-60">
          Showing {first}-{second} of {total} Products{" "}
          <span className="hidden xl:inline pl-1">Sort by:</span>
        </p>
        {/* SETTINGS ICON */}
        <img
          src={settings}
          alt="settings"
          width={34}
          height={34}
          onClick={() => setFilterOpen(!filterOpen)}
          className="ml-5 hidden max-xl:block mb-[-3px] -rotate-90 opacity-80 hover:opacity-100 cursor-pointer bg-grayBG p-[7px] rounded-full"
        />
        <span
          onClick={() => setOpen(!open)}
          className=" max-xl:hidden flex pt-2 pl-2  cursor-pointer items-center font-satoshi font-bold"
        >
          {sortBy}
          <img
            src={arrow}
            width={16}
            height={16}
            alt="arrow"
            className="px-[2px]"
            style={{
              transform: `rotate(${!open ? "180deg" : "0deg"})`,
            }}
          />
        </span>
        {open && (
          <ul className="absolute right-[-5px] ring-1 ring-black ring-opacity-20 top-[50px] w-[130px] rounded-[5px] bg-white bg-opacity-85 z-10 pl-3 pt-1">
            {sortingOptions.map((option) => (
              <li
                key={option}
                className="font-satoshi pb-2 opacity-60 hover:opacity-100 cursor-pointer"
                onClick={() => handleSortChange(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      {filterOpen && (
        <>
          {" "}
          <div className="absolute z-20 bg-white w-full top-[-70px] rounded-2xl">
            <Filters iconHide={true} />
          </div>
          <div className="fixed inset-0 bg-black opacity-50 -z-50"></div>{" "}
        </>
      )}
    </div>
  );
};

export default ShopInfoBar;
