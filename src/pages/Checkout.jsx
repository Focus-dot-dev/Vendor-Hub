import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import LandingNav from "../components/LandingNav";
import { FaLock, FaCreditCard, FaMoneyBillWave } from "react-icons/fa";

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate costs
  const shippingCost = 1500; // Flat rate shipping
  const total = cartTotal + shippingCost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      // Generate a random order ID
      const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
      navigate("/order-confirmation", { state: { orderId, total } });
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <LandingNav />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your cart is empty
          </h2>
          <Link
            to="/shop"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingNav />

      <div className="container mx-auto px-4 md:px-12 lg:px-24 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 font-serif">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Shipping & Payment */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Information */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  1
                </span>
                Shipping Information
              </h2>
              <form id="checkout-form" onSubmit={handlePayment}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full rounded-lg border-gray-300 bg-gray-200 focus:border-blue-500 focus:ring-blue-500 py-2.5"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full rounded-lg border-gray-300 bg-gray-200 focus:border-blue-500 focus:ring-blue-500 py-2.5"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-lg border-gray-300 bg-gray-200 focus:border-blue-500 focus:ring-blue-500 py-2.5"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full rounded-lg border-gray-300 bg-gray-200 focus:border-blue-500 focus:ring-blue-500 py-2.5"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    className="w-full rounded-lg border-gray-300 bg-gray-200 focus:border-blue-500 focus:ring-blue-500 py-2.5"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      className="w-full rounded-lg border-gray-300 bg-gray-200 focus:border-blue-500 focus:ring-blue-500 py-2.5"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      required
                      className="w-full rounded-lg border-gray-300 bg-gray-200 focus:border-blue-500 focus:ring-blue-500 py-2.5"
                      value={formData.state}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Zip / Postal Code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      className="w-full rounded-lg border-gray-300 bg-gray-200 focus:border-blue-500 focus:ring-blue-500 py-2.5"
                      value={formData.zip}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  2
                </span>
                Payment Method
              </h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 border rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex items-center gap-2">
                      <FaCreditCard className="text-gray-600" />
                      <span className="font-semibold text-gray-800">
                        Pay with Card
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 w-10 bg-gray-200 rounded"></div>
                    <div className="h-6 w-10 bg-gray-200 rounded"></div>
                  </div>
                </label>

                <label className="flex items-center justify-between p-4 border rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex items-center gap-2">
                      <FaMoneyBillWave className="text-gray-600" />
                      <span className="font-semibold text-gray-800">
                        Bank Transfer
                      </span>
                    </div>
                  </div>
                </label>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                <FaLock className="text-green-600" />
                Payments are processed securely by Paystack.
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>
              <div className="max-h-80 overflow-y-auto mb-6 pr-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg border"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">
                        {item.title}
                      </h4>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </span>
                        <span className="font-medium text-gray-900">
                          ₦{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₦{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>₦{shippingCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-xl text-gray-900 pt-2 border-t">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
              </div>

              <button
                form="checkout-form"
                type="submit"
                disabled={isProcessing}
                className="w-full cursor-pointer bg-blue-600 text-white py-3.5 rounded-xl font-bold text-lg mt-8 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  `Pay ₦${total.toLocaleString()}`
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
