import { useState } from "react";
import arrow from "../assets/Arrow down.png";

const sortingOptions: string[] = [
  "Hightest Price",
  "Lowest Price",
  "Most Popular",
  "Least Popular",
  "Top Rated",
  "Least Rated",
] as const;

const ShopInfoBar = () => {
  //
  ////DATA
  const [open, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Most Popular");

  ////LOGIC

  const handleSortChange = (option: string) => {
    setSortBy(option);
    setOpen(false);
  };

  ////UI
  return (
    <div className="flex justify-between items-center relative">
      <h3 className="font-satoshi font-bold text-[32px]">Category</h3>
      <div className="flex items-center pt-2">
        {" "}
        <p className=" pt-2  font-satoshi opacity-60">
          Showing 1-10 of 100 Products <span className="pl-1">Sort by:</span>
        </p>
        <span
          onClick={() => setOpen(!open)}
          className="pt-2 pl-2 cursor-pointer flex items-center font-satoshi font-bold"
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
          <ul className="absolute right-[-5px] ring-1 ring-black ring-opacity-20 top-[50px] w-[130px] rounded-[5px] bg-white">
            {sortingOptions.map((option) => (
              <li
                key={option}
                className="font-satoshi hover:font-bold py-1 px-3 cursor-pointer"
                onClick={() => handleSortChange(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShopInfoBar;
