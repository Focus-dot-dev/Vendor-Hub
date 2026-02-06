import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <FaExclamationTriangle className="text-9xl text-yellow-500 mx-auto mb-6 animate-bounce" />
          <h1 className="text-8xl md:text-9xl font-bold text-gray-900 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for seems to have wandered off into
            the digital wilderness.
          </p>
        </div>

        {/* Suggestions */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Here's what you can do:
          </h3>
          <ul className="text-left space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Check if the URL is spelled correctly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Go back to the previous page</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Visit our homepage and start fresh</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Use the search to find what you need</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <FaHome />
            Go to Homepage
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
          >
            <FaSearch />
            Browse Products
          </Link>
        </div>

        {/* Help Link */}
        <div className="mt-8">
          <p className="text-gray-600">
            Need assistance?{" "}
            <Link
              to="/help"
              className="text-blue-600 font-semibold hover:underline"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
