import arrowDown from "../assets/Arrow down.png";
import CK from "../assets/CalvinKlein.png";
import nike from "../assets/Nike.png";
import delonghi from "../assets/Delonghi.png";
import alpine from "../assets/Alpine.png";
import redBull from "../assets/Red-Bull.png";
import samsung from "../assets/Samsung.png";

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

export const brands = [
  { name: "calvin klein", img: CK },
  { name: "nike", img: nike },
  { name: "delonghi", img: delonghi },
  { name: "red-bull", img: redBull },
  { name: "alpine", img: alpine },
  { name: "samsung", img: samsung },
];
