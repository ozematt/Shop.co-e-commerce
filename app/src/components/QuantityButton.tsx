import { useState } from "react";
import minus from "../assets/Minus.png";
import plus from "../assets/Plus.png";

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
    <button className="flex w-full max-w-[170px] justify-between rounded-full bg-grayBG px-6 py-3 font-satoshi font-medium">
      <img
        src={minus}
        alt="minus"
        width={24}
        height={24}
        onClick={handleQuantityDecrement}
      />
      {quantity}
      <img
        src={plus}
        alt="plus"
        width={24}
        height={24}
        onClick={handleQuantityIncrement}
      />
    </button>
  );
};

export default QuantityButton;
