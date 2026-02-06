import React, { useState } from "react";
import LandingNav from "../components/LandingNav";
import { useAuth } from "../context/AuthContext";
import { Navigate, Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
} from "react-icons/fa";

const CustomerProfile = () => {
  const { user, isAuthenticated } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  if (!isAuthenticated && !user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Navigation (Could be a component) */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl border-2 border-white shadow-md">
                {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
              <div>
                <h2 className="font-bold text-gray-900">{user?.name}</h2>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </div>
            <nav className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-medium transition-colors">
                <FaUser size={18} />
                Personal Information
              </button>
              <Link
                to="/addresses"
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors"
              >
                <FaMapMarkerAlt size={18} />
                Addresses
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Personal Information
              </h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 px-4 py-2 rounded-lg transition-colors"
              >
                <FaEdit />
                {isEditing ? "Cancel" : "Edit"}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Full Name
                </label>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-800">
                  <FaUser className="text-gray-400" />
                  {user?.name || "N/A"}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Email Address
                </label>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-800">
                  <FaEnvelope className="text-gray-400" />
                  {user?.email || "N/A"}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Phone Number
                </label>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-800">
                  <FaPhone className="text-gray-400" />
                  +234 800 000 0000
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Delivery Address
                </label>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-800">
                  <FaMapMarkerAlt className="text-gray-400" />
                  123, Lagos Street, Ikeja
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
