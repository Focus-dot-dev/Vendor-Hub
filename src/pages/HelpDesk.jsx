import React, { useState } from "react";
import {
  FaQuestionCircle,
  FaEnvelope,
  FaPhone,
  FaSearch,
} from "react-icons/fa";
import LandingNav from "../components/LandingNav";

const HelpDesk = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const faqs = [
    {
      category: "orders",
      question: "How do I track my order?",
      answer:
        "You can track your order by going to 'My Orders' in your account and clicking on the specific order. You'll see real-time tracking information and estimated delivery date.",
    },
    {
      category: "orders",
      question: "Can I cancel my order?",
      answer:
        "Yes, you can cancel your order within 24 hours of placing it. Go to 'My Orders', select the order, and click 'Cancel Order'. Refunds will be processed within 5-7 business days.",
    },
    {
      category: "shipping",
      question: "What are the shipping costs?",
      answer:
        "We offer free shipping on all orders above ₦50,000. For orders below this amount, a flat shipping fee of ₦2,500 applies within Lagos and ₦5,000 for other states.",
    },
    {
      category: "shipping",
      question: "How long does delivery take?",
      answer:
        "Delivery typically takes 2-5 business days within Lagos and 5-7 business days for other states. Express delivery options are available at checkout.",
    },
    {
      category: "payment",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major debit/credit cards, bank transfers, and mobile money payments. All transactions are secured with industry-standard encryption.",
    },
    {
      category: "payment",
      question: "Is my payment information secure?",
      answer:
        "Absolutely! We use SSL encryption and comply with PCI DSS standards to ensure your payment information is completely secure.",
    },
    {
      category: "returns",
      question: "What is your return policy?",
      answer:
        "We offer a 14-day return policy for most items. Products must be unused and in original packaging. Contact our support team to initiate a return.",
    },
    {
      category: "account",
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page. Enter your email address and we'll send you a password reset link.",
    },
  ];

  const categories = [
    { id: "all", name: "All Topics" },
    { id: "orders", name: "Orders" },
    { id: "shipping", name: "Shipping" },
    { id: "payment", name: "Payment" },
    { id: "returns", name: "Returns" },
    { id: "account", name: "Account" },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingNav />

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <FaQuestionCircle className="text-6xl text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
            How Can We Help You?
          </h1>
          <p className="text-gray-600 text-lg">
            Search our knowledge base or contact support
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-lg"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden group"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-100">
                  {faq.answer}
                </div>
              </details>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl">
              <p className="text-gray-600">
                No results found. Try a different search term or category.
              </p>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Still Need Help?
          </h2>
          <p className="text-center mb-6 text-blue-100">
            Our support team is here to assist you
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="mailto:support@vendora.com"
              className="bg-white text-blue-600 px-6 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <FaEnvelope />
              Email Support
            </a>
            <a
              href="tel:+2348012345678"
              className="bg-white text-blue-600 px-6 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <FaPhone />
              Call Us
            </a>
          </div>
          <p className="text-center mt-4 text-sm text-blue-100">
            Available Monday - Friday, 9:00 AM - 6:00 PM WAT
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
