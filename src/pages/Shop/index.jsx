import React, { useState, useEffect } from "react";
import AppLayout from "../../components/AppLayout";
import Breadcrumb from "../../components/Breadcrumb";
import ShopFilter from "../../components/ShopFilter";
import ShopProducts from "../../components/ShopProducts";
import { PiSlidersHorizontal } from "react-icons/pi";

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

  // Control filter visibility and responsive behavior
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // default: open on desktop, closed on mobile
  useEffect(() => {
    setIsFiltersOpen(isDesktop);
  }, [isDesktop]);

  return (
    <AppLayout>
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Shop Section */}
      <section className="py-10">
        <div className="container">
          <div className="mb-4 flex items-center ">
            <button
              onClick={() => setIsFiltersOpen((v) => !v)}
              className="flex justify-center items-center gap-1 px-6 py-2 bg-(--main-color) text-white rounded-md font-semibold hover:bg-green-700 transition-colors cursor-pointer"
            >
              <PiSlidersHorizontal />
              <span>Filters</span>
            </button>
          </div>
          {/* Filter & Products */}

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar (desktop) or overlay (mobile) */}
            {isFiltersOpen && isDesktop && (
              <div className="w-full lg:w-80">
                <ShopFilter onFilterChange={handleFilterChange} />
              </div>
            )}
            <div className="flex-1">
              {/* Filters toggle button (visible on all screens) */}
              <ShopProducts filters={filters} />
            </div>
          </div>

          {/* Mobile overlay drawer for filters */}
          {isFiltersOpen && !isDesktop && (
            <div className="fixed inset-0 z-50 flex">
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setIsFiltersOpen(false)}
              />
              <div className="relative bg-white w-80 max-w-full h-full p-4 overflow-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <button
                    onClick={() => setIsFiltersOpen(false)}
                    className="px-3 py-1 text-sm rounded bg-gray-100"
                  >
                    Close
                  </button>
                </div>
                <ShopFilter onFilterChange={handleFilterChange} />
              </div>
            </div>
          )}
        </div>
      </section>
    </AppLayout>
  );
};

export default Shop;
