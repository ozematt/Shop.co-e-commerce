import { useNavigate, useSearchParams } from "react-router-dom";
import arrowLeft from "../assets/Arrow-left.png";
import arrowRight from "../assets/Arrow-right.png";
import { useState } from "react";
import { generatePagination } from "../lib/helpers/generatePagination";

type PaginationBarProps = {
  total: number;
  page: number;
  onClick: (number: number) => void;
};

const PaginationBar = ({ total, page, onClick }: PaginationBarProps) => {
  //
  ////DATA
  //   const [searchParams] = useSearchParams();
  //   const actualPage = searchParams.get("page");

  const [pageNumber, setPageNumber] = useState(page || 1);

  //numbers of page
  const items = Math.ceil(total / 9);
  const pageNumbers = generatePagination(page, items);

  const navigate = useNavigate();

  ////LOGIC
  //   const handlePageNumber = (number: number | string) => {
  //     navigate(`?page=${number}`);
  //   };

  const handlePrevious = () => {
    setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1);
    navigate(`?page=${pageNumber}`);
  };

  const handleNext = () => {
    setPageNumber(!(items <= pageNumber) ? pageNumber + 1 : pageNumber);
    navigate(`?page=${pageNumber}`);
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
            // onClick={() => number !== "..." && handlePageNumber(number)}
            className="w-[40px] h-[40px] font-satoshi font-medium text-sm rounded-[8px] opacity-50 hover:opacity-100 focus:opacity-100 hover:bg-grayBG focus:bg-grayBG"
            style={{
              ...(number === page
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
