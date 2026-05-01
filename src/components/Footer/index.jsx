import React from "react";
import { FaLeaf } from "react-icons/fa";

const Footer = () => {
  const sections = [
    {
      title: "My Account",
      links: ["My Account", "Order History", "Shopping Cart", "Wishlist"],
    },
    {
      title: "Helps",
      links: ["Contact", "Faqs", "Terms & Condition", "Privacy Policy"],
    },
    { title: "Proxy", links: ["About", "Shop", "Product", "Track Order"] },
    {
      title: "Categories",
      links: [
        "Fruit & Vegetables",
        "Meat & Fish",
        "Bread & Bakery",
        "Beauty & Health",
      ],
    },
  ];

  return (
    <footer className="bg-[#1b1a1a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          <div className="">
            <div className="flex items-center gap-2 text-2xl font-bold mb-4">
              <FaLeaf className="text-(--main-color)" />
              <span>Ecobazar</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="text-sm flex items-center">
              <p className="border-b border-(--main-color) inline-block mb-2">
                (219) 555-0114
              </p>
              <span className="mx-2 text-gray-500">or</span>
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
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 flex justify-between items-center gap-4 text-xs text-gray-500">
          <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
          <div className="flex gap-4 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              className="h-4 opacity-50"
              alt="visa"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              className="h-6 opacity-50"
              alt="mastercard"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              className="h-4 opacity-50"
              alt="paypal"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
