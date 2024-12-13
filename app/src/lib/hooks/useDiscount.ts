import { useEffect, useState } from "react";

type UseDiscountProps = {
  discountPercentage: number;
  price: number;
};

const useDiscount = ({ discountPercentage, price }: UseDiscountProps) => {
  //
  ////DATA
  const [newPrice, setNewPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  ////LOGIC
  useEffect(() => {
    if (discountPercentage >= 15 && discountPercentage <= 20) {
      const lowPrice = (price * 0.8).toFixed(2);
      setDiscount(20);
      setNewPrice(Number(lowPrice));
      return;
    }
    if (discountPercentage <= 10 && discountPercentage < 15) {
      const lowPrice = (price * 0.9).toFixed(2);
      setDiscount(10);
      setNewPrice(Number(lowPrice));
      return;
    }
    setNewPrice(price);
  }, [discountPercentage, price]);

  return { newPrice, discount };
};

export default useDiscount;
