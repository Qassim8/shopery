import React from "react";

const brands = [
  { name: "steps", img: "/brand-1.png" },
  { name: "MANGO", img: "/brand-2.png" },
  { name: "food", img: "/brand-3.png" },
  { name: "FOOD+", img: "/brand-4.png" },
  { name: "BOOK-OFF", img: "/brand-5.png" },
  { name: "G Series", img: "/brand-6.png" },
];

const BrandLogos = () => {
  return (
    <div className="container py-8 border-y border-gray-100 flex justify-between items-center gap-12 grayscale opacity-50">
      {brands.map((brand) => (
        <img src={brand.img} key={brand.name} />
      ))}
    </div>
  );
};

export default BrandLogos;
