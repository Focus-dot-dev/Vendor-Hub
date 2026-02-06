import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { useCart } from "../context/CartContext.js";
import { useAuth } from "../context/AuthContext";
import { vendors } from "../data/products.js";

const LandingNav = () => {
  const navigate = useNavigate();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isVendorsOpen, setIsVendorsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const productCategories = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Beauty & Health",
    "Automobiles",
    "Toys & Hobbies",
  ];

  const toggleCategoryDropdown = () => setIsCategoryOpen(!isCategoryOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav className="bg-blue-600 dark:bg-gray-900 transition-colors duration-300">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-4 md:px-8 lg:px-24 py-3 relative z-50 border-b border-gray-400 dark:border-gray-700">
          {/* Logo and Search */}
          <div className="flex items-center gap-4 md:gap-10 flex-1">
            <div>
              <Link to="/">
                <h1 className="text-xl md:text-2xl font-bold font-serif italic text-white cursor-pointer">
                  Vendora
                </h1>
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-blue-500 dark:bg-gray-800 p-2 rounded-xl flex-1 max-w-md border border-transparent dark:border-gray-700">
              <FaSearch size={20} color="white" />
              <input
                type="search"
                placeholder="Search products..."
                className="bg-transparent outline-none text-white placeholder-white/70 w-full"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    navigate(`/shop?search=${e.target.value}`);
                  }
                }}
              />
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <Link to="/cart" className="relative group">
              <FiShoppingCart
                size={30}
                color="white"
                className="cursor-pointer group-hover:scale-110 transition-transform"
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-blue-600 dark:border-gray-900">
                  {cartCount}
                </span>
              )}
            </Link>

            <span className="text-white hidden lg:block">|</span>
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 hover:bg-blue-500/50 p-1.5 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold border-2 border-white">
                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <span className="text-white font-medium hidden lg:block">
                    {user.name ? user.name.split(" ")[0] : "User"}
                  </span>
                  <FaChevronDown size={10} className="text-white" />
                </button>

                {isProfileOpen && (
                  <div className="absolute top-12 right-0 bg-white rounded-lg shadow-xl w-48 overflow-hidden text-gray-800 animate-fade-in z-50">
                    <div className="px-4 py-3 border-b">
                      <p className="text-sm font-bold text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                    <ul className="py-1">
                      <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm">
                        <Link to="/profile">My Account</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm">
                        <Link to="/orders">Orders</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm">
                        <Link to="/wishlist">Wishlist</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm">
                        <Link to="/addresses">Addresses</Link>
                      </li>
                      <li
                        onClick={() => {
                          logout();
                          setIsProfileOpen(false);
                          navigate("/");
                        }}
                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-red-600 border-t border-gray-100"
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="flex items-center hover:bg-blue-800 hover:scale-110 transition-all bg-blue-500 px-3 py-2 rounded-xl"
                >
                  <CgProfile size={20} color="white" />
                  <span className="text-white ml-2 transition-colors hidden lg:block font-medium">
                    Login
                  </span>
                </Link>
                <Link
                  to="/signup"
                  className="hidden lg:flex items-center hover:bg-white hover:text-blue-600 transition-all border border-white px-3 py-2 rounded-xl text-white font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-3">
          <div className="flex items-center gap-2 bg-blue-500 p-2 rounded-xl">
            <FaSearch size={18} color="white" />
            <input
              type="search"
              placeholder="Search products..."
              className="bg-blue-500 outline-none text-black placeholder-white w-full text-sm"
            />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex justify-between items-center px-4 md:px-8 lg:px-24 py-2 text-white">
          <ul className="flex items-center gap-4 lg:gap-8">
            <li className="relative">
              <button
                onClick={toggleCategoryDropdown}
                className="flex items-center gap-2 hover:text-blue-200 transition-colors cursor-pointer"
              >
                Categories
                <FaChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isCategoryOpen && (
                <div className="absolute top-8 left-0 bg-white rounded-lg shadow-xl w-48 overflow-hidden text-gray-800 animate-fade-in z-50">
                  <ul className="flex flex-col py-1">
                    {productCategories.map((category, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer text-sm transition-colors"
                        onClick={() => setIsCategoryOpen(false)}
                      >
                        <Link
                          to={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                onClick={() => setIsVendorsOpen(!isVendorsOpen)}
                className="flex items-center gap-2 hover:text-blue-200 transition-colors cursor-pointer"
              >
                Trusted Vendors
                <FaChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${isVendorsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isVendorsOpen && (
                <div className="absolute top-8 left-0 bg-white rounded-lg shadow-xl w-48 overflow-hidden text-gray-800 animate-fade-in z-50">
                  <ul className="flex flex-col py-1">
                    {vendors.slice(0, 8).map((vendor, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer text-sm transition-colors"
                        onClick={() => setIsVendorsOpen(false)}
                      >
                        <Link to={`/shop?vendor=${encodeURIComponent(vendor)}`}>
                          {vendor}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li className="hover:text-blue-200 transition-colors cursor-pointer">
              <Link to="/help">Helpdesk</Link>
            </li>
            <li className="hover:text-blue-200 transition-colors cursor-pointer">
              Sell on Vendora
            </li>
            <li className="hover:text-blue-200 transition-colors cursor-pointer">
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-700 px-4 py-4 space-y-4">
            {/* Mobile Categories */}
            <div>
              <button
                onClick={toggleCategoryDropdown}
                className="flex items-center justify-between w-full text-white py-2"
              >
                <span>Categories</span>
                <FaChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isCategoryOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  {productCategories.map((category, index) => (
                    <li key={index} className="text-blue-100 py-1">
                      <Link
                        to={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => {
                          setIsCategoryOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Mobile Links */}
            <div className="text-white space-y-3">
              <div className="py-2 border-t border-blue-600">Helpdesk</div>
              <div className="py-2">Sell on Vendora</div>
              <div className="py-2">About Us</div>

              {/* Mobile Icons */}
              <div className="flex items-center gap-4 pt-4 border-t border-blue-600">
                <Link
                  to="/cart"
                  className="relative"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FiShoppingCart size={24} color="white" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-blue-600 dark:border-gray-900">
                      {cartCount}
                    </span>
                  )}
                </Link>
                {user ? (
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white text-sm bg-red-500 px-3 py-1.5 rounded-lg"
                    >
                      Logout
                    </button>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                    </div>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="flex items-center gap-2 bg-blue-500 px-3 py-2 rounded-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <CgProfile size={20} color="white" />
                      <span className="text-sm">Login</span>
                    </Link>
                    <Link
                      to="/signup"
                      className="flex items-center gap-2 border border-white px-3 py-2 rounded-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-sm">Sign Up</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default LandingNav;
