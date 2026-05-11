import React from "react";
import Title from "../SectionsTitle";
import Card from "./PopularCategoryCard";

const PopularCtegories = () => {
  const categories = [
    { image: "/fruites.png", title: "Fresh Fruite" },
    { image: "/vegetables.png", title: "Fresh Vegetables" },
    { image: "/meat-fish.png", title: "Meat & Fish" },
    { image: "/snacks.png", title: "Snacks" },
    { image: "/drinks.png", title: "Beverages" },
    { image: "/beauty-health.png", title: "Beauty & Health" },
    { image: "/bread.png", title: "Bread & Bakery" },
    { image: "/baking-needs.png", title: "Baking Needs" },
    { image: "/cooking.png", title: "Cooking" },
    { image: "/diabetic-foods.png", title: "Diabetic Food" },
    { image: "/soap.png", title: "Dish Detergents" },
    { image: "/oil.png", title: "Oil" },
  ];

  return (
    <section className="py-10">
      <div className="container">
        <Title title="Popular Categories" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {categories.map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCtegories;
