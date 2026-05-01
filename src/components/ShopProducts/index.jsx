import React, { useState } from "react";
import ProductCard from "../ProductsCard";
import corn from "/corn.png";
import apple from "/apple.png";
import tomato from "/tomato.png";
import capsicum from "/capsicum.png";
import potato from "/potato.png";
import mango from "/mango.png";
import { BsGrid3X2Gap, BsList } from "react-icons/bs";

const ShopProducts = ({ filters }) => {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("newest");

  const products = [
    { image: corn, title: "Green Apple", price: 14.99 },
    { image: tomato, title: "Fresh Indian Malta", price: 10.99 },
    { image: capsicum, title: "Chinese cabbage", price: 22.85 },
    { image: potato, title: "Green Lettuce", price: 4.99 },
    { image: apple, title: "Eggplant", price: 11.0 },
    { image: mango, title: "Big Potatoes", price: 35.68 },
    { image: corn, title: "Corn", price: 17.29 },
    { image: tomato, title: "Fresh Cauliflower", price: 11.0 },
    { image: capsicum, title: "Green Capsicum", price: 12.68 },
    { image: potato, title: "Green Chill", price: 34.0 },
    { image: apple, title: "Red Apples", price: 16.5 },
    { image: mango, title: "Mango", price: 18.99 },
  ];

  const getSortedProducts = () => {
    const sorted = [...products];
    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "newest":
      default:
        return sorted;
    }
  };

  const sortedProducts = getSortedProducts();

  return (
    <div className="flex-1">
      {/* Top Bar */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600">
          Showing <span className="font-semibold">{sortedProducts.length}</span>{" "}
          products
        </div>

        <div className="flex items-center gap-4">
          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[var(--main-color)]"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          {/* View Mode Toggle */}
          <div className="flex items-center border border-gray-200 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 transition-colors ${
                viewMode === "grid"
                  ? "bg-[var(--main-color)] text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <BsGrid3X2Gap />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 transition-colors ${
                viewMode === "list"
                  ? "bg-[var(--main-color)] text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <BsList />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedProducts.map((item, idx) => (
            <ProductCard key={idx} item={item} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {sortedProducts.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-4 flex gap-4 items-center hover:border-[var(--main-color)] transition-colors"
            >
              <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center">
                <img src={item.image} alt={item.title} className="max-w-20" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-[var(--main-color)] font-bold text-lg mt-2">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  {[1, 1, 1, 1, 1].map((n, id) => (
                    <span
                      key={id}
                      className={`text-sm ${
                        id === 4 ? "text-gray-300" : "text-amber-500"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <button className="px-6 py-2 bg-[var(--main-color)] text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopProducts;
