import arrow from "../assets/Arrow down.png";

const ShopInfoBar = () => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="font-satoshi font-bold text-[32px]">Category</h3>
      <div className="flex items-center pt-2">
        {" "}
        <p className=" pt-2  font-satoshi opacity-60">
          Showing 1-10 of 100 Products <span className="pl-1">Sort by:</span>
        </p>
        <span className="pt-2 pl-2 cursor-pointer flex items-center font-satoshi font-bold">
          Most Popular{" "}
          <img
            src={arrow}
            width={16}
            height={16}
            alt="arrow"
            className="pl-[3px]"
          />
        </span>
      </div>
    </div>
  );
};

export default ShopInfoBar;
