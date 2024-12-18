import deleteIcon from "../assets/Delete.svg";
import { CartProduct } from "../redux/cartSlice";
import QuantityButton from "./QuantityButton";

const CartItem = ({
  title,
  image,
  price,
  quantity,
  shippingTime,
}: CartProduct) => {
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
            <p className="font-satoshi text-2xl font-bold">$ {price}</p>
          </div>
        </div>

        <div className="flex w-full max-w-[126px] flex-col items-end justify-between">
          <img src={deleteIcon} alt="" />
          <div className="h-full max-h-[44px] w-full max-w-[126px]">
            <QuantityButton stock={quantity} />
          </div>
        </div>
      </div>
      <div className="mx-[24px] mt-[24px] border-b-[1px]" />
    </>
  );
};

export default CartItem;
