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
  const [pageNumber, setPageNumber] = useState(page);

  //numbers of page
  const items = Math.ceil(total / 9);
  const pageNumbers = generatePagination(page, items);

  const navigate = useNavigate();

  ////LOGIC
  const handlePageNumber = (number: number) => {
    navigate(`?page=${number}`);
    setPageNumber(number);
  };

  const handlePrevious = () => {
    setPageNumber((prevNumber) => {
      const newPage = prevNumber > 1 ? prevNumber - 1 : prevNumber;
      navigate(`?page=${newPage}`);
      return newPage;
    });
  };

  const handleNext = () => {
    setPageNumber((prevNumber) => {
      const newPage = prevNumber < items ? prevNumber + 1 : prevNumber;
      navigate(`?page=${newPage}`);
      return newPage;
    });
  };

  ////UI
  return (
    <div className="flex justify-between mt-[20px]">
      <button
        onClick={handlePrevious}
        className="font-satoshi font-medium text-sm flex items-center py-2 px-[14px] ring-1 ring-black ring-opacity-20 rounded-lg"
      >
        <img src={arrowLeft} alt="arrow left" className="pr-3" />
        Previous
      </button>

      <div className="space-x-2 mx-auto">
        {pageNumbers.map((number, index) => (
          <button
            key={index}
            onClick={() => number !== "..." && handlePageNumber(Number(number))}
            className="w-[40px] h-[40px] font-satoshi font-medium text-sm rounded-[8px] opacity-50 hover:opacity-100 hover:bg-grayBG "
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
        className="font-satoshi font-medium text-sm flex items-center py-2 px-[14px] ring-1 ring-black ring-opacity-20 rounded-lg"
      >
        {" "}
        Next
        <img src={arrowRight} alt="" className="pl-3" />
      </button>
    </div>
  );
};

export default PaginationBar;
