import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaBox,
  FaTruck,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import LandingNav from "../components/LandingNav";

const CustomerOrderDetails = () => {
  const { orderId } = useParams();

  // Mock order data
  const order = {
    id: orderId,
    orderNumber: `ORD-${orderId}`,
    date: "2024-02-05",
    status: "shipped",
    total: 170000,
    shippingAddress: {
      name: "John Doe",
      phone: "+234 801 234 5678",
      address: "15 Admiralty Way, Lekki Phase 1",
      city: "Lagos",
      state: "Lagos State",
    },
    items: [
      {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        price: 45000,
        quantity: 2,
        vendor: "TechHub Nigeria",
      },
      {
        id: 2,
        name: "Smart Watch Series 7",
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        price: 125000,
        quantity: 1,
        vendor: "GadgetWorld",
      },
    ],
    timeline: [
      { status: "Order Placed", date: "Feb 5, 2024 10:30 AM", completed: true },
      { status: "Processing", date: "Feb 5, 2024 2:15 PM", completed: true },
      { status: "Shipped", date: "Feb 6, 2024 9:00 AM", completed: true },
      {
        status: "Out for Delivery",
        date: "Expected Feb 7, 2024",
        completed: false,
      },
      { status: "Delivered", date: "Pending", completed: false },
    ],
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-700",
      processing: "bg-blue-100 text-blue-700",
      shipped: "bg-purple-100 text-purple-700",
      delivered: "bg-green-100 text-green-700",
      cancelled: "bg-red-100 text-red-700",
    };
    return colors[status] || "bg-gray-100 text-gray-700";
  };

  const getStatusIcon = (status) => {
    const icons = {
      pending: <FaBox className="text-yellow-600" />,
      processing: <FaBox className="text-blue-600" />,
      shipped: <FaTruck className="text-purple-600" />,
      delivered: <FaCheckCircle className="text-green-600" />,
    };
    return icons[status] || <FaBox />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingNav />

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <Link
          to="/orders"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <FaArrowLeft />
          Back to Orders
        </Link>

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Order {order.orderNumber}
              </h1>
              <p className="text-gray-600">
                Placed on{" "}
                {new Date(order.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${getStatusColor(order.status)}`}
            >
              {getStatusIcon(order.status)}
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
          </div>

          {/* Order Timeline */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Order Status
            </h2>
            <div className="relative">
              {order.timeline.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 mb-6 last:mb-0"
                >
                  <div className="relative">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step.completed
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {step.completed ? (
                        <FaCheckCircle />
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      )}
                    </div>
                    {index < order.timeline.length - 1 && (
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-12 ${
                          step.completed ? "bg-green-500" : "bg-gray-200"
                        }`}
                      ></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold ${
                        step.completed ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {step.status}
                    </h3>
                    <p className="text-sm text-gray-600">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Address */}
          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              Shipping Address
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">
                {order.shippingAddress.name}
              </p>
              <p className="text-gray-600">{order.shippingAddress.phone}</p>
              <p className="text-gray-600 mt-2">
                {order.shippingAddress.address}
                <br />
                {order.shippingAddress.city}, {order.shippingAddress.state}
              </p>
            </div>
          </div>

          {/* Order Items */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Order Items
            </h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Vendor: {item.vendor}
                    </p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      ₦{item.price.toLocaleString()} each
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="max-w-md ml-auto space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₦{order.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t">
                <span>Total</span>
                <span>₦{order.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Track Shipment
          </button>
          <button className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerOrderDetails;
