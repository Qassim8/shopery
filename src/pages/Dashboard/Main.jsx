import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
import {
  BsArrowRight,
  BsBox,
  BsCheckCircle,
  BsClock,
  BsCreditCard,
  BsHeart,
  BsPerson,
  BsTruck,
  BsXCircle,
} from "react-icons/bs";
import { Link } from "react-router";
import OrderHistoryTable from "../../components/OrdersHistoryTable";

const Main = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    memberSince: "January 2023",
    avatar: "/user-avatar.jpg",
  };

  //   Mock recent orders
  const [recentOrders, setRecentOrders] = useState([
    {
      id: "12345",
      date: "2024-01-15",
      status: "delivered",
      total: 89.99,
      items: 3,
    },
    {
      id: "12344",
      date: "2024-01-10",
      status: "shipped",
      total: 45.5,
      items: 2,
    },
    {
      id: "12343",
      date: "2024-01-05",
      status: "processing",
      total: 67.25,
      items: 1,
    },
  ]);

  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: "Order Id",
        cell: (info) => {
          return (
            <div className="flex flex-col md:flex-row gap-3 md:items-center min-w-0">
              #{info.getValue()}
            </div>
          );
        },
      }),
      columnHelper.accessor("date", {
        header: "Date",
        cell: (info) => <div className="text-nowrap">{info.getValue()}</div>,
      }),
      columnHelper.accessor((row) => row.total && row.items, {
        header: "Total",
        cell: (info) => {
          return (
            <div className="grow flex items-center md:gap-1">
              <span className="font-semibold">
                ${info.getValue().toFixed(2)}
              </span>
              <span>({info.getValue()} Products)</span>
            </div>
          );
        },
      }),
      columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => <div>{info.getValue()}</div>,
      }),
      columnHelper.accessor("id", {
        header: "-",
        cell: (info) => (
          <Link
            className="text-(--main-color)"
            to={`order-history/${info.getValue()}`}
          >
            View Details
          </Link>
        ),
      }),
    ],
    [columnHelper],
  );

  const table = useReactTable({
    data: recentOrders,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Welcome Section */}
        <div className="flex-1 border border-gray-300 p-5 rounded-lg">
          <div className="flex flex-col justify-center items-center text-center gap-4">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <BsPerson className="text-2xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{user.name}!</h2>
              <p className="text-gray-400">Customer</p>
              <Link className="text-(--main-color) font-bold">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="flex-1 border border-gray-300 p-5 rounded-lg flex flex-col gap-2">
          <p className="text-gray-500 text-sm">BILLING ADDRESS</p>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-500">
            4140 Parker Rd. Allentown, New Mexico 31134
          </p>
          <p>dainne.ressell@gmail.com</p>
          <p>(671) 555-0110</p>
          <Link className="text-(--main-color) font-bold">Edit Profile</Link>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-300">
        <div className="flex items-center justify-between mx-4 my-6">
          <h3 className="text-xl font-semibold text-gray-900">Recent Orders</h3>
          <Link
            to="/orders"
            className="text-(--main-color) hover:text-green-700 flex items-center gap-1"
          >
            View All
          </Link>
        </div>
        {/* Table */}
        <OrderHistoryTable table={table} orders={recentOrders} />
      </div>
    </div>
  );
};

export default Main;
