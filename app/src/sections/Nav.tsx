import { navLinks } from "../constants";
import { lupeIcon, arrow } from "../assets";
import { useLocation, useNavigate } from "react-router";
import { UserIcon, CartIcon, HamburgerMenu } from "../components";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchProducts, { ProductsFetchedData } from "../api/queries/products";
import useDebounce from "../lib/hooks/useDebounce";
import { AppDispatch, useAppDispatch } from "../redux/store";
import { addCategoryName } from "../redux/productsSlice";
import useRedirectToProduct from "../lib/hooks/useRedirectToProduct";

type FilteredProduct = {
  id: number;
  title: string;
  category: string;
};

const Nav = () => {
  //
  ////DATA
  const navigate = useNavigate();
  const location = useLocation();

  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<
    FilteredProduct[] | []
  >([]);

  const { debouncedValue } = useDebounce(searchValue, 300);

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
      category: product.category,
    })) || [];

  useEffect(() => {
    //field empty - stop
    if (debouncedValue.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    if (searchData.length > 0) {
      const filtered = searchData.filter((product) =>
        product.title.toLowerCase().includes(debouncedValue.toLowerCase()),
      );

      setFilteredProducts(filtered);
    }
  }, [debouncedValue]);

  const { handleProductClick } = useRedirectToProduct();

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
      <div className="relative w-full">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder=" Search for products..."
          className="ml-[40px] mt-1 hidden h-[48px] w-full max-w-[577px] rounded-full bg-grayBG bg-lupe-icon bg-[center_left_1.5rem] bg-no-repeat pl-[57px] focus:outline-none focus:ring-1 focus:ring-black min-[838px]:block"
        />
        <div className="absolute inset-0 left-[60px] top-[53px] z-30 h-[200px] rounded-b-xl bg-grayBG opacity-80 ring-1 ring-black">
          <ul className="font-satoshi">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="cursor-pointer px-9 py-2 hover:bg-grayBG hover:brightness-110"
              >
                {product.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

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
