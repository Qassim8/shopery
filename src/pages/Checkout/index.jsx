import React, { useState } from "react";
import { BsShieldCheck, BsTruck, BsCreditCard, BsCash } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router";
import AppLayout from "../../components/AppLayout";
import Breadcrumb from "../../components/Breadcrumb";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",

    // Billing Information
    billingFirstName: "",
    billingLastName: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZipCode: "",

    // Payment Information
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  const cartItems = [
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
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would process the payment
    alert("Order placed successfully! Thank you for shopping with us.");
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping =
    shippingMethod === "express"
      ? 15.99
      : shippingMethod === "standard"
        ? 5.99
        : 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Cart", path: "/cart" },
    { label: "Checkout", path: "/checkout", active: true },
  ];

  return (
    <AppLayout>
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Checkout Section */}
      <section className="py-10 bg-gray-50">
        <div className="container">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>
            <p className="text-gray-600 mt-2">Complete your order</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Information */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Shipping Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                      placeholder="Enter your street address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                      placeholder="Enter your city"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                      placeholder="Enter your state"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                      placeholder="Enter your ZIP code"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Shipping Method
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-[var(--main-color)] transition-colors">
                    <input
                      type="radio"
                      name="shipping"
                      value="free"
                      checked={shippingMethod === "free"}
                      onChange={(e) => setShippingMethod(e.target.value)}
                      className="w-4 h-4 text-[var(--main-color)] focus:ring-[var(--main-color)]"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Free Shipping</span>
                        <span className="text-green-600 font-bold">FREE</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        7-10 business days
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-[var(--main-color)] transition-colors">
                    <input
                      type="radio"
                      name="shipping"
                      value="standard"
                      checked={shippingMethod === "standard"}
                      onChange={(e) => setShippingMethod(e.target.value)}
                      className="w-4 h-4 text-[var(--main-color)] focus:ring-[var(--main-color)]"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Standard Shipping</span>
                        <span className="font-bold">$5.99</span>
                      </div>
                      <p className="text-sm text-gray-600">3-5 business days</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-[var(--main-color)] transition-colors">
                    <input
                      type="radio"
                      name="shipping"
                      value="express"
                      checked={shippingMethod === "express"}
                      onChange={(e) => setShippingMethod(e.target.value)}
                      className="w-4 h-4 text-[var(--main-color)] focus:ring-[var(--main-color)]"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Express Shipping</span>
                        <span className="font-bold">$15.99</span>
                      </div>
                      <p className="text-sm text-gray-600">1-2 business days</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Payment Method
                </h2>

                {/* Payment Options */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <label
                    className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === "card"
                        ? "border-[var(--main-color)] bg-green-50"
                        : "border-gray-200 hover:border-[var(--main-color)]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-[var(--main-color)] focus:ring-[var(--main-color)]"
                    />
                    <BsCreditCard className="text-xl" />
                    <span className="font-semibold">Credit Card</span>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === "cash"
                        ? "border-[var(--main-color)] bg-green-50"
                        : "border-gray-200 hover:border-[var(--main-color)]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-[var(--main-color)] focus:ring-[var(--main-color)]"
                    />
                    <BsCash className="text-xl" />
                    <span className="font-semibold">Cash on Delivery</span>
                  </label>
                </div>

                {/* Card Payment Form */}
                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Cardholder Name *
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                      />
                    </div>
                  </div>
                )}

                {/* Cash on Delivery Notice */}
                {paymentMethod === "cash" && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <BsCash className="text-blue-600 text-xl flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">
                          Cash on Delivery
                        </h4>
                        <p className="text-blue-700 text-sm">
                          Pay when your order is delivered to your doorstep.
                          Additional fee may apply.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-w-8 max-h-8 object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-gray-900 truncate">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Qty: {item.quantity}
                        </p>
                        <p className="text-sm font-bold text-[var(--main-color)]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Totals */}
                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
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
                  <div className="flex justify-between text-xl font-bold border-t border-gray-200 pt-3">
                    <span>Total</span>
                    <span className="text-[var(--main-color)]">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  type="submit"
                  className="w-full bg-[var(--main-color)] text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-6 flex items-center justify-center gap-2"
                >
                  <BsShieldCheck className="text-xl" />
                  Place Order
                </button>

                {/* Security Notice */}
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <BsShieldCheck className="text-green-500" />
                    <span>Secure checkout with SSL encryption</span>
                  </div>
                </div>

                {/* Back to Cart */}
                <div className="mt-4 text-center">
                  <Link
                    to="/cart"
                    className="text-[var(--main-color)] hover:underline text-sm"
                  >
                    ← Back to Cart
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </AppLayout>
  );
};

export default Checkout;
