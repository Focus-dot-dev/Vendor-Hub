import React from "react";
import LandingNav from "../components/LandingNav";
import { useAuth } from "../context/AuthContext";
import { Navigate, Link } from "react-router-dom";
import {
  FaBoxOpen,
  FaChevronRight,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const CustomerOrders = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated && !user) {
    return <Navigate to="/login" replace />;
  }

  // Mock Orders Data
  const orders = [
    {
      id: "ORD-29384",
      date: "2024-02-15",
      total: 45000,
      status: "Delivered",
      items: ["Wireless Headphones", "USB-C Cable"],
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&auto=format&fit=crop&q=60",
    },
    {
      id: "ORD-92837",
      date: "2024-02-10",
      total: 12500,
      status: "Processing",
      items: ["Phone Case", "Screen Protector"],
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=100&auto=format&fit=crop&q=60",
    },
    {
      id: "ORD-10293",
      date: "2024-01-28",
      total: 89000,
      status: "Cancelled",
      items: ["Gaming Mouse", "Mechanical Keyboard"],
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=100&auto=format&fit=crop&q=60",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "text-green-600 bg-green-50 border-green-200";
      case "Processing":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "Cancelled":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <FaCheckCircle />;
      case "Processing":
        return <FaClock />;
      case "Cancelled":
        return <FaTimesCircle />;
      default:
        return <FaBoxOpen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {orders.map((order, index) => (
            <div
              key={order.id}
              className={`p-6 flex flex-col md:flex-row items-center gap-6 hover:bg-gray-50 transition-colors ${index !== orders.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              <div className="w-full md:w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
                {/* Placeholder for first item image */}
                <img
                  src={order.image}
                  alt="Order Item"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-gray-900">{order.id}</h3>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1 w-fit mx-auto md:mx-0 ${getStatusColor(order.status)}`}
                  >
                    {getStatusIcon(order.status)}
                    {order.status}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-1">
                  Placed on {order.date}
                </p>
                <p className="text-sm font-medium text-gray-800">
                  {order.items.join(", ")} {order.items.length > 2 && "..."}
                </p>
              </div>

              <div className="text-right w-full md:w-auto flex flex-row md:flex-col justify-between items-center md:items-end">
                <span className="text-lg font-bold text-blue-600">
                  ₦{order.total.toLocaleString()}
                </span>
                <Link
                  to={`/orders/${order.id}`}
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium mt-0 md:mt-2"
                >
                  View Details <FaChevronRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerOrders;
