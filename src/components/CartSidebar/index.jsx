import React, { useState, useEffect } from "react";
import { BsX, BsHeart, BsTrash } from "react-icons/bs";
import { HiMinus, HiPlus } from "react-icons/hi2";
import { Link } from "react-router";

const CartSidebar = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "/corn.png",
      title: "Green Apple",
      price: 14.99,
      quantity: 2,
    },
    {
      id: 2,
      image: "/apple.png",
      title: "Fresh Indian Malta",
      price: 10.99,
      quantity: 1,
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const subtotal = total;
  const shipping = total > 50 ? 0 : 5.99;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          >
            <BsX className="text-xl" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl text-gray-300 mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-600 mb-6">
                Add some products to get started
              </p>
              <Link
                to="/shop"
                onClick={onClose}
                className="inline-block bg-[var(--main-color)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-12 max-h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                      {item.title}
                    </h3>
                    <p className="text-[var(--main-color)] font-bold text-lg">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                      >
                        <HiMinus className="text-xs" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                      >
                        <HiPlus className="text-xs" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded transition-colors"
                  >
                    <BsTrash />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4">
            {/* Summary */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-semibold">
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                <span>Total:</span>
                <span className="text-[var(--main-color)]">
                  ${(subtotal + shipping).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <Link
                to="/checkout"
                onClick={onClose}
                className="block w-full bg-[var(--main-color)] text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Checkout
              </Link>
              <Link
                to="/cart"
                onClick={onClose}
                className="block w-full border border-gray-300 text-gray-800 text-center py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                View Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
