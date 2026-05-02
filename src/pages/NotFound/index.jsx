import React from "react";
import { Link } from "react-router";
import AppLayout from "../../components/AppLayout";
import { BsArrowLeft, BsChatDots, BsHouse, BsSearch } from "react-icons/bs";

const NotFound = () => {
  const popularPages = [
    { name: "Home", path: "/", icon: BsHouse },
    { name: "Shop", path: "/shop", icon: BsSearch },
    { name: "Contact", path: "/contact", icon: BsChatDots },
  ];

  const categories = [
    "Fruits & Vegetables",
    "Dairy & Eggs",
    "Meat & Poultry",
    "Bakery",
    "Pantry Staples",
    "Beverages",
  ];

  return (
    <AppLayout showMenuNav={false} showNewsletter={false}>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative">
              <div className="text-9xl font-bold text-gray-200 select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-[var(--main-color)] rounded-full flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-.98-5.5-2.5m.5-4a7.963 7.963 0 015.5-2.5c2.34 0 4.29.98 5.5 2.5m-.5 4H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off into the
              digital wilderness. Don't worry, let's get you back on track with
              some fresh, organic goodness!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[var(--main-color)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <BsArrowLeft />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border-2 border-[var(--main-color)] text-[var(--main-color)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--main-color)] hover:text-white transition-colors"
            >
              Go Back
            </button>
          </div>

          {/* Popular Pages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Popular Pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {popularPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-[var(--main-color)] rounded-full flex items-center justify-center">
                    <page.icon className="text-white text-lg" />
                  </div>
                  <span className="font-medium text-gray-900">{page.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Browse Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Browse Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to="/shop"
                  className="p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all hover:bg-[var(--main-color)] hover:text-white group"
                >
                  <span className="text-sm font-medium text-center block group-hover:text-white">
                    {category}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Search Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm border max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Search for Products
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-[var(--main-color)] text-white rounded-lg hover:bg-green-700 transition-colors">
                <BsSearch />
              </button>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Still can't find what you're looking for?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[var(--main-color)] hover:text-green-700 font-medium"
              >
                <BsChatDots />
                Contact Support
              </Link>
              <span className="hidden sm:block text-gray-400">•</span>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 text-[var(--main-color)] hover:text-green-700 font-medium"
              >
                View FAQ
              </Link>
            </div>
          </div>

          {/* Fun Quote */}
          <div className="mt-12 p-6 bg-[var(--main-color)] rounded-lg text-white">
            <blockquote className="text-lg italic">
              "The best way to find yourself is to lose yourself in the service
              of others."
            </blockquote>
            <cite className="block mt-2 text-green-100">— Mahatma Gandhi</cite>
            <p className="mt-4 text-green-100">
              While you're here, why not explore our fresh selection of organic
              products?
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFound;
