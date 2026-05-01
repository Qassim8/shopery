import React, { useState } from "react";
import { BsHeart, BsTrash, BsHeartFill } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router";
import AppLayout from "../../components/AppLayout";
import Breadcrumb from "../../components/Breadcrumb";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      image: "/corn.png",
      title: "Green Apple",
      price: 14.99,
      originalPrice: 19.99,
      rating: 4.5,
      inStock: true,
    },
    {
      id: 2,
      image: "/apple.png",
      title: "Fresh Indian Malta",
      price: 10.99,
      originalPrice: 14.99,
      rating: 4.2,
      inStock: true,
    },
    {
      id: 3,
      image: "/tomato.png",
      title: "Organic Tomato",
      price: 8.99,
      originalPrice: 12.99,
      rating: 4.8,
      inStock: false,
    },
    {
      id: 4,
      image: "/capsicum.png",
      title: "Green Capsicum",
      price: 12.68,
      originalPrice: null,
      rating: 4.3,
      inStock: true,
    },
    {
      id: 5,
      image: "/potato.png",
      title: "Big Potatoes",
      price: 35.68,
      originalPrice: 45.99,
      rating: 4.6,
      inStock: true,
    },
    {
      id: 6,
      image: "/mango.png",
      title: "Sweet Mango",
      price: 18.99,
      originalPrice: null,
      rating: 4.9,
      inStock: true,
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    // In a real app, this would add the item to cart
    alert(`${item.title} added to cart!`);
  };

  const moveAllToCart = () => {
    const inStockItems = wishlistItems.filter((item) => item.inStock);
    if (inStockItems.length === 0) {
      alert("No items in stock to add to cart.");
      return;
    }
    alert(`${inStockItems.length} items added to cart!`);
  };

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Wishlist", path: "/wishlist", active: true },
  ];

  return (
    <AppLayout>
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Wishlist Section */}
      <section className="py-10 bg-gray-50">
        <div className="container">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">My Wishlist</h1>
              <p className="text-gray-600 mt-2">
                {wishlistItems.length}{" "}
                {wishlistItems.length === 1 ? "item" : "items"} in your wishlist
              </p>
            </div>

            {wishlistItems.length > 0 && (
              <div className="flex gap-3">
                <button
                  onClick={moveAllToCart}
                  className="bg-[var(--main-color)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <HiOutlineShoppingBag />
                  Add All to Cart
                </button>
                <button
                  onClick={() => setWishlistItems([])}
                  className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Clear Wishlist
                </button>
              </div>
            )}
          </div>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg">
              <div className="text-8xl text-gray-300 mb-6">❤️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your wishlist is empty
              </h2>
              <p className="text-gray-600 mb-8">
                Start adding items you love to your wishlist.
              </p>
              <Link
                to="/shop"
                className="inline-block bg-[var(--main-color)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden group hover:border-[var(--main-color)] transition-colors"
                >
                  {/* Product Image */}
                  <div className="relative">
                    <div className="aspect-square bg-gray-50 flex items-center justify-center p-8">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Stock Status */}
                    {!item.inStock && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Out of Stock
                      </div>
                    )}

                    {/* Wishlist Button */}
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 hover:text-red-500 transition-colors"
                      title="Remove from Wishlist"
                    >
                      <BsHeartFill className="text-red-500" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-[var(--main-color)] transition-colors">
                      {item.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[1, 1, 1, 1, 1].map((n, id) => (
                          <span
                            key={id}
                            className={`text-sm ${
                              id < Math.floor(item.rating)
                                ? "text-amber-500"
                                : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({item.rating})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-[var(--main-color)]">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => item.inStock && addToCart(item)}
                      disabled={!item.inStock}
                      className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                        item.inStock
                          ? "bg-[var(--main-color)] text-white hover:bg-green-700"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      <HiOutlineShoppingBag />
                      {item.inStock ? "Add to Cart" : "Out of Stock"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Related Actions */}
          {wishlistItems.length > 0 && (
            <div className="mt-12 text-center">
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Love these items?
                </h3>
                <p className="text-gray-600 mb-6">
                  Don't wait! These popular items might sell out soon.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/shop"
                    className="bg-[var(--main-color)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Continue Shopping
                  </Link>
                  <Link
                    to="/cart"
                    className="border border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    View Cart
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </AppLayout>
  );
};

export default Wishlist;
