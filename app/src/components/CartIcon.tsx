import { useSelector } from "react-redux";
import cartIcon from "../assets/Cart.svg";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  //
  const navigate = useNavigate();
  const auth = localStorage.getItem("user") || undefined;
  const quantity = useSelector((state: RootState) => state.cart.itemsInCart);

  const handleCart = () => {
    if (!auth) {
      navigate("/login");
      return;
    }
    navigate("/cart");
  };
  return (
    <div className="relative">
      <img
        src={cartIcon}
        alt="cart icon"
        width={24}
        height={24}
        onClick={handleCart}
        className="cursor-pointer hover:opacity-60"
      />
      {quantity > 0 && (
        <>
          <div className="absolute right-[-7px] top-[-2px] h-[17px] w-[17px] rounded-full bg-orange-400 ring-2 ring-white" />
          <p className="absolute right-[-2px] top-[-1.5px] font-satoshi text-[11px] font-medium text-black">
            {quantity}
          </p>
        </>
      )}
    </div>
  );
};

export default CartIcon;
