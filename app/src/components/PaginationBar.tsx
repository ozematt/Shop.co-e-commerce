import arrowLeft from "../assets/Arrow-left.png";
import arrowRight from "../assets/Arrow-right.png";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PaginationBar = () => {
  return (
    <div className="flex justify-between">
      <div className="border-b-2" />
      <button className="font-satoshi font-medium text-sm flex items-center py-2 px-[14px] ring-1 ring-black ring-opacity-20 rounded-lg">
        <img src={arrowLeft} alt="arrow left" className="pr-3" />
        Previous
      </button>

      <div className="space-x-2 mx-auto">
        {numbers.map((number) => (
          <button className="w-[40px] h-[40px] font-satoshi font-medium text-sm rounded-[8px] opacity-50 hover:opacity-100 focus:opacity-100 hover:bg-grayBG focus:bg-grayBG">
            {number}
          </button>
        ))}
      </div>
      <button className="font-satoshi font-medium text-sm flex items-center py-2 px-[14px] ring-1 ring-black ring-opacity-20 rounded-lg">
        {" "}
        Next
        <img src={arrowRight} alt="" className="pl-3" />
      </button>
    </div>
  );
};

export default PaginationBar;
