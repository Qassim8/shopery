import { flexRender } from "@tanstack/react-table";
import React from "react";
import { Link } from "react-router";

const OrderHistoryTable = ({ orders, table }) => {
  return (
    <section className="">
      <div>
        {orders.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg">
            <div className="text-8xl text-gray-300 mb-6">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your orders history is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't ordered any products yet.
            </p>
          </div>
        ) : (
          <div>
            {/* Cart Table */}
            <div className="overflow-hidden">
              {/* Desktop View */}
              <div className="overflow-x-auto">
                <table className="w-full  overflow-x-scroll">
                  <thead className="bg-gray-200">
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            className="p-4 text-left font-normal uppercase"
                          >
                            {flexRender(header.column.columnDef.header)}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {table.getRowModel().rows.map((row) => (
                      <tr key={row.id} className=" hover:bg-gray-50 transition">
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id} className="p-4 text-sm">
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
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderHistoryTable;
