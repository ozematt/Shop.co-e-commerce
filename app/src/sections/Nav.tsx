import { navLinks } from "../constants";
import hamburger from "../assets/Hamburger.svg";
import lupeIcon from "../assets/Lupe_icon.png";
import arrow from "../assets/Arrow down.png";
import { useLocation, useNavigate } from "react-router";
import UserIcon from "../components/UserIcon";
import CartIcon from "../components/CartIcon";
import HamburgerMenu from "../components/HamburgerMenu";

const Nav = () => {
  //
  ////DATA
  const navigate = useNavigate();
  const location = useLocation();

  ////LOGIC

  ////UI
  return (
    <nav className="max-container flex h-[96px] items-center px-4 max-[838px]:justify-between sm:px-[100px]">
      <div className="flex items-center">
        {" "}
        <HamburgerMenu />
        <a
          href="/"
          className="mb-[7px] font-integralCFBold text-[25px] sm:text-[32px]"
        >
          shop.co
        </a>
      </div>

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

      <input
        type="text"
        placeholder=" Search for products..."
        className="ml-[40px] mt-1 hidden h-[48px] w-full max-w-[577px] rounded-full bg-grayBG bg-lupe-icon bg-[center_left_1.5rem] bg-no-repeat pl-[57px] focus:outline-none focus:ring-1 focus:ring-black min-[838px]:block"
      />

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
