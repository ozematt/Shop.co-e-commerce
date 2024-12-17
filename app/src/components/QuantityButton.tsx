// import { useState } from "react";
import { useEffect } from "react";
import minus from "../assets/Minus.svg";
import plus from "../assets/Plus.svg";
import useQuantity from "../lib/hooks/useQuantity";

type QuantityButtonProps = {
  stock: number;
  onQuantityChange: (quantity: number) => void;
};

const QuantityButton = ({ stock, onQuantityChange }: QuantityButtonProps) => {
  //
  ////DATA
  const { quantity, handleQuantityIncrement, handleQuantityDecrement } =
    useQuantity({ stock });

  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity, onQuantityChange]);

  console.log("Button:", quantity);

  ////UI
  return (
    <button className="flex w-full max-w-[110px] justify-between rounded-full bg-grayBG px-4 py-4 font-satoshi font-medium max-md:text-sm md:max-w-[170px] md:px-6">
      <img
        src={minus}
        alt="minus"
        width={20}
        height={20}
        onClick={handleQuantityDecrement}
        className="max-md:scale-75"
      />
      <span className="">{quantity}</span>

      <img
        src={plus}
        alt="plus"
        width={20}
        height={20}
        onClick={handleQuantityIncrement}
        className="max-md:scale-75"
      />
    </button>
  );
};

export default QuantityButton;
