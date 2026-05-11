import React from "react";
import { AiOutlineAlipay } from "react-icons/ai";
import { FaApplePay, FaLeaf, FaPaypal } from "react-icons/fa";
import { SiDiscover, SiVisa } from "react-icons/si";
import { Link } from "react-router";

const Footer = () => {
  const sections = [
    {
      title: "My Account",
      links: [
        { href: "/dashboard", title: "My Account" },
        { href: "/orders", title: "Order History" },
        { href: "/cart", title: "Shopping Cart" },
        { href: "/wishlist", title: "Wishlist" },
      ],
    },
    {
      title: "Helps",
      links: [
        { href: "/contact", title: "Contact" },
        { href: "/faq", title: "Faqs" },
        { href: "/terms", title: "Terms & Condition" },
        { href: "/privacy", title: "Privacy Policy" },
      ],
    },
    {
      title: "Proxy",
      links: [
        { href: "/about", title: "About" },
        { href: "/shop", title: "Shop" },
        { href: "/product", title: "Product" },
        { href: "/track-order", title: "Track Order" },
      ],
    },
    {
      title: "Categories",
      links: [
        { href: "/fruit-vegetables", title: "Fruit & Vegetables" },
        { href: "/meat-fish", title: "Meat & Fish" },
        { href: "/bread-bakery", title: "Bread & Bakery" },
        { href: "/beauty-health", title: "Beauty & Health" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1b1a1a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2">
            <Link
              to={"/"}
              className="flex items-center gap-2 text-2xl font-bold mb-4"
            >
              <img className="w-6 object-contain" src={"/logo-tree.png"} />
              <span>Ecobazar</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="text-sm flex items-center">
              <p className="border-b border-(--main-color) inline-block">
                (219) 555-0114
              </p>
              <p className="mx-2 text-gray-500">or</p>
              <p className="border-b border-(--main-color) inline-block">
                Proxy@gmail.com
              </p>
            </div>
          </div>

          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="text-gray-500 text-sm hover:text-white cursor-pointer transition-colors"
                  >
                    <Link to={link.href}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
          <div className="flex gap-2 items-center">
            <div className="h-10 w-12 flex justify-center items-center border border-white/20 rounded-md">
              <FaApplePay className="text-white text-3xl" />
            </div>

            <div className="h-10 w-12 flex justify-center items-center border border-white/20 rounded-md">
              <SiVisa className="text-white text-3xl" />
            </div>

            <div className="h-10 w-12 flex justify-center items-center border border-white/20 rounded-md">
              <SiDiscover className="text-amber-600 text-3xl" />
            </div>

            <div className="h-10 w-12 flex justify-center items-center border border-white/20 rounded-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                className="h-6"
                alt="mastercard"
              />
            </div>

            <div className="h-10 w-12 flex justify-center items-center border border-white/20 rounded-md">
              <AiOutlineAlipay className="text-blue-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
