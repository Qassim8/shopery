import AddsSection from "../../components/AddsSection";
import BestDeals from "../../components/BestDeals";
import BrandLogos from "../../components/BrandsSection";
import FeaturedProducts from "../../components/FeaturedProducts";
import Featuers from "../../components/FeaturesSection";
import HotDeals from "../../components/HotDeals";
import InstagramFeed from "../../components/InstagramFeed";
import PopularCtegories from "../../components/PopularCategorySection";
import PopularProducts from "../../components/PopularProducts";
import TestimonialsSection from "../../components/TestimonialsSection";
import AppLayout from "../../components/AppLayout";
import image from "/Discount-Bannar.png";

const Home = () => {
  return (
    <AppLayout>
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
    </AppLayout>
  );
};

export default Home;
