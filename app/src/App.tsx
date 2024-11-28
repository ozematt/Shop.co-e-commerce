import BrandBar from "./sections/BrandBar";
import Category from "./sections/Category";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import NewArrivals from "./sections/NewArrivals";
import Newsletter from "./sections/Newsletter";
import Testimonials from "./sections/Testimonials";
import TopBar from "./sections/TopBar";
import TopSelling from "./sections/TopSelling";

function App() {
  return (
    <main className="max-container">
      <TopBar />
      <Nav />
      <Hero />
      <BrandBar />
      <NewArrivals />
      <TopSelling />
      <Category />
      <Testimonials />
      <Newsletter />
      <Footer />
      <h1>Hello</h1>
    </main>
  );
}

export default App;
