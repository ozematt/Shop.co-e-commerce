import { useQuery } from "@tanstack/react-query";
import BrandBar from "../sections/BrandBar";
import Category from "../sections/Category";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import NewArrivals from "../sections/NewArrivals";
import Newsletter from "../sections/Newsletter";
import Testimonials from "../sections/Testimonials";
import TopSelling from "../sections/TopSelling";
// import fetchProducts, { ProductsFetchedData } from "../api/queries/products";
// import { useEffect } from "react";

// import { RootState, AppDispatch, useAppDispatch } from "../redux/store";
// import { useSelector } from "react-redux";
// import { addProducts } from "../redux/productsSlice";

const HomePage = () => {
  return (
    <main className="max-container">
      <Hero />
      <BrandBar />
      <NewArrivals />
      <TopSelling />
      <Category />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default HomePage;
