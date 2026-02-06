import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";
import LandingNav from "../components/LandingNav";
import ProductCard from "../components/ProductCard";

const CustomerWishlist = () => {
  // Mock wishlist data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      price: 45000,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      rating: 4.5,
      vendor: "TechHub Nigeria",
    },
    {
      id: 2,
      title: "Smart Watch Series 7",
      price: 125000,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      rating: 4.8,
      vendor: "GadgetWorld",
    },
    {
      id: 3,
      title: "Premium Leather Wallet",
      price: 18000,
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
      rating: 4.3,
      vendor: "Fashion Hub",
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingNav />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 font-serif">
              My Wishlist
            </h1>
            <p className="text-gray-600">
              {wishlistItems.length}{" "}
              {wishlistItems.length === 1 ? "item" : "items"} saved
            </p>
          </div>
          <FaHeart className="text-4xl text-red-500" />
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="relative">
                <ProductCard
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  vendor={item.vendor}
                />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors group"
                  title="Remove from wishlist"
                >
                  <FaTrash className="text-gray-600 group-hover:text-red-500 transition-colors" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <FaHeart className="text-6xl text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your Wishlist is Empty
            </h2>
            <p className="text-gray-600 mb-6">
              Start adding products you love to your wishlist
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <FaShoppingCart />
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerWishlist;
