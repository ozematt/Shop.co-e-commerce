import { navLinks } from "../constants";
import cartIcon from "../assets/Cart.png";
import userIcon from "../assets/Avatar.png";

const Nav = () => {
  return (
    <nav className="px-[100px] flex items-center h-[96px]">
      <div className="font-integralCFBold text-[32px]">
        {" "}
        <a href="/">shop.co</a>{" "}
      </div>
      <ul className="flex justify-center items-center gap-[24px] pl-[40px] pt-2 font-satoshi font-normal">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:opacity-60">
              {link.label}{" "}
            </a>
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder=" Search for products..."
        className="w-full max-w-[577px] h-[48px] ml-[40px] mt-1 pl-[57px] rounded-full bg-grayBG bg-lupe-icon bg-no-repeat bg-[center_left_1.5rem]"
      />
      <div className="flex items-center gap-[14px] ml-[40px]">
        <img
          src={cartIcon}
          alt="cart icon"
          className="cursor-pointer hover:opacity-60"
        />
        <img
          src={userIcon}
          alt="user icon"
          className="cursor-pointer hover:opacity-60"
        />
      </div>
    </nav>
  );
};

export default Nav;
