import { useLocation, useNavigate } from "react-router";
import arrow from "../assets/Arrow down.png";
import { useParams } from "react-router-dom";

const Breadcrumbs = () => {
  //
  ////DATA
  const navigate = useNavigate();

  const location = useLocation();
  const { category } = useParams();

  return (
    <div className="flex items-center opacity-60 pt-6">
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
        {location.pathname === "/shop" ? <strong>Shop</strong> : "Shop"}
      </p>
      {category && (
        <img src={arrow} width={16} alt="arrow" className="-rotate-90" />
      )}

      <p
        className="font-satoshi px-2 leading-none cursor-pointer hover:opacity-70"
        onClick={() => navigate(`/shop/${category}`)}
      >
        {location.pathname === `/shop/${category}` && (
          <strong>
            {category?.charAt(0).toUpperCase()}
            {category?.slice(1)}
          </strong>
        )}
      </p>
    </div>
  );
};

export default Breadcrumbs;
