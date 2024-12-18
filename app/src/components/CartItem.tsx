// import { useCallback } from "react";
import deleteIcon from "../assets/Delete.svg";
import { CartProduct, removeFromCart, updateCart } from "../redux/cartSlice";
import { AppDispatch, RootState, useAppDispatch } from "../redux/store";
import minus from "../assets/Minus.svg";
import plus from "../assets/Plus.svg";

const CartItem = ({
  id,
  title,
  image,
  price,
  purchaseTotal,
  quantity,
  discountPercentage,
  shippingTime,
}: CartProduct) => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();

  ////LOGIC
  // increment item quantity
  const handleIncrementItemQuantity = (id: number, quantity: number) => {
    dispatch(
      updateCart({
        id: id,
        changes: { quantity: quantity + 1 },
      }),
    );
  };

  // decrement item quantity
  const handleDecrementItemQuantity = (id: number, quantity: number) => {
    if (quantity > 1) {
      dispatch(
        updateCart({
          id: id,
          changes: { quantity: quantity - 1 },
        }),
      );
    } else {
      dispatch(removeFromCart(id));
    }
  };

  // remove item
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <div className="flex justify-between px-[24px] pt-[24px]">
        {/* IMG */}
        <div className="flex">
          <img
            src={image}
            className="h-[124px] w-[124px] rounded-lg bg-grayBG object-contain"
          />
          {/* product details */}

          <div className="flex flex-col justify-between pl-[16px]">
            {" "}
            <div>
              <h6 className="font-satoshi text-xl font-bold">{title}</h6>
              <p className="font-satoshi text-sm">
                Shipping time:{" "}
                <span className="font-satoshi text-sm opacity-60">
                  {shippingTime}
                </span>{" "}
              </p>
            </div>
            <p className="font-satoshi text-2xl font-bold">
              $ {purchaseTotal}{" "}
              <span className="pl-3 text-sm font-medium opacity-30">
                For one: ${price}
              </span>
            </p>
          </div>
        </div>

        <div className="flex w-full max-w-[126px] flex-col items-end justify-between">
          <img
            src={deleteIcon}
            alt=""
            onClick={() => handleRemoveFromCart(id)}
            className="cursor-pointer"
          />
          <div className="h-full max-h-[44px] w-full max-w-[126px]">
            <button className="flex h-full w-full max-w-[110px] items-center justify-between rounded-full bg-grayBG px-4 font-satoshi font-medium max-md:text-sm md:max-w-[170px] md:px-6">
              <img
                src={minus}
                alt="minus"
                width={20}
                height={20}
                onClick={() => handleDecrementItemQuantity(id, quantity)}
                className="max-md:scale-75"
              />
              <span className="">{quantity}</span>
              <img
                src={plus}
                alt="plus"
                width={20}
                height={20}
                onClick={() => handleIncrementItemQuantity(id, quantity)}
                className="max-md:scale-75"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="mx-[24px] mt-[24px] border-b-[1px]" />
    </>
  );
};

export default CartItem;
