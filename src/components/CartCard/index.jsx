import React from "react";
import { BsHeart, BsTrash } from "react-icons/bs";
import { HiX } from "react-icons/hi";
import { HiMinus, HiPlus } from "react-icons/hi2";

const CartCard = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 md:p-6">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-3 md:gap-10">
        {/* Product Image */}
        <div className="w-24 h-24 rounded-lg flex items-center justify-center shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="max-w-20 max-h-20 object-contain"
          />
        </div>
        <div className="">
          <h3 className="font-semibold text-gray-900 text-sm md:text-lg mb-2">
            {item.title}
          </h3>
        </div>
        {/* Product Details */}
        <div className="grow order-4 md:order-3 flex flex-wrap md:flex-nowrap justify-between items-center gap-4 md:gap-8">
          <div className="grow">
            <span className="md:text-xl">${item.price.toFixed(2)}</span>
          </div>

          <div className="grow flex justify-between items-center border border-gray-200 rounded-full p-1">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors cursor-pointer"
            >
              <HiMinus />
            </button>
            <span className=" text-center font-semibold">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors cursor-pointer"
            >
              <HiPlus />
            </button>
          </div>

          <div className="grow text-end">
            <p className="text-sm text-gray-500">SUBTOTAL:</p>
            <p className="md:text-xl">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>

        <button
          onClick={() => removeItem(item.id)}
          className="w-6 h-6 order-3 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500 border border-gray-400 rounded-full transition-colors cursor-pointer"
        >
          <HiX />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
