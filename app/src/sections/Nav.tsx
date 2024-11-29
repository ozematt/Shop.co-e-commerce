import { navLinks } from "../constants";
import cartIcon from "../assets/Cart.png";
import userIcon from "../assets/Avatar.png";
import hamburger from "../assets/Hamburger.png";
import lupeIcon from "../assets/Lupe_icon.png";

const Nav = () => {
  return (
    <nav className="px-4 sm:px-[100px] flex items-center max-[838px]:justify-between h-[96px]">
      <div className="flex items-center">
        {" "}
        <img
          src={hamburger}
          alt="hamburger menu"
          width={24}
          height={24}
          className="mr-4 min-w-[24px] sm:min-w-[30px] min-[1192px]:hidden cursor-pointer hover:opacity-60"
        />
        <a
          href="/"
          className="font-integralCFBold text-[25px] sm:text-[32px] mb-[7px]"
        >
          shop.co
        </a>
      </div>

      <ul className="max-[1192px]:hidden flex justify-center items-center gap-[24px] min-w-[390px] pl-[40px]  font-satoshi font-normal">
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
        className="hidden min-[838px]:block w-full max-w-[577px] h-[48px] ml-[40px] mt-1 pl-[57px] rounded-full bg-grayBG bg-lupe-icon bg-no-repeat bg-[center_left_1.5rem]"
      />
      <div className="flex items-center gap-[14px] ml-[40px] min-w-[62px]">
        <img
          src={lupeIcon}
          alt="lupe icon"
          width={24}
          height={24}
          className="hidden max-[837px]:block cursor-pointer hover:opacity-60"
        />
        <img
          src={cartIcon}
          alt="cart icon"
          width={24}
          height={24}
          className="cursor-pointer hover:opacity-60"
        />
        <img
          src={userIcon}
          alt="user icon"
          width={24}
          height={24}
          className="cursor-pointer hover:opacity-60"
        />
      </div>
    </nav>
  );
};

export default Nav;
