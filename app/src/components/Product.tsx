import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppDispatch, useAppDispatch } from "../redux/store";
import { addCategoryName } from "../redux/productsSlice";
import useDiscount from "../lib/hooks/useDiscount";

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
  id,
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

  //custom hook
  const { newPrice, discount } = useDiscount({ discountPercentage, price });

  ////LOGIC
  const handleProductClick = () => {
    navigate(`/shop/${category}/${title}?id=${id}`);
    dispatch(addCategoryName(category));
  };
  ////UI
  return (
    <div
      onClick={handleProductClick}
      className="h-[400px] cursor-pointer sm:h-[408px]"
    >
      <div className="h-[304px] w-full rounded-[20px] bg-grayBG sm:h-[298px] sm:w-[295px]">
        <img
          src={images[0]}
          alt={title}
          className="h-full w-full object-contain"
        />
      </div>
      <p className="w-full max-w-[295px] pt-4 font-satoshi text-xl font-bold">
        {title.length > 25 ? title.slice(0, 25) + "..." : title}
      </p>
      <div className="flex pt-2">
        <Rating
          defaultValue={Math.round(rating * 2) / 2}
          precision={0.5}
          readOnly
        />{" "}
        <p className="pl-2 pt-1 font-satoshi text-sm">
          {Math.round(rating * 2) / 2}
          <span className="opacity-50">/5</span>
        </p>
      </div>

      <div className="flex items-center gap-[2px] pt-2 font-satoshi text-2xl font-bold">
        {" "}
        ${newPrice}
        {discount && (
          <>
            <span className="mx-[-9px] scale-[0.65] line-through opacity-30">
              ${price}
            </span>
            <div className="h-[28px] w-[58px] rounded-[62px] bg-red-500 bg-opacity-10 py-[6.5px] text-center font-satoshi text-xs font-medium text-red-500">
              -{discount}%
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
