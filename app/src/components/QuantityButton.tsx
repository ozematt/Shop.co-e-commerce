// import { useState } from "react";
import minus from "../assets/Minus.svg";
import plus from "../assets/Plus.svg";

type QuantityButtonProps = {
  onDecrement: () => void;
  onIncrement: () => void;
  quantity: number;
};

const QuantityButton = ({
  onDecrement,
  onIncrement,
  quantity,
}: QuantityButtonProps) => {
  //
  ////UI
  return (
    <button className="flex h-full w-full max-w-[110px] items-center justify-between rounded-full bg-grayBG px-4 font-satoshi font-medium max-md:text-sm md:max-w-[170px] md:px-6">
      <img
        src={minus}
        alt="minus"
        width={20}
        height={20}
        onClick={onDecrement}
        className="max-md:scale-75"
      />
      <span className="">{quantity}</span>
      <img
        src={plus}
        alt="plus"
        width={20}
        height={20}
        onClick={onIncrement}
        className="max-md:scale-75"
      />
    </button>
  );
};

export default QuantityButton;
