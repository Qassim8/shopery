import React, { useState, useMemo } from "react";
import { BsTrash, BsHeart, BsX } from "react-icons/bs";
import { HiMinus, HiPlus } from "react-icons/hi2";
import { Link } from "react-router";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import AppLayout from "../../components/AppLayout";
import Breadcrumb from "../../components/Breadcrumb";
import CartTable from "../../components/CartTable";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "/corn.png",
      title: "Green Apple",
      price: 14.99,
      originalPrice: 19.99,
      quantity: 2,
    },
    {
      id: 2,
      image: "/apple.png",
      title: "Fresh Indian Malta",
      price: 10.99,
      originalPrice: 14.99,
      quantity: 1,
    },
    {
      id: 3,
      image: "/tomato.png",
      title: "Organic Tomato",
      price: 8.99,
      originalPrice: 12.99,
      quantity: 3,
    },
  ]);

  const columnHelper = createColumnHelper();

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

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
                <p className="font-semibold text-gray-900 truncate">
                  {item.title}
                </p>
              </div>
            </div>
          );
        },
      }),
      columnHelper.accessor("price", {
        header: "Price",
        cell: (info) => (
          <div className="text-nowrap">
            <span className="text-gray-600">$</span>
            <span className="font-semibold text-gray-900">
              {info.getValue().toFixed(2)}
            </span>
          </div>
        ),
      }),
      columnHelper.accessor("quantity", {
        header: "Quantity",
        cell: (info) => {
          const item = info.row.original;
          return (
            <div className="flex justify-between items-center gap-2 p-1 border border-gray-300 rounded-full">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors cursor-pointer"
              >
                <HiMinus size={16} />
              </button>
              <input
                type="text"
                readOnly
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
                className="w-5"
              />
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors cursor-pointer"
              >
                <HiPlus size={13} />
              </button>
            </div>
          );
        },
      }),
      columnHelper.accessor((row) => row.price * row.quantity, {
        header: "Total",
        cell: (info) => (
          <div className="font-semibold text-gray-900">
            ${info.getValue().toFixed(2)}
          </div>
        ),
      }),
      columnHelper.display({
        header: "-",
        cell: (info) => (
          <button
            onClick={() => removeItem(info.cell.id)}
            className="tetx-gray-400 flex justify-center items-center h-5 w-5 border border-gray-400 rounded-full cursor-pointer transition-colors"
            title="Remove from Wishlist"
          >
            <BsX size={12} />
          </button>
        ),
      }),
    ],
    [],
  );

  const table = useReactTable({
    data: cartItems,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Cart", path: "/cart", active: true },
  ];

  return (
    <AppLayout>
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Cart Section */}
      <section className="py-10 bg-gray-50">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg">
              <div className="text-8xl text-gray-300 mb-6">🛒</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link
                to="/shop"
                className="inline-block bg-(--main-color) text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Table */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden ">
                <CartTable table={table} />
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 rounded-lg p-3 md:p-6 sticky top-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Subtotal ({cartItems.length}{" "}
                        {cartItems.length === 1 ? "item" : "items"})
                      </span>
                      <span className="font-semibold">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span className="text-(--main-color)">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter promo code"
                        className="w-3/4 md:w-full md:flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-(--main-color)"
                      />
                      <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 space-y-3">
                    <Link
                      to="/checkout"
                      className="block w-full bg-(--main-color) text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Proceed to Checkout
                    </Link>
                    <Link
                      to="/shop"
                      className="block w-full border border-gray-300 text-gray-700 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </AppLayout>
  );
};

export default Cart;
