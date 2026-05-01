import { BsHeart } from "react-icons/bs";
import { HiOutlineShoppingBag, HiStar } from "react-icons/hi2";
import { PiEye } from "react-icons/pi";
import { Link } from "react-router";
import { useState } from "react";
import ProductModal from "../ProductModal";

const ProductCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative bg-white border border-gray-100 group duration-300 hover:border-(--main-color) group">
        <div className=" flex justify-center items-center h-40">
          <img src={item.image} className="max-w-full w-44" alt="item-title" />
        </div>
        <div className="flex justify-between items-center p-3">
          <div className="flex flex-col gap-2">
            <h2 className="text-gray-600 text-[12px] duration-300 group-hover:text-(--main-color) mb-0">
              {item.title}
            </h2>
            <p className="text-xl font-bold my-0">${item.price.toFixed(2)}</p>
            <div className="flex items-center">
              {[1, 1, 1, 1, 1].map((n, id) => (
                <HiStar
                  className={`${id === 4 ? "text-gray-300" : "text-amber-500"} text-sm`}
                />
              ))}
            </div>
          </div>
          <div className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full transition-colors duration-300 cursor-pointer group-hover:bg-(--main-color) group-hover:text-white">
            <HiOutlineShoppingBag />
          </div>
        </div>
        <div className="absolute top-3 right-3 md:opacity-0 group-hover:md:opacity-100 flex flex-col gap-3 transition-opacity duration-300">
          <div className="w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full cursor-pointer">
            <BsHeart />
          </div>
          <button
            onClick={openModal}
            className="w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full cursor-pointer hover:bg-[var(--main-color)] hover:text-white transition-colors"
          >
            <PiEye />
          </button>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal product={item} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ProductCard;
