import { useLocation, useNavigate } from "react-router";
import arrow from "../assets/Arrow down.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Breadcrumbs = () => {
  //
  ////DATA
  const navigate = useNavigate();
  const location = useLocation();

  //params extract from url
  const { category, product } = useParams();

  //global state
  const categoryName = useSelector(
    (state: RootState) => state.products.categoryName
  );

  ////UI
  return (
    <div className="flex items-center opacity-60 pt-6 max-sm:text-[14px]">
      <p
        className="font-satoshi pr-2 leading-none cursor-pointer hover:opacity-70"
        onClick={() => navigate("/")}
      >
        Home
      </p>
      <img src={arrow} width={16} alt="arrow" className="-rotate-90" />
      <p
        className="font-satoshi px-2 leading-none cursor-pointer hover:opacity-70"
        onClick={() => navigate("/shop")}
      >
        {location.pathname === "/shop" ? (
          <strong onClick={() => navigate("/shop")}>Shop</strong>
        ) : (
          "Shop"
        )}
      </p>
      {category && (
        <img src={arrow} width={16} alt="arrow" className="-rotate-90" />
      )}

      <p
        className="font-satoshi px-2 leading-none cursor-pointer hover:opacity-70"
        onClick={() => navigate(`/shop/${category}`)}
      >
        {categoryName && product ? (
          <span>{categoryName}</span>
        ) : (
          <strong>{categoryName}</strong>
        )}
      </p>
      {product && (
        <img src={arrow} width={16} alt="arrow" className="-rotate-90" />
      )}
      <p className="font-satoshi px-2 leading-none ">
        {product && <strong>{product}</strong>}
      </p>
    </div>
  );
};

export default Breadcrumbs;
