import React, { useState } from "react";
import { BsTrash, BsHeart } from "react-icons/bs";
import { HiMinus, HiPlus } from "react-icons/hi2";
import { Link } from "react-router";
import AppLayout from "../../components/AppLayout";
import Breadcrumb from "../../components/Breadcrumb";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "/corn.png",
      title: "Green Apple",
      price: 14.99,
      originalPrice: 19.99,
      quantity: 2,
    },
    {
      id: 2,
      image: "/apple.png",
      title: "Fresh Indian Malta",
      price: 10.99,
      originalPrice: 14.99,
      quantity: 1,
    },
    {
      id: 3,
      image: "/tomato.png",
      title: "Organic Tomato",
      price: 8.99,
      originalPrice: 12.99,
      quantity: 3,
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

  const moveToWishlist = (id) => {
    // In a real app, this would move the item to wishlist
    removeItem(id);
    alert("Item moved to wishlist!");
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discount = cartItems.reduce(
    (sum, item) => sum + (item.originalPrice - item.price) * item.quantity,
    0,
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Cart", path: "/cart", active: true },
  ];

  return (
    <AppLayout>
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Cart Section */}
      <section className="py-10 bg-gray-50">
        <div className="container">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600 mt-2">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
              your cart
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg">
              <div className="text-8xl text-gray-300 mb-6">🛒</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link
                to="/shop"
                className="inline-block bg-[var(--main-color)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-lg p-6"
                  >
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-w-20 max-h-20 object-contain"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg mb-2">
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-4">
                              <span className="text-[var(--main-color)] font-bold text-xl">
                                ${item.price.toFixed(2)}
                              </span>
                              {item.originalPrice && (
                                <span className="text-gray-400 line-through text-lg">
                                  ${item.originalPrice.toFixed(2)}
                                </span>
                              )}
                              {item.originalPrice && (
                                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                                  Save $
                                  {(item.originalPrice - item.price).toFixed(2)}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex gap-2">
                            <button
                              onClick={() => moveToWishlist(item.id)}
                              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                              title="Move to Wishlist"
                            >
                              <BsHeart />
                            </button>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                              title="Remove Item"
                            >
                              <BsTrash />
                            </button>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-gray-700">
                              Quantity:
                            </span>
                            <div className="flex items-center border border-gray-200 rounded-lg">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                              >
                                <HiMinus />
                              </button>
                              <span className="w-12 text-center font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                              >
                                <HiPlus />
                              </button>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-sm text-gray-600">Total</p>
                            <p className="text-xl font-bold text-[var(--main-color)]">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Subtotal ({cartItems.length} items)
                      </span>
                      <span className="font-semibold">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span className="font-semibold">
                          -${discount.toFixed(2)}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span className="text-[var(--main-color)]">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter promo code"
                        className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                      />
                      <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 space-y-3">
                    <Link
                      to="/checkout"
                      className="block w-full bg-[var(--main-color)] text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Proceed to Checkout
                    </Link>
                    <Link
                      to="/shop"
                      className="block w-full border border-gray-300 text-gray-800 text-center py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Continue Shopping
                    </Link>
                  </div>

                  {/* Security Badges */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">🔒</span>
                        <span>Secure Checkout</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-500">🚚</span>
                        <span>Free Shipping</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </AppLayout>
  );
};

export default Cart;
