import { useState } from "react";
import minus from "../assets/Minus.svg";
import plus from "../assets/Plus.svg";

type QuantityButtonProps = {
  stock: number;
};

const QuantityButton = ({ stock }: QuantityButtonProps) => {
  //
  ////DATA
  const [quantity, setQuantity] = useState(1);

  ////LOGIC
  const handleQuantityIncrement = () => {
    if (quantity >= 1 && quantity < stock) {
      setQuantity(quantity + 1);
    }
    return;
  };
  const handleQuantityDecrement = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  };

  ////UI
  return (
    <button className="flex w-full max-w-[110px] justify-between rounded-full bg-grayBG px-4 py-3 font-satoshi font-medium max-md:text-sm md:max-w-[170px] md:px-6">
      <img
        src={minus}
        alt="minus"
        width={24}
        height={24}
        onClick={handleQuantityDecrement}
        className="max-md:scale-75"
      />
      {quantity}
      <img
        src={plus}
        alt="plus"
        width={24}
        height={24}
        onClick={handleQuantityIncrement}
        className="max-md:scale-75"
      />
    </button>
  );
};

export default QuantityButton;
