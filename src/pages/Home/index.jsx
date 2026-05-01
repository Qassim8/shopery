import AddsSection from "../../components/AddsSection";
import BestDeals from "../../components/BestDeals";
import BrandLogos from "../../components/BrandsSection";
import FeaturedProducts from "../../components/FeaturedProducts";
import Featuers from "../../components/FeaturesSection";
import Footer from "../../components/Footer";
import HotDeals from "../../components/HotDeals";
import InstagramFeed from "../../components/InstagramFeed";
import Navbar from "../../components/Navbar";
import MenuNav from "../../components/Navbar/MenuNav";
import Newsletter from "../../components/Newsletter";
import PopularCtegories from "../../components/PopularCategorySection";
import PopularProducts from "../../components/PopularProducts";
import TestimonialsSection from "../../components/TestimonialsSection";
import image from "/Discount-Bannar.png";

const Home = () => {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <MenuNav isContainer={true} />
      <AddsSection />
      <Featuers />
      <PopularCtegories />
      <PopularProducts />
      <BestDeals />
      <HotDeals />
      <section className="h-[60vh] py-10">
        <div className="container h-full">
          <img src={image} alt="" srcset="" className="h-full w-full" />
        </div>
      </section>
      <FeaturedProducts />
      <TestimonialsSection />
      <BrandLogos />
      <InstagramFeed />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
