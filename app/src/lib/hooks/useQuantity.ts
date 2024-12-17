import { useState } from "react";

type UseQuantityProps = {
  stock: number;
};

const useQuantity = ({ stock }: UseQuantityProps) => {
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

  return { quantity, handleQuantityIncrement, handleQuantityDecrement };
};

export default useQuantity;
