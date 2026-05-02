import React from "react";
import { Link, useParams } from "react-router";
import AppLayout from "../../components/AppLayout";
import {
  BsArrowLeft,
  BsArrowRepeat,
  BsBox,
  BsChatDots,
  BsCheckCircle,
  BsCreditCard,
  BsDownload,
  BsTruck,
} from "react-icons/bs";
import { BiSolidMapPin } from "react-icons/bi";

const OrderDetails = () => {
  const { orderId } = useParams();

  // Mock order data - in real app, this would be fetched based on orderId
  const order = {
    id: orderId || "#ECO-2024-001",
    date: "2024-01-15",
    status: "delivered",
    total: 89.99,
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
      {
        id: 3,
        name: "Whole Grain Bread",
        quantity: 1,
        price: 8.5,
        image: "/bread.jpg",
        description: "Artisan whole grain bread, freshly baked",
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
    subtotal: 75.48,
  };

  const timeline = [
    {
      status: "Order Placed",
      date: "2024-01-15 10:30 AM",
      description: "Your order has been successfully placed",
      completed: true,
    },
    {
      status: "Payment Confirmed",
      date: "2024-01-15 10:32 AM",
      description: "Payment has been processed successfully",
      completed: true,
    },
    {
      status: "Order Processing",
      date: "2024-01-15 2:00 PM",
      description: "Your order is being prepared for shipment",
      completed: true,
    },
    {
      status: "Shipped",
      date: "2024-01-16 9:00 AM",
      description: "Your order has been shipped and is on its way",
      completed: true,
    },
    {
      status: "Delivered",
      date: "2024-01-16 3:45 PM",
      description: "Your order has been delivered successfully",
      completed: true,
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "delivered":
        return <BsCheckCircle className="text-green-500" />;
      case "shipped":
        return <BsTruck className="text-blue-500" />;
      default:
        return <BsBox className="text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "text-green-600 bg-green-50";
      case "shipped":
        return "text-blue-600 bg-blue-50";
      case "processing":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusText = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <AppLayout>
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/orders"
            className="inline-flex items-center gap-2 text-[var(--main-color)] hover:text-green-700 mb-4"
          >
            <BsArrowLeft />
            Back to Orders
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Order {order.id}
              </h1>
              <p className="text-gray-600">Ordered on {order.date}</p>
            </div>
            <div className="text-right">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${getStatusColor(order.status)}`}
              >
                {getStatusIcon(order.status)}
                <span className="font-medium">
                  {getStatusText(order.status)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Order Items */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Order Items
              </h2>
              <div className="space-y-6">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 pb-6 border-b border-gray-100 last:border-b-0 last:pb-0"
                  >
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BsBox className="text-2xl text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          Qty: {item.quantity}
                        </span>
                        <span className="font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal:</span>
                    <span>${order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping:</span>
                    <span>${order.shipping.cost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Tax:</span>
                    <span>${order.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg text-gray-900 pt-2 border-t border-gray-200">
                    <span>Total:</span>
                    <span>${order.total}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Timeline */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Order Timeline
              </h2>
              <div className="space-y-6">
                {timeline.map((event, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        event.completed
                          ? "bg-[var(--main-color)]"
                          : "bg-gray-200"
                      }`}
                    >
                      {event.completed ? (
                        <BsCheckCircle className="text-white text-lg" />
                      ) : (
                        <BsBox className="text-gray-400 text-lg" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {event.status}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {event.description}
                      </p>
                      <p className="text-xs text-gray-500">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Shipping Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BiSolidMapPin className="text-[var(--main-color)]" />
                Shipping Information
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-900">
                    {order.shipping.address.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {order.shipping.address.street}
                    <br />
                    {order.shipping.address.city},{" "}
                    {order.shipping.address.state}{" "}
                    {order.shipping.address.zipCode}
                    <br />
                    {order.shipping.address.country}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Method:</span>{" "}
                    {order.shipping.method}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Tracking:</span>{" "}
                    {order.shipping.trackingNumber}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Carrier:</span>{" "}
                    {order.shipping.carrier}
                  </p>
                  {order.shipping.actualDelivery && (
                    <p className="text-sm text-green-600 mt-2">
                      ✓ Delivered on {order.shipping.actualDelivery}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BsCreditCard className="text-[var(--main-color)]" />
                Payment Information
              </h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Method:</span>{" "}
                  {order.payment.method}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Card ending in:</span>{" "}
                  {order.payment.lastFour}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Total paid:</span> $
                  {order.payment.total}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[var(--main-color)] text-white rounded-lg hover:bg-green-700 transition-colors">
                  <BsArrowRepeat />
                  Reorder Items
                </button>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <BsDownload />
                  Download Invoice
                </button>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <BsChatDots />
                  Contact Support
                </button>
              </div>
            </div>

            {/* Help */}
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Need Help?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Have questions about your order? Our support team is here to
                help.
              </p>
              <div className="space-y-2">
                <Link
                  to="/contact"
                  className="block text-[var(--main-color)] hover:text-green-700 text-sm font-medium"
                >
                  Contact Support →
                </Link>
                <Link
                  to="/faq"
                  className="block text-[var(--main-color)] hover:text-green-700 text-sm font-medium"
                >
                  View FAQ →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default OrderDetails;
