import { navLinks } from "../constants";
import { lupeIcon, arrow } from "../assets";
import { useLocation, useNavigate } from "react-router";
import { UserIcon, CartIcon, HamburgerMenu } from "../components";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchProducts, { ProductsFetchedData } from "../api/queries/products";

const Nav = () => {
  //
  ////DATA
  const navigate = useNavigate();
  const location = useLocation();

  const [searchValue, setSearchValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchValue]);

  //fetch products date
  const { data } = useQuery<ProductsFetchedData>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  //creating products list for search engine
  const searchData =
    data?.products.map((product) => ({
      id: product.id,
      title: product.title,
    })) || [];

  console.log(searchData);

  ////UI
  return (
    <nav className="max-container flex h-[96px] items-center px-4 max-[838px]:justify-between sm:px-[100px]">
      <div className="flex items-center">
        {" "}
        <HamburgerMenu />
        {/* Logo */}
        <a
          href="/"
          className="mb-[7px] font-integralCFBold text-[25px] sm:text-[32px]"
        >
          shop.co
        </a>
      </div>

      {/* Nav Links */}
      <ul className="flex min-w-[390px] items-center justify-center gap-[24px] pl-[40px] font-satoshi font-normal max-[1192px]:hidden">
        <li className="flex items-center py-3">
          <button
            onClick={() => navigate("/shop")}
            className="pr-1 hover:opacity-60"
          >
            Shop
          </button>
          {location.pathname.includes("shop") ? (
            <img src={arrow} alt="arrow" />
          ) : (
            <img src={arrow} alt="arrow" className="rotate-180" />
          )}
        </li>
        {navLinks.map((link, index) => (
          <li key={index} className="py-3">
            <a href={link.href} className="hover:opacity-60">
              {link.label}{" "}
            </a>
          </li>
        ))}
      </ul>

      {/* Search */}
      <input
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder=" Search for products..."
        className="ml-[40px] mt-1 hidden h-[48px] w-full max-w-[577px] rounded-full bg-grayBG bg-lupe-icon bg-[center_left_1.5rem] bg-no-repeat pl-[57px] focus:outline-none focus:ring-1 focus:ring-black min-[838px]:block"
      />

      {/* Icons */}
      <div className="relative ml-[40px] flex min-w-[62px] items-center gap-[14px]">
        <img
          src={lupeIcon}
          alt="lupe icon"
          width={24}
          height={24}
          className="hidden cursor-pointer hover:opacity-60 max-[837px]:block"
        />
        <CartIcon />
        <UserIcon />
      </div>
    </nav>
  );
};

export default Nav;
