import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";

const LandingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("NG");

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

  const handleSelect = (code) => {
    setSelectedCountry(code);
    setIsOpen(false);
  };

  return (
    <>
      <nav>
        <div className="flex justify-between items-center bg-blue-600 px-24 py-2 relative z-50 border-b border-gray-400">
          <div className="flex items-center gap-10">
            <div>
              <h1 className="text-2xl font-bold font-serif italic text-white">
                Vendora
              </h1>
            </div>
            <div className="flex items-center gap-2 bg-blue-500 p-2 rounded-xl">
              <FaSearch size={20} color="white" />
              <input
                type="search"
                placeholder=""
                className="bg-blue-500 outline-none text-black placeholder-white"
              />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <FiShoppingCart size={30} color="white" />

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

            <span className="text-white">|</span>
            <Link
              to="/login"
              className="flex items-center hover:bg-blue-800 hover:scale-110 transition-all bg-blue-500 px-2 rounded-xl"
            >
              <CgProfile size={20} color="white" />
              <span className=" text-white px-2 py-2 transition-colors">
                Login
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center px-24 py-2 text-white">
          <ul className="flex items-center gap-8">
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
            <li>Helpdesk</li>
            <li>Sell on Vendora</li>
            <li>About Us</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default LandingNav;
