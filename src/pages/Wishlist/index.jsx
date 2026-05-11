import React, { useState, useMemo } from "react";
import { BsHeart, BsTrash, BsHeartFill, BsX } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import AppLayout from "../../components/AppLayout";
import Breadcrumb from "../../components/Breadcrumb";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      image: "/corn.png",
      title: "Green Apple",
      price: 14.99,
      originalPrice: 19.99,
      inStock: true,
    },
    {
      id: 2,
      image: "/apple.png",
      title: "Fresh Indian Malta",
      price: 10.99,
      originalPrice: 14.99,
      inStock: true,
    },
    {
      id: 3,
      image: "/tomato.png",
      title: "Organic Tomato",
      price: 8.99,
      originalPrice: 12.99,
      inStock: false,
    },
    {
      id: 4,
      image: "/capsicum.png",
      title: "Green Capsicum",
      price: 12.68,
      originalPrice: null,
      inStock: true,
    },
    {
      id: 5,
      image: "/potato.png",
      title: "Big Potatoes",
      price: 35.68,
      originalPrice: 45.99,
      inStock: true,
    },
    {
      id: 6,
      image: "/mango.png",
      title: "Sweet Mango",
      price: 18.99,
      originalPrice: null,
      inStock: true,
    },
  ]);

  const columnHelper = createColumnHelper();

  const removeFromWishlist = (id) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    alert(`${item.title} added to cart!`);
  };

  const moveAllToCart = () => {
    const inStockItems = wishlistItems.filter((item) => item.inStock);
    if (inStockItems.length === 0) {
      alert("No items in stock to add to cart.");
      return;
    }
    alert(`${inStockItems.length} items added to cart!`);
  };

  const columns = useMemo(
    () => [
      columnHelper.accessor("title", {
        header: "Product",
        cell: (info) => {
          const item = info.row.original;
          return (
            <div className="flex flex-col md:flex-row gap-3 md:items-center min-w-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 md:w-20 h-16 md:h-20 object-cover rounded"
              />
              <div className="min-w-0">
                <p className="md:font-semibold text-sm md:text-[16px] text-gray-900 truncate">
                  {item.title}
                </p>
              </div>
            </div>
          );
        },
      }),
      columnHelper.accessor("price", {
        header: "Price",
        cell: (info) => {
          const item = info.row.original;
          return (
            <div className="text-nowrap">
              <div className="flex gap-2 items-center">
                <span className="font-semibold text-sm md:text-[16px] text-gray-900">
                  ${info.getValue().toFixed(2)}
                </span>
                {item.originalPrice && (
                  <span className="text-gray-400 line-through text-[12px] md:text-sm">
                    ${item.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          );
        },
      }),
      columnHelper.accessor("inStock", {
        header: "Status",
        cell: (info) => (
          <span
            className={`px-1 md:px-3 py-1 rounded-full text-[12px] md:text-sm md:font-semibold ${
              info.getValue()
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {info.getValue() ? "In Stock" : "Out of Stock"}
          </span>
        ),
      }),
      columnHelper.display({
        header: "Action",
        cell: (info) => {
          const item = info.row.original;
          return (
            <div className="flex gap-1 md:gap-16 items-center">
              <button
                onClick={() => item.inStock && addToCart(item)}
                disabled={!item.inStock}
                className={`hidden md:block text-[10px] md:text-sm py-2 px-1 md:px-5 bg-(--main-color) text-white rounded-full transition-colors`}
                title="Add to Cart"
              >
                Add to Cart
              </button>
              <button className="flex md:hidden text-white bg-(--main-color) p-2 rounded-full cursor-pointer">
                <HiOutlineShoppingBag />
              </button>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="tetx-gray-400 flex justify-center items-center h-5 w-5 border border-gray-400 rounded-full cursor-pointer transition-colors"
                title="Remove from Wishlist"
              >
                <BsX size={12} />
              </button>
            </div>
          );
        },
      }),
    ],
    [columnHelper],
  );

  const table = useReactTable({
    data: wishlistItems,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Wishlist", path: "/wishlist", active: true },
  ];

  return (
    <AppLayout>
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Wishlist Section */}
      <section className="py-10 bg-gray-50">
        <div className="container">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg">
              <div className="text-8xl text-gray-300 mb-6">❤️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your wishlist is empty
              </h2>
              <p className="text-gray-600 mb-8">
                Start adding items you love to your wishlist.
              </p>
              <Link
                to="/shop"
                className="inline-block bg-(--main-color) text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {/* Desktop View */}
              <div className="block overflow-x-auto">
                <table className="w-full border border-gray-300 overflow-x-scroll">
                  <thead className="border-b border-b-gray-300">
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            className="px-4 py-4 text-left font-normal text-gray-500 bg-white  border-y-gray-400"
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {table.getRowModel().rows.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b border-b-gray-300 hover:bg-gray-50 transition"
                      >
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id} className="p-2 md:p-4">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile View - Card Layout */}
              {/* <div className="md:hidden">
                {table.getRowModel().rows.map((row) => (
                  <div
                    key={row.id}
                    className="p-4 border-b flex flex-col gap-3"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <div
                        key={cell.id}
                        className="flex justify-between items-start"
                      >
                        <span className="font-semibold text-gray-600 text-sm">
                          {flexRender(cell.column.columnDef.header, {
                            column: cell.column,
                          })}
                        </span>
                        <span className="text-gray-900">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div> */}
            </div>
          )}

          {/* Related Actions */}
          {wishlistItems.length > 0 && (
            <div className="mt-12 text-center">
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Love these items?
                </h3>
                <p className="text-gray-600 mb-6">
                  Don't wait! These popular items might sell out soon.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/shop"
                    className="bg-[var(--main-color)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Continue Shopping
                  </Link>
                  <Link
                    to="/cart"
                    className="border border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    View Cart
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </AppLayout>
  );
};

export default Wishlist;
