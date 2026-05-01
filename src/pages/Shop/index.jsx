import React, { useState } from "react";
import AppLayout from "../../components/AppLayout";
import Breadcrumb from "../../components/Breadcrumb";
import ShopFilter from "../../components/ShopFilter";
import ShopProducts from "../../components/ShopProducts";

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
    <AppLayout>
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
    </AppLayout>
  );
};

export default Shop;
