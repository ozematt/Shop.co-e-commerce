import { useNavigate } from "react-router-dom";
import { Product } from "../api/queries/products";
import { addToCart, selectAllCart } from "../redux/cartSlice";
import { AppDispatch, useAppDispatch } from "../redux/store";
import QuantityButton from "./QuantityButton";
import { useState } from "react";
import useQuantity from "../lib/hooks/useQuantity";
import { useSelector } from "react-redux";

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
  const navigate = useNavigate();

  //product quantity
  // const [quantity, setQuantity] = useState(1);

  const {
    quantity,
    // setQuantity,
    handleQuantityIncrement,
    handleQuantityDecrement,
  } = useQuantity({ stock });

  console.log(quantity);

  const auth = localStorage.getItem("user");

  // console.log(quantity);
  const cart = useSelector(selectAllCart);
  console.log(cart);

  //handle data send to cart
  const handleAddToCart = () => {
    if (auth) {
      const newPrice = Number((price * quantity).toFixed(2));
      const modifiedProductData = {
        id: id,
        title: title,
        image: images[0],
        price: newPrice,
        quantity: quantity,
        stock: stock,
        shippingTime: shippingInformation,
      };
      console.log(modifiedProductData);

      dispatch(addToCart(modifiedProductData)); //add to global state
      // setQuantity(1); //reset quantity display
    } else {
      navigate("/login");
    }
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
        <QuantityButton
          onDecrement={handleQuantityDecrement}
          onIncrement={handleQuantityIncrement}
          quantity={quantity}
        />
        <button
          type="button"
          onClick={handleAddToCart}
          className="ml-[20px] w-full max-w-[400px] rounded-full bg-black px-6 py-3 font-satoshi font-medium text-white ring-1 hover:scale-95 active:scale-100 max-md:text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductMainButtons;
