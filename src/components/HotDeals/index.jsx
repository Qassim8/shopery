import React from "react";
import Title from "../SectionsTitle";
import apple from "/apple.png";
import eggplant from "/eggplant.png";
import tomato from "/tomato.png";
import cauliflower from "/apple.png";
import capsicum from "/capsicum.png";
import potato from "/potato.png";
import corn from "/corn.png";
import mango from "/mango.png";
import HotDealCard from "./HotDealCard";
import ProductCard from "../ProductsCard";

const products = [
  {
    image: apple,
    title: "Green Apple",
    price: 14.99,
  },
  {
    image: tomato,
    title: "Fresh Indian Malta",
    price: 10.99,
  },
  {
    image: capsicum,
    title: "Chinese cabbage",
    price: 22.85,
  },
  {
    image: corn,
    title: "Green Lettuce",
    price: 4.99,
  },
  {
    image: eggplant,
    title: "Eggplant",
    price: 11.0,
  },
  {
    image: potato,
    title: "Big Potatoes",
    price: 35.68,
  },
  {
    image: corn,
    title: "Corn",
    price: 17.29,
  },
  {
    image: cauliflower,
    title: "Fresh Cauliflower",
    price: 11.0,
  },
  {
    image: mango,
    title: "Green Capsicum",
    price: 12.68,
  },
  {
    image: tomato,
    title: "Green Chill",
    price: 34.0,
  },
  {
    image: capsicum,
    title: "Green Chill",
    price: 34.0,
  },
];

const HotDeals = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container">
        <Title title="Hot Deals" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:row-span-2">
            <HotDealCard />
          </div>
          {products.map((item, idx) => (
            <ProductCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDeals;
