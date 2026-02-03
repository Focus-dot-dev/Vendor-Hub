import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext.js";
import { useCart } from "../context/CartContext.js";

const LandingNav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("NG");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { isDarkMode, toggleTheme } = useTheme();
  const { cartCount } = useCart();

  const countries = [
    { code: "NG", name: "Nigeria" },
    { code: "US", name: "United States" },
    { code: "UK", name: "United Kingdom" },
    { code: "CA", name: "Canada" },
    { code: "GH", name: "Ghana" },
  ];

  const productCategories = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Beauty & Health",
    "Automobiles",
    "Toys & Hobbies",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleCategoryDropdown = () => setIsCategoryOpen(!isCategoryOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleSelect = (code) => {
    setSelectedCountry(code);
    setIsOpen(false);
  };

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
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

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

            {/* Country Dropdown */}
            <div className="relative">
              <div
                className="countries flex items-center gap-2 cursor-pointer"
                onClick={toggleDropdown}
              >
                <CiGlobe size={30} color="white" />
                <h6 className="text-white text-sm">{selectedCountry}</h6>
              </div>

              {isOpen && (
                <div className="absolute top-10 right-0 bg-white rounded-lg shadow-xl w-40 overflow-hidden text-gray-800 animate-fade-in">
                  <ul className="flex flex-col">
                    {countries.map((country) => (
                      <li
                        key={country.code}
                        className={`px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm transition-colors ${selectedCountry === country.code ? "bg-blue-50 font-semibold text-blue-600" : ""}`}
                        onClick={() => handleSelect(country.code)}
                      >
                        {country.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <span className="text-white hidden lg:block">|</span>
            <Link
              to="/login"
              className="flex items-center hover:bg-blue-800 hover:scale-110 transition-all bg-blue-500 px-2 py-2 rounded-xl"
            >
              <CgProfile size={20} color="white" />
              <span className="text-white px-2 transition-colors hidden lg:block">
                Login
              </span>
            </Link>
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
            <li className="hover:text-blue-200 transition-colors cursor-pointer">
              Helpdesk
            </li>
            <li className="hover:text-blue-200 transition-colors cursor-pointer">
              Sell on Vendora
            </li>
            <li className="hover:text-blue-200 transition-colors cursor-pointer">
              About Us
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
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                  aria-label="Toggle Dark Mode"
                >
                  {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                </button>
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
                <div className="relative">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <CiGlobe size={24} color="white" />
                    <span className="text-sm">{selectedCountry}</span>
                  </div>
                </div>
                <Link
                  to="/login"
                  className="flex items-center gap-2 bg-blue-500 px-3 py-2 rounded-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <CgProfile size={20} color="white" />
                  <span className="text-sm">Login</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default LandingNav;
