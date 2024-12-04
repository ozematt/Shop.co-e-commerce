import { Rating } from "@mui/material";

const Product = () => {
  return (
    <div>
      <div className="bg-grayBG w-[295px] h-[298px] rounded-[20px]">img</div>
      <p className="font-satoshi font-bold text-xl pt-4">Name</p>
      <div className="flex pt-2">
        <Rating /> <p className="font-satoshi text-sm pl-2 pt-1">5/5</p>
      </div>

      <p className="font-satoshi font-bold text-2xl pt-2">Price</p>
    </div>
  );
};

export default Product;
