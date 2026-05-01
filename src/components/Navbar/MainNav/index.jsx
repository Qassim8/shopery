import { RiSearchLine } from "react-icons/ri";
import LogoIcon from "/logo-tree.png";
import { BsHeart } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router";
import { useState } from "react";
import SearchBar from "../SearchBar";
import CartSidebar from "../../CartSidebar";

const MainNav = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-between py-6">
        <div className="hidden md:flex gap-2 items-center">
          <img className="w-full object-contain" src={LogoIcon} />
          <h2 className="text-3xl font-medium">Ecobazar</h2>
        </div>
        {/* Search Bar */}
        <SearchBar />
        <div className="flex items-center gap-4">
          <Link
            to="/wishlist"
            className="hover:text-[var(--main-color)] transition-colors"
          >
            <BsHeart className="text-2xl" />
          </Link>
          <div className="w-px h-6 bg-gray-300"></div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-3 hover:text-[var(--main-color)] transition-colors"
          >
            <HiOutlineShoppingBag className="text-2xl" />
            <div className="flex flex-col gap-1.5">
              <span className="text-gray-700 text-xs font-normal">
                Shopping cart:
              </span>
              <span className="text-sm font-medium text-gray-900">$57.00</span>
            </div>
          </button>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default MainNav;
