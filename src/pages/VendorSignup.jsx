import React, { useState, useEffect } from "react";
import {
  FaStore,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaHeadset,
  FaPercentage,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import SignupBg from "../assets/SignupBg.png";

const VendorSignup = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    shopName: "",
    email: "",
    password: "",
    confirmPassword: "",
    category: "",
    phone: "",
  });
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <FaUsers size={40} />,
      title: "Millions of Shoppers",
      description:
        "Access to a vast customer base actively searching for products like yours.",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Secure Payments",
      description:
        "Safe and reliable payment processing with fraud protection and instant settlements.",
    },
    {
      icon: <FaPercentage size={40} />,
      title: "Low Commission",
      description:
        "Industry-leading low commission rates to maximize your profits.",
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Growth Tools",
      description:
        "Analytics dashboard and marketing tools to grow your business exponentially.",
    },
    {
      icon: <FaHeadset size={40} />,
      title: "24/7 Support",
      description:
        "Dedicated vendor support team available round the clock to help you succeed.",
    },
    {
      icon: <FaStore size={40} />,
      title: "Easy Setup",
      description:
        "Get your shop up and running in minutes with our intuitive vendor dashboard.",
    },
  ];
  const testimonials = [
    {
      quote:
        "Vendora transformed my small business into a thriving online store. Within 3 months, my sales tripled!",
      name: "Adewale Johnson",
      role: "Electronics Vendor",
      avatar: "A",
    },
    {
      quote:
        "The platform is incredibly easy to use, and the support team is always there when I need help. Best decision ever!",
      name: "Fatima Bello",
      role: "Fashion Vendor",
      avatar: "F",
    },
    {
      quote:
        "Low commission rates mean I keep more of what I earn. Vendora truly cares about vendor success!",
      name: "Chioma Okafor",
      role: "Beauty & Health Vendor",
      avatar: "C",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vendor registration:", formData);
    alert(
      "Registration submitted! We will review your application and get back to you.",
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold font-serif italic text-blue-600">
              Vendora
            </h1>
          </Link>
          <div className="flex items-center gap-3 md:gap-6">
            <Link
              to="/"
              className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="hidden sm:block text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              Vendor Login
            </Link>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-3 md:px-6 py-1.5 md:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative bg-blue-600 text-white py-12 md:py-20 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${SignupBg})` }}
      >
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
              Start Your Success Story with Vendora
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-blue-100 drop-shadow-md">
              Join thousands of successful vendors reaching millions of
              customers. Grow your business with our powerful e-commerce
              platform.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Selling Today
            </button>
          </div>
          <div className="hidden lg:block">
            {/* Optional: You can add another image here or leave it empty */}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto py-12 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 dark:text-white">
          Why Sell on Vendora?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="text-blue-600 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Form */}
      {showForm && (
        <div className="max-w-2xl mx-auto py-12 md:py-16 px-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
              Register Your Shop
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Shop Name *
                </label>
                <input
                  type="text"
                  name="shopName"
                  required
                  value={formData.shopName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-black dark:text-white"
                  placeholder="Enter your shop name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="+234 xxx xxx xxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Shop Category *
                </label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                >
                  <option value="">Select a category</option>
                  <option value="all">All</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="home">Home & Garden</option>
                  <option value="beauty">Beauty & Health</option>
                  <option value="sports">Sports</option>
                  <option value="automobile">Automobile</option>
                  <option value="toys">Toys & Hobbies</option>
                  <option value="food">Food & Beverages</option>
                  <option value="books">Books & Stationery</option>
                  <option value="furniture">Furniture</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Create a strong password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Confirm your password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Register Shop
              </button>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Sign in here
                </button>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* CTA Section (if form not shown) */}
      {!showForm && (
        <div className="bg-blue-600 text-white py-12 md:py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Grow Your Business with Vendora
              </h1>
              <p className="text-base md:text-xl mb-6 md:mb-8 text-blue-100">
                Join thousands of successful vendors reaching millions of
                customers
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Selling Today
              </button>
            </div>
            <div className="hidden lg:block">
              {/* Vendor Testimonials */}
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((item, index) => (
                    <div key={index} className="min-w-full px-2">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                        <p className="text-lg mb-4 italic">"{item.quote}"</p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {item.avatar}
                          </div>
                          <div>
                            <p className="font-bold">{item.name}</p>
                            <p className="text-sm text-blue-100">{item.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentIndex === index ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorSignup;
