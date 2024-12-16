import BrandBar from "../sections/BrandBar";
import Category from "../sections/Category";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";

import Newsletter from "../sections/Newsletter";
import Testimonials from "../sections/Testimonials";
import TopRating from "../sections/TopRating";

const HomePage = () => {
  //
  ////UI
  return (
    <main className="max-container">
      <Hero />
      <BrandBar />
      <TopRating />
      <Category />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default HomePage;
