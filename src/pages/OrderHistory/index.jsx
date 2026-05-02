import React, { useState } from "react";
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
  BsDownload
} from "react-icons/bs";
import AppLayout from "../../components/AppLayout";

const OrderHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  // Mock orders data
  const orders = [
    {
      id: "#ECO-2024-001",
      date: "2024-01-15",
      status: "delivered",
      total: 89.99,
      items: [
        { name: "Organic Tomatoes", quantity: 2, price: 12.99 },
        { name: "Fresh Milk", quantity: 1, price: 4.99 },
        { name: "Whole Grain Bread", quantity: 1, price: 8.50 }
      ],
      shipping: 5.99,
      tax: 8.52,
      deliveryDate: "2024-01-17",
      trackingNumber: "TRK123456789"
    },
    {
      id: "#ECO-2024-002",
      date: "2024-01-10",
      status: "shipped",
      total: 45.50,
      items: [
        { name: "Free-Range Eggs", quantity: 1, price: 6.99 },
        { name: "Organic Apples", quantity: 3, price: 8.50 }
      ],
      shipping: 4.99,
      tax: 4.02,
      deliveryDate: "2024-01-12",
      trackingNumber: "TRK987654321"
    },
    {
      id: "#ECO-2024-003",
      date: "2024-01-05",
      status: "processing",
      total: 67.25,
      items: [
        { name: "Grass-Fed Beef", quantity: 1, price: 25.99 },
        { name: "Seasonal Vegetables", quantity: 2, price: 15.50 }
      ],
      shipping: 6.99,
      tax: 5.77,
      deliveryDate: null,
      trackingNumber: null
    },
    {
      id: "#ECO-2024-004",
      date: "2023-12-28",
      status: "cancelled",
      total: 34.99,
      items: [
        { name: "Organic Honey", quantity: 1, price: 12.99 }
      ],
      shipping: 3.99,
      tax: 3.01,
      deliveryDate: null,
      trackingNumber: null
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <BsCheckCircle className="text-green-500" />;
      case 'shipped':
        return <BsTruck className="text-blue-500" />;
      case 'processing':
        return <BsClock className="text-yellow-500" />;
      case 'cancelled':
        return <BsXCircle className="text-red-500" />;
      default:
        return <BsBox className="text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-50';
      case 'shipped':
        return 'text-blue-600 bg-blue-50';
      case 'processing':
        return 'text-yellow-600 bg-yellow-50';
      case 'cancelled':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusText = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;

    let matchesDate = true;
    if (dateFilter !== 'all') {
      const orderDate = new Date(order.date);
      const now = new Date();
      const diffTime = Math.abs(now - orderDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      switch (dateFilter) {
        case 'last7':
          matchesDate = diffDays <= 7;
          break;
        case 'last30':
          matchesDate = diffDays <= 30;
          break;
        case 'last90':
          matchesDate = diffDays <= 90;
          break;
        default:
          matchesDate = true;
      }
    }

    return matchesSearch && matchesStatus && matchesDate;
  });

  return (
    <AppLayout>
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order History</h1>
          <p className="text-gray-600">Track and manage all your orders</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders by ID or product name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
              />
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
            >
              <option value="all">All Status</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>

            {/* Date Filter */}
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
            >
              <option value="all">All Time</option>
              <option value="last7">Last 7 days</option>
              <option value="last30">Last 30 days</option>
              <option value="last90">Last 90 days</option>
            </select>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.length === 0 ? (
            <div className="bg-white p-12 rounded-lg shadow-sm border text-center">
              <BsBox className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || statusFilter !== 'all' || dateFilter !== 'all'
                  ? "Try adjusting your search or filters"
                  : "You haven't placed any orders yet"}
              </p>
              <Link
                to="/shop"
                className="inline-block bg-[var(--main-color)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                {/* Order Header */}
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(order.status)}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                        <p className="text-sm text-gray-600">Ordered on {order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">${order.total}</p>
                      <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>
                  </div>

                  {/* Order Items Preview */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2">
                        {order.items.length} item{order.items.length > 1 ? 's' : ''}: {order.items.map(item => item.name).join(', ')}
                      </p>
                      {order.trackingNumber && (
                        <p className="text-sm text-gray-600">
                          Tracking: <span className="font-medium">{order.trackingNumber}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={`/orders/${order.id}`}
                      className="flex items-center gap-2 px-4 py-2 text-[var(--main-color)] border border-[var(--main-color)] rounded-lg hover:bg-[var(--main-color)] hover:text-white transition-colors"
                    >
                      <BsEye />
                      View Details
                    </Link>

                    {order.status === 'delivered' && (
                      <button className="flex items-center gap-2 px-4 py-2 bg-[var(--main-color)] text-white rounded-lg hover:bg-green-700 transition-colors">
                        <BsArrowRepeat />
                        Reorder
                      </button>
                    )}

                    {order.status === 'shipped' && order.trackingNumber && (
                      <button className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                        <BsTruck />
                        Track Package
                      </button>
                    )}

                    <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <BsDownload />
                      Invoice
                    </button>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6 bg-gray-50">
                  <h4 className="font-semibold text-gray-900 mb-3">Items in this order</h4>
                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                            <BsBox className="text-gray-400" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Subtotal:</span>
                      <span>${(order.total - order.shipping - order.tax).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Shipping:</span>
                      <span>${order.shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Tax:</span>
                      <span>${order.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-gray-900 mt-2">
                      <span>Total:</span>
                      <span>${order.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Load More */}
        {filteredOrders.length > 0 && (
          <div className="text-center mt-8">
            <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              Load More Orders
            </button>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default OrderHistory;