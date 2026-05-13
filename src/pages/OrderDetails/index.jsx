import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router";
import { BsCheckCircle } from "react-icons/bs";
import AppLayout from "../../components/AppLayout";
import CartTable from "../../components/CartTable";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const OrderDetails = (props) => {
  const { id } = useParams();
  const propOrder = props.order;

  const mockOrder = {
    id: id || "#ECO-2024-001",
    date: "2024-01-15",
    status: "delivered",
    total: 89.99,
    subtotal: 75.48,
    items: [
      {
        id: 1,
        name: "Organic Tomatoes",
        quantity: 2,
        price: 12.99,
        image: "/tomatoes.jpg",
        description: "Fresh, vine-ripened organic tomatoes",
      },
      {
        id: 2,
        name: "Fresh Milk",
        quantity: 1,
        price: 4.99,
        image: "/milk.jpg",
        description: "Whole milk from grass-fed cows",
      },
    ],
    shipping: {
      address: {
        name: "John Doe",
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "United States",
      },
      method: "Standard Shipping",
      cost: 5.99,
      trackingNumber: "TRK123456789",
      carrier: "FedEx",
      estimatedDelivery: "2024-01-17",
      actualDelivery: "2024-01-16",
    },
    payment: {
      method: "Credit Card",
      lastFour: "4242",
      total: 89.99,
    },
    tax: 8.52,
  };

  const order = propOrder || mockOrder;
  const productCount = order.items?.length || 0;

  const [items, setItems] = useState([
    {
      id: 1,
      image: "/corn.png",
      title: "Green Apple",
      price: 14.99,
      quantity: 2,
    },
    {
      id: 2,
      image: "/apple.png",
      title: "Fresh Indian Malta",
      price: 10.99,
      quantity: 1,
    },
    {
      id: 3,
      image: "/tomato.png",
      title: "Organic Tomato",
      price: 8.99,
      quantity: 3,
    },
  ]);

  const columnHelper = createColumnHelper();

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
              <p className="font-semibold text-gray-900 truncate">
                {item.title}
              </p>
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
          return <p className="">x{info.getValue()}</p>;
        },
      }),
      columnHelper.accessor((row) => row.price * row.quantity, {
        header: "Subtotal",
        cell: (info) => (
          <div className="font-semibold text-gray-900">
            ${info.getValue().toFixed(2)}
          </div>
        ),
      }),
    ],
    [columnHelper],
  );

  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const timeline = [
    {
      status: "Order Placed",
      date: "2024-01-15 10:30 AM",
      description: "Your order has been placed",
      completed: true,
    },
    {
      status: "Processing",
      date: "2024-01-15 2:00 PM",
      description: "Preparing order",
      completed: true,
    },
    {
      status: "Shipped",
      date: "2024-01-16 9:00 AM",
      description: "Order shipped",
      completed: true,
    },
    {
      status: "Delivered",
      date: "2024-01-16 3:45 PM",
      description: "Order delivered",
      completed: true,
    },
  ];

  return (
    <div className="border border-gray-300 rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-b-gray-300">
        <div className="p-5">
          <h1 className="text-2xl font-semibold text-gray-900">
            Order Details
            <span className="text-sm text-gray-500 font-normal">
              {" "}
              · {order.date} · {productCount} Products
            </span>
          </h1>
        </div>
        <div className="p-5">
          <Link to="/orders" className="text-[var(--main-color)] font-medium">
            Back to List
          </Link>
        </div>
      </div>

      {/* Addresses + Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5">
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded border border-gray-300">
            <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase">
              Billing Address
            </h4>
            <p className="font-medium text-gray-900">
              {order.shipping.address.name}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {order.shipping.address.street}
              <br />
              {order.shipping.address.city}, {order.shipping.address.state}{" "}
              {order.shipping.address.zipCode}
              <br />
              {order.shipping.address.country}
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Email: dainne.resell@gmail.com
            </p>
            <p className="text-sm text-gray-600">Phone: (671) 555-0110</p>
          </div>

          <div className="bg-white p-5 rounded border border-gray-300">
            <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase">
              Shipping Address
            </h4>
            <p className="font-medium text-gray-900">
              {order.shipping.address.name}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {order.shipping.address.street}
              <br />
              {order.shipping.address.city}, {order.shipping.address.state}{" "}
              {order.shipping.address.zipCode}
              <br />
              {order.shipping.address.country}
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Email: dainne.resell@gmail.com
            </p>
            <p className="text-sm text-gray-600">Phone: (671) 555-0110</p>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white p-5 rounded border border-gray-300">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500">Order ID:</p>
                <p className="font-medium text-gray-900">{order.id}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Payment Method:</p>
                <p className="font-medium text-gray-900">
                  {order.payment.method}
                </p>
              </div>
            </div>

            <div className="space-y-2 border-t pt-3">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal:</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Discount:</span>
                <span>20%</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-semibold text-green-600 pt-2 border-t">
                <span>Total</span>
                <span className="text-gray-900">${order.total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="p-5">
        <div className="relative">
          <div className="absolute left-6 right-6 top-5 h-1 bg-gray-200"></div>
          <div className="flex items-center justify-between relative z-10 w-full">
            {timeline.map((step, idx) => (
              <div key={idx} className="flex-1">
                <div
                  className={` w-10 h-10 rounded-full flex items-center justify-center border-2 ${step.completed ? "bg-[var(--main-color)] border-[var(--main-color)]" : "bg-white border-dashed border-gray-300"}`}
                >
                  {step.completed ? (
                    <BsCheckCircle className="text-white" />
                  ) : (
                    <span className="text-sm text-gray-500">0{idx + 1}</span>
                  )}
                </div>
                <div className="text-sm text-gray-600 mt-2">{step.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products table */}
      <CartTable table={table} />
    </div>
  );
};

export default OrderDetails;
