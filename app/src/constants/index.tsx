import arrowDown from "../assets/Arrow down.png";

export const navLinks = [
  {
    href: "/",
    label: (
      <span>
        Shop <img src={arrowDown} alt="Arrow Down" className="inline w-4 h-4" />
      </span>
    ),
  },
  { href: "#onSale", label: "On Sale" },
  { href: "#newArrivals", label: "New Arrivals" },
  { href: "#brands", label: "Brands" },
];
