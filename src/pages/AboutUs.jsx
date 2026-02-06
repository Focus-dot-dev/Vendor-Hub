import React from "react";
import { FaRocket, FaUsers, FaShieldAlt, FaHeart } from "react-icons/fa";
import LandingNav from "../components/LandingNav";

const AboutUs = () => {
  const values = [
    {
      icon: <FaRocket className="text-4xl text-blue-600" />,
      title: "Innovation",
      description:
        "We constantly evolve our platform to provide the best e-commerce experience for both vendors and customers.",
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: "Community",
      description:
        "Building a thriving marketplace where vendors and customers connect, grow, and succeed together.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-purple-600" />,
      title: "Trust & Security",
      description:
        "Your security is our priority. We ensure safe transactions and protect your data with industry-leading standards.",
    },
    {
      icon: <FaHeart className="text-4xl text-red-600" />,
      title: "Customer First",
      description:
        "Every decision we make is centered around delivering exceptional value and service to our users.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Active Vendors" },
    { number: "500,000+", label: "Happy Customers" },
    { number: "1M+", label: "Products Listed" },
    { number: "50+", label: "Cities Covered" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingNav />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            About Vendora
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Nigeria's leading multi-vendor marketplace connecting quality
            vendors with millions of customers
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Founded in 2020, Vendora was born from a simple vision: to empower
              Nigerian entrepreneurs and businesses by providing them with a
              world-class platform to reach customers across the nation.
            </p>
            <p>
              What started as a small team with big dreams has grown into one of
              Nigeria's most trusted e-commerce platforms. We've helped
              thousands of vendors build successful online businesses while
              providing millions of customers with access to quality products at
              competitive prices.
            </p>
            <p>
              Today, Vendora stands as a testament to the power of technology in
              transforming commerce. We're not just a marketplace – we're a
              community of entrepreneurs, innovators, and customers working
              together to shape the future of retail in Nigeria.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To democratize e-commerce in Nigeria by providing an accessible,
                secure, and efficient platform that empowers vendors to grow
                their businesses and enables customers to shop with confidence.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To become Africa's most trusted and innovative multi-vendor
                marketplace, setting the standard for online commerce and
                fostering economic growth across the continent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're a vendor looking to grow your business or a customer
            seeking quality products, Vendora is here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/vendorSignup"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Become a Vendor
            </a>
            <a
              href="/shop"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Start Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
