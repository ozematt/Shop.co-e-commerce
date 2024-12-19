import { useEffect, useState } from "react";

type UseDiscountProps = {
  discountPercentage: number;
  roundedPrice: number;
};

const useDiscount = ({
  discountPercentage,
  roundedPrice,
}: UseDiscountProps) => {
  //
  ////DATA
  const [newPrice, setNewPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  ////LOGIC
  useEffect(() => {
    if (discountPercentage >= 15 && discountPercentage <= 20) {
      const lowPrice = roundedPrice * 0.8;
      setDiscount(20);
      setNewPrice(Math.round(lowPrice));
      return;
    }
    if (discountPercentage <= 10 && discountPercentage < 15) {
      const lowPrice = roundedPrice * 0.9;
      setDiscount(10);
      setNewPrice(Math.round(lowPrice));
      return;
    }
    setNewPrice(roundedPrice);
  }, [discountPercentage, roundedPrice]);

  return { newPrice, discount };
};

export default useDiscount;
