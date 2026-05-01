import React from "react";
import Title from "../SectionsTitle";
import Card from "./PopularCategoryCard";
import { images } from "../../assets/images";

const PopularCtegories = () => {
  const categories = [
    { image: images.fruits, title: "Fresh Fruite" },
    { image: images.vegetables, title: "Fresh Vegetables" },
    { image: images.meat, title: "Meat & Fish" },
    { image: images.snacks, title: "Snacks" },
    { image: images.drinks, title: "Beverages" },
    { image: images.beauty, title: "Beauty & Health" },
    { image: images.bread, title: "Bread & Bakery" },
    { image: images.baking, title: "Baking Needs" },
    { image: images.cooking, title: "Cooking" },
    { image: images.diabetic, title: "Diabetic Food" },
    { image: images.soap, title: "Dish Detergents" },
    { image: images.oil, title: "Oil" },
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
