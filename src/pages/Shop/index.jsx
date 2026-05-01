import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import MenuNav from "../../components/Navbar/MenuNav";
import Breadcrumb from "../../components/Breadcrumb";
import ShopFilter from "../../components/ShopFilter";
import ShopProducts from "../../components/ShopProducts";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

const Shop = () => {
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 100],
    rating: [],
    brand: [],
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-white">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <MenuNav isContainer={true} />

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Shop Section */}
      <section className="py-10 bg-gray-50">
        <div className="container">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Shop</h1>
            <p className="text-gray-600 mt-2">
              Discover our wide selection of fresh and quality products
            </p>
          </div>

          {/* Filter & Products */}
          <div className="flex flex-col lg:flex-row gap-6">
            <ShopFilter onFilterChange={handleFilterChange} />
            <ShopProducts filters={filters} />
          </div>
        </div>
      </section>

      {/* Newsletter & Footer */}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Shop;
