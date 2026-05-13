import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import AppLayout from "../../components/AppLayout";
import {
  BsArrowRight,
  BsBell,
  BsBox,
  BsCheckCircle,
  BsClock,
  BsCreditCard,
  BsGear,
  BsHeart,
  BsPerson,
  BsTruck,
  BsXCircle,
} from "react-icons/bs";
import { BiSolidMapPin } from "react-icons/bi";
import DashboardSidebar from "../../components/DashboardSidebar";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    memberSince: "January 2023",
    avatar: "/user-avatar.jpg",
  };

  // Mock recent orders
  // const recentOrders = [
  //   {
  //     id: "#12345",
  //     date: "2024-01-15",
  //     status: "delivered",
  //     total: 89.99,
  //     items: 3,
  //   },
  //   {
  //     id: "#12344",
  //     date: "2024-01-10",
  //     status: "shipped",
  //     total: 45.5,
  //     items: 2,
  //   },
  //   {
  //     id: "#12343",
  //     date: "2024-01-05",
  //     status: "processing",
  //     total: 67.25,
  //     items: 1,
  //   },
  // ];

  // // Mock wishlist items
  // const wishlistItems = [
  //   { id: 1, name: "Organic Tomatoes", price: 12.99, image: "/tomatoes.jpg" },
  //   { id: 2, name: "Fresh Milk", price: 4.99, image: "/milk.jpg" },
  //   { id: 3, name: "Whole Grain Bread", price: 8.5, image: "/bread.jpg" },
  // ];

  // const getStatusIcon = (status) => {
  //   switch (status) {
  //     case "delivered":
  //       return <BsCheckCircle className="text-green-500" />;
  //     case "shipped":
  //       return <BsTruck className="text-blue-500" />;
  //     case "processing":
  //       return <BsClock className="text-yellow-500" />;
  //     default:
  //       return <BsXCircle className="text-red-500" />;
  //   }
  // };

  // const getStatusColor = (status) => {
  //   switch (status) {
  //     case "delivered":
  //       return "text-green-600 bg-green-50";
  //     case "shipped":
  //       return "text-blue-600 bg-blue-50";
  //     case "processing":
  //       return "text-yellow-600 bg-yellow-50";
  //     default:
  //       return "text-red-600 bg-red-50";
  //   }
  // };

  // const renderOverview = () => (
  //   <div className="space-y-8">
  //     {/* Welcome Section */}
  //     <div className="bg-linear-to-r from-(--main-color) to-green-600 text-white p-8 rounded-lg">
  //       <div className="flex items-center gap-4">
  //         <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
  //           <BsPerson className="text-2xl" />
  //         </div>
  //         <div>
  //           <h2 className="text-2xl font-bold">Welcome back, {user.name}!</h2>
  //           <p className="text-green-100">Member since {user.memberSince}</p>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Quick Stats */}
  //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="flex items-center justify-between">
  //           <div>
  //             <p className="text-gray-600">Total Orders</p>
  //             <p className="text-3xl font-bold text-gray-900">24</p>
  //           </div>
  //           <BsBox className="text-3xl text-(--main-color)" />
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="flex items-center justify-between">
  //           <div>
  //             <p className="text-gray-600">Wishlist Items</p>
  //             <p className="text-3xl font-bold text-gray-900">
  //               {wishlistItems.length}
  //             </p>
  //           </div>
  //           <BsHeart className="text-3xl text-red-500" />
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="flex items-center justify-between">
  //           <div>
  //             <p className="text-gray-600">Total Spent</p>
  //             <p className="text-3xl font-bold text-gray-900">$1,247</p>
  //           </div>
  //           <BsCreditCard className="text-3xl text-blue-500" />
  //         </div>
  //       </div>
  //     </div>

  //     {/* Recent Orders & Wishlist */}
  //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  //       {/* Recent Orders */}
  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="flex items-center justify-between mb-6">
  //           <h3 className="text-xl font-semibold text-gray-900">
  //             Recent Orders
  //           </h3>
  //           <Link
  //             to="/orders"
  //             className="text-(--main-color) hover:text-green-700 flex items-center gap-1"
  //           >
  //             View All <BsArrowRight />
  //           </Link>
  //         </div>

  //         <div className="space-y-4">
  //           {recentOrders.slice(0, 3).map((order) => (
  //             <div
  //               key={order.id}
  //               className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
  //             >
  //               <div className="flex items-center gap-3">
  //                 {getStatusIcon(order.status)}
  //                 <div>
  //                   <p className="font-medium text-gray-900">{order.id}</p>
  //                   <p className="text-sm text-gray-600">
  //                     {order.date} • {order.items} items
  //                   </p>
  //                 </div>
  //               </div>
  //               <div className="text-right">
  //                 <p className="font-semibold text-gray-900">${order.total}</p>
  //                 <span
  //                   className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}
  //                 >
  //                   {order.status}
  //                 </span>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>

  //       {/* Wishlist Preview */}
  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="flex items-center justify-between mb-6">
  //           <h3 className="text-xl font-semibold text-gray-900">Wishlist</h3>
  //           <Link
  //             to="/wishlist"
  //             className="text-(--main-color) hover:text-green-700 flex items-center gap-1"
  //           >
  //             View All <BsArrowRight />
  //           </Link>
  //         </div>

  //         <div className="space-y-4">
  //           {wishlistItems.slice(0, 3).map((item) => (
  //             <div
  //               key={item.id}
  //               className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
  //             >
  //               <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
  //                 <BsHeart className="text-red-500" />
  //               </div>
  //               <div className="flex-1">
  //                 <p className="font-medium text-gray-900">{item.name}</p>
  //                 <p className="text-sm text-gray-600">${item.price}</p>
  //               </div>
  //               <button className="text-(--main-color) hover:text-green-700">
  //                 <BsArrowRight />
  //               </button>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const renderOrders = () => (
  //   <div className="space-y-6">
  //     <div className="flex items-center justify-between">
  //       <h2 className="text-2xl font-bold text-gray-900">My Orders</h2>
  //       <div className="flex gap-2">
  //         <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color)">
  //           <option>All Orders</option>
  //           <option>Delivered</option>
  //           <option>Shipped</option>
  //           <option>Processing</option>
  //         </select>
  //       </div>
  //     </div>

  //     <div className="space-y-4">
  //       {recentOrders.map((order) => (
  //         <div
  //           key={order.id}
  //           className="bg-white p-6 rounded-lg shadow-sm border"
  //         >
  //           <div className="flex items-center justify-between mb-4">
  //             <div className="flex items-center gap-3">
  //               {getStatusIcon(order.status)}
  //               <div>
  //                 <p className="font-semibold text-gray-900">{order.id}</p>
  //                 <p className="text-sm text-gray-600">
  //                   Ordered on {order.date}
  //                 </p>
  //               </div>
  //             </div>
  //             <div className="text-right">
  //               <p className="text-xl font-bold text-gray-900">
  //                 ${order.total}
  //               </p>
  //               <span
  //                 className={`text-sm px-3 py-1 rounded-full ${getStatusColor(order.status)}`}
  //               >
  //                 {order.status}
  //               </span>
  //             </div>
  //           </div>

  //           <div className="flex items-center justify-between">
  //             <p className="text-gray-600">{order.items} items</p>
  //             <div className="flex gap-2">
  //               <Link
  //                 to={`/orders/${order.id}`}
  //                 className="px-4 py-2 text-(--main-color) border border-(--main-color) rounded-lg hover:bg-(--main-color) hover:text-white transition-colors"
  //               >
  //                 View Details
  //               </Link>
  //               <button className="px-4 py-2 bg-(--main-color) text-white rounded-lg hover:bg-green-700 transition-colors">
  //                 Reorder
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  // const renderWishlist = () => (
  //   <div className="space-y-6">
  //     <h2 className="text-2xl font-bold text-gray-900">My Wishlist</h2>

  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //       {wishlistItems.map((item) => (
  //         <div
  //           key={item.id}
  //           className="bg-white p-6 rounded-lg shadow-sm border"
  //         >
  //           <div className="flex items-center gap-4 mb-4">
  //             <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
  //               <BsHeart className="text-red-500 text-xl" />
  //             </div>
  //             <div>
  //               <h3 className="font-semibold text-gray-900">{item.name}</h3>
  //               <p className="text-lg font-bold text-(--main-color)">
  //                 ${item.price}
  //               </p>
  //             </div>
  //           </div>

  //           <div className="flex gap-2">
  //             <button className="flex-1 bg-(--main-color) text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
  //               Add to Cart
  //             </button>
  //             <button className="p-2 text-gray-400 hover:text-red-500">
  //               <BsXCircle className="text-xl" />
  //             </button>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  // const renderPayment = () => (
  //   <div className="space-y-6">
  //     <div className="flex items-center justify-between">
  //       <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
  //       <button className="bg-(--main-color) text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
  //         Add New Card
  //       </button>
  //     </div>

  //     <div className="space-y-4">
  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="flex items-center justify-between">
  //           <div className="flex items-center gap-3">
  //             <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
  //               <span className="text-white text-xs font-bold">VISA</span>
  //             </div>
  //             <div>
  //               <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
  //               <p className="text-sm text-gray-600">Expires 12/25</p>
  //             </div>
  //           </div>
  //           <div className="flex gap-2">
  //             <button className="text-gray-400 hover:text-gray-600">
  //               Edit
  //             </button>
  //             <button className="text-red-500 hover:text-red-700">
  //               Remove
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const renderAddresses = () => (
  //   <div className="space-y-6">
  //     <div className="flex items-center justify-between">
  //       <h2 className="text-2xl font-bold text-gray-900">Addresses</h2>
  //       <button className="bg-(--main-color) text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
  //         Add New Address
  //       </button>
  //     </div>

  //     <div className="space-y-4">
  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="flex items-start justify-between">
  //           <div>
  //             <p className="font-medium text-gray-900 mb-1">Home Address</p>
  //             <p className="text-gray-600">
  //               123 Main Street
  //               <br />
  //               Apt 4B
  //               <br />
  //               New York, NY 10001
  //             </p>
  //             <p className="text-sm text-gray-500 mt-2">
  //               Default shipping address
  //             </p>
  //           </div>
  //           <div className="flex gap-2">
  //             <button className="text-gray-400 hover:text-gray-600">
  //               Edit
  //             </button>
  //             <button className="text-red-500 hover:text-red-700">
  //               Remove
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const renderNotifications = () => (
  //   <div className="space-y-6">
  //     <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>

  //     <div className="space-y-4">
  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="flex items-center justify-between">
  //           <div>
  //             <p className="font-medium text-gray-900">Order Updates</p>
  //             <p className="text-sm text-gray-600">
  //               Get notified about order status changes
  //             </p>
  //           </div>
  //           <label className="relative inline-flex items-center cursor-pointer">
  //             <input type="checkbox" className="sr-only peer" defaultChecked />
  //             <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--main-color)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--main-color)"></div>
  //           </label>
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="flex items-center justify-between">
  //           <div>
  //             <p className="font-medium text-gray-900">Promotions</p>
  //             <p className="text-sm text-gray-600">
  //               Receive special offers and discounts
  //             </p>
  //           </div>
  //           <label className="relative inline-flex items-center cursor-pointer">
  //             <input type="checkbox" className="sr-only peer" />
  //             <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--main-color)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--main-color)"></div>
  //           </label>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const renderSettings = () => (
  //   <div className="space-y-6">
  //     <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>

  //     <div className="bg-white p-6 rounded-lg shadow-sm border space-y-6">
  //       <div>
  //         <h3 className="text-lg font-semibold text-gray-900 mb-4">
  //           Personal Information
  //         </h3>
  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">
  //               First Name
  //             </label>
  //             <input
  //               type="text"
  //               defaultValue="John"
  //               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color)"
  //             />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">
  //               Last Name
  //             </label>
  //             <input
  //               type="text"
  //               defaultValue="Doe"
  //               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color)"
  //             />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">
  //               Email
  //             </label>
  //             <input
  //               type="email"
  //               defaultValue={user.email}
  //               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color)"
  //             />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">
  //               Phone
  //             </label>
  //             <input
  //               type="tel"
  //               defaultValue="+1 (555) 123-4567"
  //               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color)"
  //             />
  //           </div>
  //         </div>
  //       </div>

  //       <div className="pt-6 border-t">
  //         <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
  //         <div className="space-y-4">
  //           <button className="text-(--main-color) hover:text-green-700 font-medium">
  //             Change Password
  //           </button>
  //           <br />
  //           <button className="text-(--main-color) hover:text-green-700 font-medium">
  //             Enable Two-Factor Authentication
  //           </button>
  //         </div>
  //       </div>

  //       <div className="pt-6 border-t">
  //         <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
  //           Delete Account
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const renderContent = () => {
  //   switch (activeTab) {
  //     case "overview":
  //       return renderOverview();
  //     case "orders":
  //       return renderOrders();
  //     case "wishlist":
  //       return renderWishlist();
  //     case "payment":
  //       return renderPayment();
  //     case "addresses":
  //       return renderAddresses();
  //     case "notifications":
  //       return renderNotifications();
  //     case "settings":
  //       return renderSettings();
  //     default:
  //       return renderOverview();
  //   }
  // };

  return (
    <AppLayout>
      <div className="container py-8">
        <div className="md:flex gap-8">
          {/* Sidebar */}
          <DashboardSidebar />
          {/* Main Content */}
          <div className="grow w-full lg:w-3/4">
            <Outlet />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
