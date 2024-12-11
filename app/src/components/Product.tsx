import { Rating } from "@mui/material";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { AppDispatch, useAppDispatch } from "../redux/store";
import { addCategoryName } from "../redux/productsSlice";

export type ProductProps = {
  id: number;
  title: string;
  price: number;
  rating: number;
  images: string[];
  discountPercentage: number;
  category: string;
  onClick?: () => void;
};

const Product = ({
  title,
  price,
  rating,
  images,
  discountPercentage,
  category,
}: ProductProps) => {
  //
  ////DATA
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

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

  const handleProductClick = () => {
    navigate(`/shop/${category}/${title}`);
    dispatch(addCategoryName(category));
  };
  ////UI
  return (
    <div onClick={handleProductClick} className="h-[400px] sm:h-[408px]">
      <div className="bg-grayBG w-full h-[304px] sm:w-[295px] sm:h-[298px] rounded-[20px] ">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-contain "
        />
      </div>
      <p className="font-satoshi font-bold text-xl pt-4 w-full max-w-[295px]">
        {title.length > 25 ? title.slice(0, 25) + "..." : title}
      </p>
      <div className="flex pt-2">
        <Rating
          defaultValue={Math.round(rating * 2) / 2}
          precision={0.5}
          readOnly
        />{" "}
        <p className="font-satoshi text-sm pl-2 pt-1">
          {Math.round(rating * 2) / 2}
          <span className="opacity-50">/5</span>
        </p>
      </div>

      <div className="flex items-center font-satoshi font-bold text-2xl pt-2 gap-[2px]">
        {" "}
        ${newPrice}
        {discount && (
          <>
            <span className="opacity-30 line-through mx-[-9px] scale-[0.65]">
              ${price}
            </span>
            <div className="text-center py-[6.5px] w-[58px] h-[28px] rounded-[62px] bg-red-500 bg-opacity-10 font-satoshi font-medium text-xs text-red-500">
              -{discount}%
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
