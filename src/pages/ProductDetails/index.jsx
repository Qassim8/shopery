import React, { useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../components/Navbar";
import MenuNav from "../../components/Navbar/MenuNav";
import Breadcrumb from "../../components/Breadcrumb";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import { BsHeart, BsTruck, BsShieldCheck, BsArrowRepeat } from "react-icons/bs";
import { HiOutlineShoppingBag, HiStar, HiMinus, HiPlus } from "react-icons/hi2";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

// Mock product data - in real app this would come from API
const getProductById = (id) => {
  const products = [
    {
      id: 1,
      image: "/corn.png",
      title: "Green Apple",
      price: 14.99,
      originalPrice: 19.99,
      rating: 4.5,
      reviews: 128,
      description:
        "Fresh, crisp green apples sourced directly from local farms. These apples are perfect for snacking, baking, or adding to your favorite salads. Each apple is hand-picked at peak ripeness to ensure maximum flavor and nutrition.",
      category: "Fruits & Vegetables",
      sku: "GA-001",
      stock: "In Stock",
      weight: "1 kg",
      origin: "Local Farm",
      features: [
        "100% Organic",
        "No pesticides",
        "Rich in vitamins",
        "Perfect for health-conscious consumers",
      ],
      nutrition: {
        calories: "52 kcal",
        protein: "0.2g",
        carbs: "13.8g",
        fiber: "2.4g",
      },
    },
    {
      id: 2,
      image: "/apple.png",
      title: "Fresh Indian Malta",
      price: 10.99,
      originalPrice: 14.99,
      rating: 4.2,
      reviews: 89,
      description:
        "Sweet and juicy Indian Malta oranges, known for their vibrant color and exceptional taste. These oranges are packed with vitamin C and make a perfect healthy snack.",
      category: "Fruits & Vegetables",
      sku: "IM-002",
      stock: "In Stock",
      weight: "2 kg",
      origin: "India",
      features: [
        "High vitamin C content",
        "Sweet and juicy",
        "Rich in antioxidants",
        "Perfect for juice making",
      ],
      nutrition: {
        calories: "47 kcal",
        protein: "0.9g",
        carbs: "11.8g",
        fiber: "2.4g",
      },
    },
  ];

  return products.find((product) => product.id === parseInt(id)) || products[0];
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: product.title, path: `/product/${product.id}`, active: true },
  ];

  const productImages = [
    product.image,
    product.image, // In real app, these would be different images
    product.image,
    product.image,
  ];

  const relatedProducts = [
    { id: 3, image: "/tomato.png", title: "Fresh Tomato", price: 8.99 },
    { id: 4, image: "/capsicum.png", title: "Green Capsicum", price: 12.99 },
    { id: 5, image: "/potato.png", title: "Organic Potato", price: 6.99 },
    { id: 6, image: "/mango.png", title: "Sweet Mango", price: 15.99 },
  ];

  return (
    <>
      {/* Header */}
      <div className="bg-white">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <MenuNav isContainer={true} />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Product Details Section */}
      <section className="py-10 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-8 flex justify-center items-center">
                <img
                  src={productImages[selectedImage]}
                  alt={product.title}
                  className="max-w-full h-96 object-contain"
                />
              </div>
              <div className="flex gap-4 overflow-x-auto">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 bg-gray-50 rounded-lg p-2 border-2 transition-colors ${
                      selectedImage === index
                        ? "border-[var(--main-color)]"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[1, 1, 1, 1, 1].map((n, id) => (
                      <HiStar
                        key={id}
                        className={`${
                          id < Math.floor(product.rating)
                            ? "text-amber-500"
                            : "text-gray-300"
                        } text-lg`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-bold text-[var(--main-color)]">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-6">
                <span className="font-semibold text-gray-800">Quantity:</span>
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <button
                    onClick={decreaseQuantity}
                    className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <HiMinus />
                  </button>
                  <span className="w-16 text-center font-semibold text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <HiPlus />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-[var(--main-color)] text-white py-4 px-8 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-3 text-lg">
                  <HiOutlineShoppingBag className="text-xl" />
                  Add to Cart
                </button>
                <button className="w-14 h-14 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <BsHeart className="text-xl" />
                </button>
              </div>

              {/* Product Features */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Why Choose This Product?
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <BsShieldCheck className="text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Details */}
              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">SKU:</span>
                  <span className="font-semibold">{product.sku}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-semibold">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Stock:</span>
                  <span className="font-semibold text-green-600">
                    {product.stock}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Weight:</span>
                  <span className="font-semibold">{product.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Origin:</span>
                  <span className="font-semibold">{product.origin}</span>
                </div>
              </div>

              {/* Social Share */}
              <div className="border-t border-gray-200 pt-6">
                <span className="text-gray-600 text-sm">
                  Share this product:
                </span>
                <div className="flex gap-3 mt-3">
                  {[FaFacebookF, FaTwitter, FaPinterestP, FaInstagram].map(
                    (Icon, index) => (
                      <button
                        key={index}
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--main-color)] hover:text-white transition-colors"
                      >
                        <Icon />
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-16 border-t border-gray-200">
            <div className="flex gap-8 mt-8">
              {["description", "nutrition", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-semibold transition-colors capitalize ${
                    activeTab === tab
                      ? "text-[var(--main-color)] border-b-2 border-[var(--main-color)]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-8">
              {activeTab === "description" && (
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-gray-600"
                        >
                          <BsShieldCheck className="text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "nutrition" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {Object.entries(product.nutrition).map(([key, value]) => (
                    <div
                      key={key}
                      className="text-center p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-[var(--main-color)]">
                        {value}
                      </div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold">{product.rating}</div>
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        {[1, 1, 1, 1, 1].map((n, id) => (
                          <HiStar
                            key={id}
                            className={`${
                              id < Math.floor(product.rating)
                                ? "text-amber-500"
                                : "text-gray-300"
                            } text-lg`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">
                        Based on {product.reviews} reviews
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-600">
                    Customer reviews will be displayed here. This is a
                    placeholder for the reviews section.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[var(--main-color)] transition-colors group"
                >
                  <div className="flex justify-center items-center h-32 mb-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="max-w-full h-24 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-2 group-hover:text-[var(--main-color)] transition-colors">
                    {relatedProduct.title}
                  </h3>
                  <p className="text-[var(--main-color)] font-bold">
                    ${relatedProduct.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Footer */}
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductDetails;
