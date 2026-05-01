import React, { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const ShopFilter = ({ onFilterChange }) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    rating: false,
    brand: false,
  });

  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 100],
    rating: [],
    brand: [],
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (category) => {
    const updated = filters.category.includes(category)
      ? filters.category.filter((c) => c !== category)
      : [...filters.category, category];
    setFilters((prev) => ({ ...prev, category: updated }));
    onFilterChange({ ...filters, category: updated });
  };

  const handlePriceChange = (e) => {
    const updated = [0, parseInt(e.target.value)];
    setFilters((prev) => ({ ...prev, priceRange: updated }));
    onFilterChange({ ...filters, priceRange: updated });
  };

  const handleRatingChange = (rating) => {
    const updated = filters.rating.includes(rating)
      ? filters.rating.filter((r) => r !== rating)
      : [...filters.rating, rating];
    setFilters((prev) => ({ ...prev, rating: updated }));
    onFilterChange({ ...filters, rating: updated });
  };

  const categories = [
    "Fruits & Vegetables",
    "Meat & Fish",
    "Bread & Bakery",
    "Beauty & Health",
    "Snacks",
    "Drinks",
  ];

  const ratings = [5, 4, 3, 2, 1];

  const brands = ["Brand A", "Brand B", "Brand C", "Brand D"];

  const FilterSection = ({ title, section, children }) => (
    <div className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
      <button
        onClick={() => toggleSection(section)}
        className="w-full flex items-center justify-between py-3 hover:text-(--main-color) transition-colors"
      >
        <h3 className="font-semibold text-gray-800">{title}</h3>
        {expandedSections[section] ? (
          <MdExpandLess className="text-lg" />
        ) : (
          <MdExpandMore className="text-lg" />
        )}
      </button>
      {expandedSections[section] && <div className="space-y-2">{children}</div>}
    </div>
  );

  return (
    <aside className="w-full lg:w-64 bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Filters</h2>

      {/* Category Filter */}
      <FilterSection title="Category" section="category">
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="w-4 h-4 accent-[var(--main-color)] rounded cursor-pointer"
              />
              <span className="text-sm text-gray-600 group-hover:text-(--main-color) transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price Filter */}
      <FilterSection title="Price Range" section="price">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">$0</span>
            <span className="text-sm font-semibold text-gray-800">
              ${filters.priceRange[1]}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={filters.priceRange[1]}
            onChange={handlePriceChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--main-color)]"
          />
          <div className="pt-2">
            <button className="w-full py-2 bg-[var(--main-color)] text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
              Apply
            </button>
          </div>
        </div>
      </FilterSection>

      {/* Rating Filter */}
      <FilterSection title="Rating" section="rating">
        <div className="space-y-2">
          {ratings.map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={filters.rating.includes(rating)}
                onChange={() => handleRatingChange(rating)}
                className="w-4 h-4 accent-[var(--main-color)] rounded cursor-pointer"
              />
              <span className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < rating ? "text-amber-500" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Brand Filter */}
      <FilterSection title="Brand" section="brand">
        <div className="space-y-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-[var(--main-color)] rounded cursor-pointer"
              />
              <span className="text-sm text-gray-600 group-hover:text-(--main-color) transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Clear Filters */}
      <button className="w-full mt-6 py-2 border border-gray-300 text-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
        Clear All Filters
      </button>
    </aside>
  );
};

export default ShopFilter;
