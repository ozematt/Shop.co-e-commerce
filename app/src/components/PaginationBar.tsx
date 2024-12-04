import { useNavigate } from "react-router-dom";
import arrowLeft from "../assets/Arrow-left.png";
import arrowRight from "../assets/Arrow-right.png";
import { useState } from "react";
// import PaginationBar from './PaginationBar';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type PaginationBarProps = {
  onClick: (number: number) => void;
};

const PaginationBar = ({ onClick }: PaginationBarProps) => {
  const [page, setPage] = useState(0);
  console.log(page);

  //
  ////DATA
  const navigate = useNavigate();

  ////LOGIC
  const handlePageNumber = (number: number) => {
    setPage(number);
    onClick(number);
    navigate(`?page=${number}`);
  };

  const handlePrevious = () => {
    setPage(page === 0 ? page : page - 1);
    onClick(page);
    navigate(`?page=${page}`);
  };

  const handleNext = () => {
    setPage(page + 1);
    onClick(page);
    navigate(`?page=${page}`);
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
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageNumber(number)}
            className="w-[40px] h-[40px] font-satoshi font-medium text-sm rounded-[8px] opacity-50 hover:opacity-100 focus:opacity-100 hover:bg-grayBG focus:bg-grayBG"
            style={
              number === page ? { background: "#f0f0f0", opacity: "100%" } : {}
            }
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
