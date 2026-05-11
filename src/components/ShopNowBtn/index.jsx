import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const ShopNowBtn = ({ color, bg, needed, start }) => {
  return (
    <Link
      to="/shop"
      className={`flex justify-center items-center gap-3 text-${color} bg-${bg} ${start ? "justify-start" : ""} ${needed ? "w-36 md:w-47.5 h-12.5 rounded-full" : ""}`}
    >
      <span>Shop Now</span>
      <FaArrowRight />
    </Link>
  );
};

export default ShopNowBtn;
