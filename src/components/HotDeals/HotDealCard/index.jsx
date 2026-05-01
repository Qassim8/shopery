import React from "react";
import image from "/apple.png";
import { BsHeart } from "react-icons/bs";
import { HiOutlineShoppingBag, HiStar } from "react-icons/hi2";
import { PiEye } from "react-icons/pi";
import { Link } from "react-router";

const HotDealCard = ({ item }) => {
  const times = [
    { time: 0o0, desc: "DAYS", sign: ":" },
    { time: 0o2, desc: "HOURS", sign: ":" },
    { time: 18, desc: "MINS", sign: ":" },
    { time: 46, desc: "SECS" },
  ];

  return (
    <div className="relative bg-white border group duration-300 border-(--main-color) group h-full">
      <div className="absolute top-3 start-3 flex items-center gap-2">
        <div className="py-1 px-2 rounded-md text-white bg-red-500">
          Sale 50%
        </div>
        <div className="py-1 px-2 rounded-md text-white bg-blue-500">
          Best Sale
        </div>
      </div>
      <div className="p-3 flex flex-col justify-center text-center">
        <div className=" flex justify-center items-center">
          <img
            src={item ? item.image : image}
            className="max-w-full w-80"
            alt="item-title"
          />
        </div>
        <div className="flex gap-3">
          <div className="w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full cursor-pointer">
            <BsHeart />
          </div>
          <button className="flex-1 flex justify-center items-center gap-2 text-white bg-(--main-color) rounded-full">
            <p>Add to cart</p>
            <HiOutlineShoppingBag />
          </button>
          <Link className="w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full cursor-pointer">
            <PiEye />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="mt-5 duration-300 text-(--main-color) mb-0">
            {item ? item.title : "Chinese cabbage"}
          </h2>
          <div className="flex justify-center gap-2 text-xl font-bold">
            <p className="">${(item ? item.discount : 12.0).toFixed(2)}</p>
            <p className="text-gray-400 line-through">
              ${(item ? item.price : 12.0).toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-center">
            {[1, 1, 1, 1, 1].map((n, id) => (
              <HiStar key={id} className={`text-amber-500 text-sm`} />
            ))}
            <p className="text-sm text-gray-500 ms-4">
              ({item ? item.feedback : "524 feedback"})
            </p>
          </div>
          <div className="">
            <p className="text-gray-500">Hurry up! Offer ends In:</p>
            <div className="flex items-center justify-center gap-5">
              {times.map((time, index) => (
                <div
                  className="flex items-center gap-5 text-gray-500"
                  key={index}
                >
                  <div className="flex flex-col">
                    <span className="text-lg text-gray-800 font-bold">
                      {time.time}
                    </span>
                    <span className="text-sm">{time.desc}</span>
                  </div>
                  <div>{time.sign}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDealCard;
