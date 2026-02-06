import React from "react";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext.js";

const ProductCard = ({ id, image, title, price, rating, discount, vendor }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100 dark:border-gray-700 h-full flex flex-col">
      <Link to={`/product/${id}`}>
        <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discount && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
          <button
            className="absolute bottom-2 right-2 bg-blue-500 p-2 rounded-full shadow-md transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 hover:bg-blue-600 hover:text-white cursor-pointer z-10"
            onClick={(e) => {
              e.preventDefault(); // Prevent navigation
              addToCart({ id, image, title, price, rating, discount });
            }}
          >
            <FiShoppingCart size={18} />
          </button>
        </div>

        <div className="p-4 flex flex-col grow">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-1 line-clamp-2 text-sm h-10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <Link
            to={`/shop?vendor=${encodeURIComponent(vendor)}`}
            className="text-xs text-gray-500 hover:text-blue-500 mb-2 block"
            onClick={(e) => e.stopPropagation()}
          >
            Sold by: {vendor}
          </Link>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={12}
                className={
                  i < rating
                    ? "text-yellow-400"
                    : "text-gray-300 dark:text-gray-600"
                }
              />
            ))}
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
              ({rating}.0)
            </span>
          </div>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
              ₦{price.toLocaleString()}
            </span>
            {discount && (
              <span className="text-sm text-gray-400 line-through">
                ₦{(price / (1 - discount / 100)).toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
