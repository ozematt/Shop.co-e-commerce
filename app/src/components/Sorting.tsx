import { useState } from "react";
import arrow from "../assets/Arrow down.png";
import { SortMethod, addSortMethod } from "../redux/productsSlice";
import { AppDispatch, useAppDispatch } from "../redux/store";
// import { SortMethod } from "./Shop";

const sortingOptions: SortMethod[] = [
  "Alphabetical",
  "Hightest Price",
  "Lowest Price",
  "Top Rated",
  "Least Rated",
] as const;

const Sorting = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  ////UI
  return (
    <>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="font-satoshi font-bold text-[20px]">Sorting</p>
        <img
          src={arrow}
          width={20}
          height={20}
          alt="arrow"
          className="opacity-60 hover:opacity-100 cursor-pointer"
          style={{
            transform: `rotate(${!open ? "180deg" : "0deg"})`,
          }}
        />
      </div>
      <div className="pb-6">
        {open &&
          sortingOptions.map((option) => (
            <div
              key={option}
              onClick={() => dispatch(addSortMethod(option))}
              className="flex items-center justify-between first:pt-6"
            >
              {" "}
              <p className="font-satoshi pb-2 opacity-60 hover:opacity-100 cursor-pointer">
                {option}
              </p>
            </div>
          ))}
      </div>
      <div className="border-t-2 pb-6" />
    </>
  );
};

export default Sorting;
