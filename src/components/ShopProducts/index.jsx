import React, { useState } from "react";
import ProductCard from "../ProductsCard";
import corn from "/corn.png";
import apple from "/apple.png";
import tomato from "/tomato.png";
import capsicum from "/capsicum.png";
import potato from "/potato.png";
import mango from "/mango.png";
import { BsEye, BsGrid3X2Gap, BsHeart, BsInfo, BsList } from "react-icons/bs";
import { HiOutlineShoppingBag, HiStar } from "react-icons/hi2";

const ShopProducts = ({ filters }) => {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("newest");

  const products = [
    { id: 1, image: corn, title: "Green Apple", price: 14.99 },
    { id: 2, image: tomato, title: "Fresh Indian Malta", price: 10.99 },
    { id: 3, image: capsicum, title: "Chinese cabbage", price: 22.85 },
    { id: 4, image: potato, title: "Green Lettuce", price: 4.99 },
    { id: 5, image: apple, title: "Eggplant", price: 11.0 },
    { id: 6, image: mango, title: "Big Potatoes", price: 35.68 },
    { id: 7, image: corn, title: "Corn", price: 17.29 },
    { id: 8, image: tomato, title: "Fresh Cauliflower", price: 11.0 },
    { id: 9, image: capsicum, title: "Green Capsicum", price: 12.68 },
    { id: 10, image: potato, title: "Green Chill", price: 34.0 },
    { id: 11, image: apple, title: "Red Apples", price: 16.5 },
    { id: 12, image: mango, title: "Mango", price: 18.99 },
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
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div className="grow text-sm text-gray-600">
          <span className="font-semibold">{sortedProducts.length}</span> Results
          Found
        </div>

        <div className="grow flex flex-col md:justify-end md:flex-row md:items-center gap-2 md:gap-4">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-sm flex-1">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-(--main-color)"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Last Week</option>
              <option value="price-high">Last Month</option>
            </select>
          </div>
          {/* View Mode Toggle */}
          <div className="flex items-center gap-3">
            <span className="text-sm flex-1">View Mode:</span>
            <div className=" flex items-center border border-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`grow flex justify-center items-center p-2 transition-colors rounded-md ${
                  viewMode === "grid"
                    ? "bg-(--main-color) text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <BsGrid3X2Gap />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`grow flex justify-center items-center p-2 transition-colors rounded-md ${
                  viewMode === "list"
                    ? "bg-(--main-color) text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <BsList />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-4">
          {sortedProducts.map((item, idx) => (
            <ProductCard key={idx} item={item} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {sortedProducts.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-4 flex gap-4 items-center hover:border-(--main-color) transition-colors"
            >
              <div className="w-24 h-24 shrink-0 rounded-lg flex items-center justify-center">
                <img src={item.image} alt={item.title} className="max-w-24" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm md:text-[16px] font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-(--main-color) font-bold text-lg mt-2">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-1 mt-3">
                  {[1, 1, 1, 1, 1].map((n, id) => (
                    <HiStar
                      key={id}
                      className={`${id === 4 ? "text-gray-300" : "text-amber-500"} text-sm`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="p-3 text-sm md:text-[16px] cursor-pointer rounded-full hover:bg-(--main-color)/20 transition-colors font-semibold border border-gray-300 ">
                  <BsHeart />
                </button>
                <button className="p-3 text-sm md:text-[16px] cursor-pointer rounded-full hover:bg-(--main-color)/20 transition-colors font-semibold border border-gray-300 ">
                  <HiOutlineShoppingBag />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopProducts;
