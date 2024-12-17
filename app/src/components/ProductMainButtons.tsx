import { Product } from "../api/queries/products";
import { addToCart } from "../redux/cartSlice";
import { AppDispatch, useAppDispatch } from "../redux/store";
import QuantityButton from "./QuantityButton";
import { useState } from "react";

const ProductMainButtons = ({
  shippingInformation,
  id,
  title,
  images,
  price,
  stock,
}: Product) => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();

  //product quantity
  const [quantity, setQuantity] = useState(1);

  //handle data send to cart
  const handleAddToCart = () => {
    const modifiedProductData = {
      id: id,
      title: title,
      image: images[0],
      price: price,
      quantity: quantity,
      shippingTime: shippingInformation,
    };
    dispatch(addToCart(modifiedProductData));
  };

  ////UI
  return (
    <div>
      <div className="my-6 border-b-2" />
      <p className="font-satoshi opacity-60">Shipping time:</p>
      <button className="mt-[16px] rounded-full bg-grayBG px-6 py-3 font-satoshi font-medium opacity-60 max-md:text-sm">
        {shippingInformation}
      </button>
      <div className="my-6 border-b-2" />
      <div className="flex h-[52px]">
        <QuantityButton stock={stock} onQuantityChange={setQuantity} />
        <button
          type="button"
          onClick={handleAddToCart}
          className="ml-[20px] w-full max-w-[400px] rounded-full bg-black px-6 py-3 font-satoshi font-medium text-white ring-1 hover:scale-95 max-md:text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductMainButtons;
