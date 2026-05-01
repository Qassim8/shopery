import React from "react";
import { Link } from "react-router";
import { IoChevronForward } from "react-icons/io5";

const Breadcrumb = ({ items = [] }) => {
  const defaultItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop", active: true },
  ];

  const breadcrumbs = items.length > 0 ? items : defaultItems;

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-4">
      <div className="container">
        <div className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <IoChevronForward className="text-gray-400 text-xs" />
              )}
              {item.active ? (
                <span className="text-gray-600 font-medium">{item.label}</span>
              ) : (
                <Link
                  to={item.path}
                  className="text-[var(--main-color)] hover:underline transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
