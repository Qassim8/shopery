import React, { useMemo, useState } from "react";
import { Link } from "react-router";
import {
  BsBox,
  BsTruck,
  BsCheckCircle,
  BsXCircle,
  BsClock,
  BsSearch,
  BsFilter,
  BsArrowRight,
  BsEye,
  BsArrowRepeat,
  BsDownload,
} from "react-icons/bs";
import AppLayout from "../../components/AppLayout";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import OrderHistoryTable from "../../components/OrdersHistoryTable";

const OrderHistory = () => {
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
    {
      id: "12348",
      date: "2024-01-15",
      status: "delivered",
      total: 89.99,
      items: 3,
    },
    {
      id: "12347",
      date: "2024-01-10",
      status: "shipped",
      total: 45.5,
      items: 5,
    },
    {
      id: "12346",
      date: "2024-01-05",
      status: "processing",
      total: 67.25,
      items: 2,
    },
    {
      id: "12351",
      date: "2024-01-15",
      status: "delivered",
      total: 89.99,
      items: 3,
    },
    {
      id: "12352",
      date: "2024-01-10",
      status: "shipped",
      total: 55.5,
      items: 2,
    },
    {
      id: "12350",
      date: "2024-01-05",
      status: "processing",
      total: 70.25,
      items: 8,
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
      columnHelper.accessor("total", {
        header: "Total",
        cell: (info) => {
          const rowData = info.row.original;
          return (
            <div className="grow flex items-center md:gap-1">
              <span className="font-semibold">
                ${info.getValue().toFixed(2)}
              </span>
              <span>({rowData.items} Products)</span>
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
          <Link className="text-(--main-color)" to={`${info.getValue()}`}>
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
    <div className="bg-white rounded-lg shadow-sm border border-gray-300">
      <div className="flex items-center justify-between mx-4 my-6">
        <h3 className="text-xl font-semibold text-gray-900">Order History</h3>
      </div>
      {/* Table */}
      <OrderHistoryTable table={table} orders={recentOrders} />
    </div>
  );
};

export default OrderHistory;
