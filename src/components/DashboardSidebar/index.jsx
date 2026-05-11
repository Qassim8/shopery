import React, { useState } from "react";
import { BiArrowToRight } from "react-icons/bi";
import { BsGear, BsHeart } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import {
  MdDashboard,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { PiArrowsClockwiseFill } from "react-icons/pi";
import { NavLink, useLocation } from "react-router";

const menuItems = [
  { id: "/dashboard", label: "Dashboard", icon: MdDashboard },
  {
    id: "orders-history",
    label: "Orders History",
    icon: PiArrowsClockwiseFill,
  },
  { id: "wishlist", label: "Wishlist", icon: BsHeart },
  { id: "cart", label: "Shopping Cart", icon: HiOutlineShoppingBag },
  { id: "settings", label: "Settings", icon: BsGear },
  { id: "logout", label: "Log-Out", icon: GrLogout },
];

const DashboardSidebar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  return (
    <aside
      className={`bg-white rounded-md border border-gray-200 fixed md:relative top-0 left-0 h-full md:h-auto w-64 md:w-1/4 z-40 transform transition-transform ${
        show ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <button
        aria-label={show ? "Close sidebar" : "Open sidebar"}
        className="absolute top-4 -right-8 h-8 w-8 bg-(--main-color) text-white rounded-full flex md:hidden justify-center items-center transition-all cursor-pointer"
        onClick={() => setShow((s) => !s)}
      >
        {show ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
      </button>
      <div className="flex items-center gap-2 p-4">
        <img src="/logo-tree.png" alt="logo" className="w-6" />
        <h2 className="text-xl font-bold">Navigation</h2>
      </div>
      <nav className="flex flex-col pt-2 pb-5">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.id}
            className={`w-full p-4 flex items-center gap-2 text-left transition-colors ${
              location.pathname === item.id
                ? "bg-(--main-color)/10 text-gray-900 border-s-4 border-s-(--main-color)"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <item.icon
              className={`text-xl ${location.pathname === item.id ? "text-gray-900" : "text-gray-400"}`}
            />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
