import React, { useState } from "react";
import { BsHeart, BsX } from "react-icons/bs";
import { HiOutlineShoppingBag, HiStar, HiMinus, HiPlus } from "react-icons/hi2";
import { Link } from "react-router";

const ProductModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <BsX className="text-xl" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="flex justify-center items-center bg-gray-50 rounded-lg p-8">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full h-40 md:h-70 object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[1, 1, 1, 1, 1].map((n, id) => (
                      <HiStar
                        key={id}
                        className={`${
                          id === 4 ? "text-gray-300" : "text-amber-500"
                        } text-sm`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">(4.5)</span>
                </div>
                <p className="text-3xl font-bold text-[var(--main-color)] mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="grow flex items-center justify-between border border-gray-200 rounded-full p-1">
                  <button
                    onClick={decreaseQuantity}
                    className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer bg-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <HiMinus className="text-sm" />
                  </button>
                  <span className="w-10 text-center font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer bg-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <HiPlus className="text-sm" />
                  </button>
                </div>
                <button className="grow bg-(--main-color) text-white py-2 px-6 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  Add to Cart
                  <HiOutlineShoppingBag />
                </button>
                <button className="w-10 h-10 bg-(--main-color)/10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <BsHeart />
                </button>
              </div>

              {/* Additional Info */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">SKU:</span>
                  <span className="font-semibold">
                    SKU-{product.id || "001"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-semibold">Fruits & Vegetables</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Stock:</span>
                  <span className="font-semibold text-green-600">In Stock</span>
                </div>
              </div>

              {/* View Full Details Link */}
              <Link
                to={`/product/${product.id || "1"}`}
                onClick={onClose}
                className="block w-full text-center py-2 text-[var(--main-color)] font-semibold hover:underline transition-colors"
              >
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
