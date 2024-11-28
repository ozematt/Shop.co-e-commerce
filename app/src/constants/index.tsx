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
] as const;

export const stats = [
  { number: "200+", caption: "International Brands" },
  { number: "2,000+", caption: "Hight-Quality Products" },
  { number: "30,000+", caption: "Happy Customers" },
] as const;
