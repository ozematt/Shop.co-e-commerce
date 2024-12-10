import { useState } from "react";
import arrow from "../assets/Arrow down.png";
import { SortMethod } from "./Shop";

const sortingOptions: SortMethod[] = [
  "Alphabetical",
  "Hightest Price",
  "Lowest Price",
  "Top Rated",
  "Least Rated",
] as const;

type SortingProps = {
  onSelect: (option: string) => void;
};

const Sorting = ({ onSelect }: SortingProps) => {
  const [open, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Alphabetical");

  const handleSortChange = (option: SortMethod) => {
    setSortBy(option);
    setOpen(false);
    onSelect(option);
  };

  return (
    <>
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
    </>
  );
};

export default Sorting;
