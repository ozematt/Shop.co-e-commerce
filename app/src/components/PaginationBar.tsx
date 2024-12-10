import { useNavigate } from "react-router-dom";
import arrowLeft from "../assets/Arrow-left.png";
import arrowRight from "../assets/Arrow-right.png";
import { useState } from "react";
import { generatePagination } from "../lib/helpers/generatePagination";

type PaginationBarProps = {
  total: number;
  page: number;
};

const PaginationBar = ({ total, page }: PaginationBarProps) => {
  //
  ////DATA
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(page); //local selected page number

  const items = Math.ceil(total / 9); //numbers of pages
  const pageNumbers = generatePagination(page, items); // dynamically created table of page numbers

  ////LOGIC
  const handleSelectedPageNumber = (number: number) => {
    navigate(`?page=${number}`);
    setPageNumber(number);
  };

  const handlePrevious = () => {
    const newPage = Math.max(pageNumber - 1, 1); //prevent exceeding the minimum number of pages
    setPageNumber(newPage); //set new page number in local state
    navigate(`?page=${newPage}`); // upload new page to url, so Shop component can use it
  };

  const handleNext = () => {
    const newPage = Math.min(pageNumber + 1, items); //prevent exceeding the maximum number of pages
    setPageNumber(newPage); //set new page number in local state
    navigate(`?page=${newPage}`); // upload new page to url, so Shop component can use it
  };

  ////UI
  return (
    <div className="flex justify-between mt-[20px]">
      <button
        onClick={handlePrevious}
        className="font-satoshi font-medium text-sm flex items-center py-2 px-[14px] ring-1 ring-black ring-opacity-20 rounded-lg hover:scale-95 active:scale-105 transition ease-in-out duration-200"
      >
        <img src={arrowLeft} alt="arrow left" className="pr-3" />
        Previous
      </button>

      <div className="space-x-2 mx-auto hidden md:block">
        {pageNumbers.map((number, index) => (
          <button
            key={index}
            onClick={() =>
              number !== "..." && handleSelectedPageNumber(Number(number))
            }
            className="w-[40px] h-[40px] font-satoshi font-medium text-xs md:text-sm rounded-[8px] opacity-50 hover:opacity-100 hover:bg-grayBG "
            style={{
              ...(number === pageNumber
                ? { background: "#f0f0f0", opacity: "100%" }
                : {}),
              ...(number === "..."
                ? { background: "none", cursor: "auto" }
                : {}),
            }}
          >
            {number}
          </button>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="font-satoshi font-medium text-sm flex items-center py-5 md:py-2 px-[14px] ring-1 ring-black ring-opacity-20 rounded-lg hover:scale-95  active:scale-105 transition ease-in-out duration-200"
      >
        {" "}
        Next
        <img src={arrowRight} alt="" className="pl-3" />
      </button>
    </div>
  );
};

export default PaginationBar;
