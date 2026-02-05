import React from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import LandingNav from "../components/LandingNav";
import { FaCheckCircle, FaShoppingBag, FaArrowRight } from "react-icons/fa";

const OrderConfirmation = () => {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.orderId) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingNav />

      <div className="container mx-auto px-4 pt-16 pb-24 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="text-green-500 text-4xl" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2 font-serif">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order has been placed
            successfully.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-500 text-sm">Order Reference</span>
              <span className="font-mono font-bold text-gray-800">
                {state.orderId}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">Total Paid</span>
              <span className="font-bold text-blue-600">
                ₦{state.total?.toLocaleString()}
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-8 max-w-xs mx-auto">
            A confirmation email has been sent to your inbox. You can track your
            order status in your profile.
          </p>

          <div className="space-y-3">
            <Link
              to="/shop"
              className="block w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-200"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
