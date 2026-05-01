import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ShopNowBtn from "../../ShopNowBtn";

const BestDealsCard = ({
  info: { image, title, subtitle, color },
  description,
}) => {
  return (
    <div className="relative h-70 md:h-132 rounded-md p-4">
      <div className="absolute w-full h-full left-0 top-0 -z-10">
        <img src={image} alt="" className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-2 items-center mt-3 text-center z-10">
        <div className={`flex flex-col gap-2 text-${color}`}>
          <p>{title}</p>
          <h2 className="text-3xl font-bold">{subtitle}</h2>
          <div className="my-3">{description}</div>
        </div>
        <ShopNowBtn color={"(--main-color)"} bg={"white"} needed={1} />
      </div>
    </div>
  );
};

export default BestDealsCard;
