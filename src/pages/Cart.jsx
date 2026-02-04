import React from "react";
import LandingNav from "../components/LandingNav";
import { useCart } from "../context/CartContext.js";
import { Link } from "react-router-dom";
import { FaTrash, FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <LandingNav />
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm max-w-md w-full">
            <div className="mb-6 flex justify-center">
              <span className="text-6xl">🛒</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <LandingNav />
      <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-24">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 font-serif">
          Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    {/* Image */}
                    <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-blue-600 font-bold">
                        ₦{item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus size={12} />
                      </button>
                      <span className="w-8 text-center font-semibold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remove item"
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 px-6 py-4 flex justify-between items-center sm:hidden">
                <button
                  onClick={clearCart}
                  className="text-red-500 text-sm font-semibold hover:text-red-700"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 mb-4">
                Proceed to Checkout
              </button>

              <Link
                to="/shop"
                className="flex items-center justify-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                <FaArrowLeft size={14} />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
