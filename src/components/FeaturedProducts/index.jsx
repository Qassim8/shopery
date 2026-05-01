import React from "react";
import Title from "../SectionsTitle";
import apple from "/apple.png";
import tomato from "/tomato.png";
import capsicum from "/capsicum.png";
import potato from "/potato.png";
import mango from "/mango.png";
import ProductCard from "../ProductsCard";

const products = [
  {
    id: 1,
    image: apple,
    title: "Green Apple",
    price: 14.99,
  },
  {
    id: 2,
    image: tomato,
    title: "Fresh Indian Malta",
    price: 10.99,
  },
  {
    id: 3,
    image: capsicum,
    title: "Chinese cabbage",
    price: 22.85,
  },
  {
    id: 4,
    image: potato,
    title: "Big Potatoes",
    price: 35.68,
  },
  {
    id: 5,
    image: mango,
    title: "Green Capsicum",
    price: 12.68,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-10">
      <div className="container">
        <Title title="Featured Products" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {products.map((item, idx) => (
            <ProductCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
