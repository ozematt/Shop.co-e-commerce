import arrowDown from "../assets/Arrow down.png";
import CK from "../assets/CalvinKlein.png";
import nike from "../assets/Nike.png";
import delonghi from "../assets/Delonghi.png";
import alpine from "../assets/Alpine.png";
import redBull from "../assets/Red-Bull.png";
import samsung from "../assets/Samsung.png";

import twitter from "../assets/Twitter.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import github from "../assets/Github.png";

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

export const comments = [
  {
    rating: 5,
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations",
  },
  {
    rating: 5,
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    rating: 5,
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    rating: 4,
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    rating: 3,
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    rating: 5,
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations",
  },
  {
    rating: 5,
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    rating: 5,
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    rating: 4,
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    rating: 3,
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

export const footerData = [
  {
    title: "Company",
    items: ["About", "Features", "Works", "Career"],
  },
  {
    title: "Help",
    items: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "FAQ",
    items: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    title: "Resource",
    items: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];

export const socials = [
  { name: "twitter", iconIMG: twitter },
  { name: "facebook", iconIMG: facebook },
  { name: "instagram", iconIMG: instagram },
  { name: "github", iconIMG: github },
];
