import React, { useState } from "react";
import {
  FaWallet,
  FaShoppingBag,
  FaBox,
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
  FaPlus,
  FaFilter,
  FaBell,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import { useNavigate } from "react-router-dom";
import { useVendor } from "../../context/VendorProvider";

// Mock Data for different time ranges
const datasets = {
  Today: [
    { name: "6am", val: 120 },
    { name: "9am", val: 450 },
    { name: "12pm", val: 980 },
    { name: "3pm", val: 560 },
    { name: "6pm", val: 890 },
    { name: "9pm", val: 340 },
  ],
  "This Week": [
    { name: "Mon", val: 4000 },
    { name: "Tue", val: 3000 },
    { name: "Wed", val: 2000 },
    { name: "Thu", val: 2780 },
    { name: "Fri", val: 1890 },
    { name: "Sat", val: 2390 },
    { name: "Sun", val: 3490 },
  ],
  "This Month": [
    { name: "Week 1", val: 15400 },
    { name: "Week 2", val: 12300 },
    { name: "Week 3", val: 18200 },
    { name: "Week 4", val: 21500 },
  ],
  "This Year": [
    { name: "Jan", val: 45000 },
    { name: "Feb", val: 52000 },
    { name: "Mar", val: 48000 },
    { name: "Apr", val: 61000 },
    { name: "May", val: 55000 },
    { name: "Jun", val: 67000 },
    { name: "Jul", val: 72000 },
    { name: "Aug", val: 68000 },
    { name: "Sep", val: 74000 },
    { name: "Oct", val: 81000 },
    { name: "Nov", val: 95000 },
    { name: "Dec", val: 110000 },
  ],
};

const TinyChart = ({ color, data }) => (
  <div className="h-12 w-24">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <Area
          type="monotone"
          dataKey="val"
          stroke={color}
          fill={color}
          fillOpacity={0.2}
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

const VendorDashboard = () => {
  const navigate = useNavigate();
  const { products, orderStats } = useVendor();

  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [timeRange, setTimeRange] = React.useState("This Week");
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  // Mock notifications
  const notifications = [
    {
      id: 1,
      title: "New Order",
      message: "Order #12345 received",
      isRead: false,
    },
    {
      id: 2,
      title: "Order Shipped",
      message: "Order #12340 shipped",
      isRead: false,
    },
    {
      id: 3,
      title: "Customer Inquiry",
      message: "Question about product",
      isRead: true,
    },
    {
      id: 4,
      title: "KYC Approved",
      message: "Verification complete",
      isRead: true,
    },
  ];

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  // Select data based on filter
  const currentData = datasets[timeRange] || datasets["This Week"];

  // Dynamic stats generators (simulated based on time range)
  const getMultiplier = (range) => {
    switch (range) {
      case "Today":
        return 0.14; // ~1/7th
      case "This Week":
        return 1;
      case "This Month":
        return 4;
      case "This Year":
        return 52;
      default:
        return 1;
    }
  };

  const multiplier = getMultiplier(timeRange);

  const stats = [
    {
      title: "Total Revenue",
      value: `₦${(parseFloat(orderStats.totalRevenue) * multiplier).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      growth: timeRange === "This Year" ? "+125.3%" : "+15.3%",
      isPositive: true,
      icon: <FaWallet />,
      color: "#3b82f6",
    },
    {
      title: "Orders Processed",
      value: Math.floor(orderStats.totalOrders * multiplier),
      growth: "+5.1%",
      isPositive: true,
      icon: <FaShoppingBag />,
      color: "#8b5cf6",
    },
    {
      title: "Active Products",
      value: products.length,
      growth: "0%",
      isPositive: true, // Neutral
      icon: <FaBox />,
      color: "#f97316",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      growth: "+0.8%",
      isPositive: true,
      icon: <FaChartLine />,
      color: "#22c55e",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in relative">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Hello, Vendor! 👋
          </h1>
          <p className="text-gray-500">
            Here's what's happening with your store ({timeRange}).
          </p>
        </div>
        <div className="flex gap-3 relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="bg-white border text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition shadow-sm"
          >
            <FaFilter className="text-xs" /> Filter
          </button>

          {isFilterOpen && (
            <div className="absolute top-12 left-0 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-20 py-1">
              {["Today", "This Week", "This Month", "This Year"].map(
                (range) => (
                  <button
                    key={range}
                    onClick={() => {
                      setTimeRange(range);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition ${timeRange === range ? "font-bold text-blue-600 bg-blue-50" : "text-gray-600"}`}
                  >
                    {range}
                  </button>
                ),
              )}
            </div>
          )}

          {/* Notification Bell */}
          <div className="relative">
            <button
              onClick={() => setIsNotifOpen(!isNotifOpen)}
              className="bg-white border text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition shadow-sm relative"
            >
              <FaBell />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {unreadCount}
                </span>
              )}
            </button>

            {isNotifOpen && (
              <div className="absolute top-12 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-100 z-20 max-h-96 overflow-y-auto">
                <div className="p-3 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-bold text-gray-900">Notifications</h3>
                  <Link
                    to="/vendor/notifications"
                    className="text-blue-600 text-sm hover:underline"
                    onClick={() => setIsNotifOpen(false)}
                  >
                    View All
                  </Link>
                </div>
                <div className="divide-y divide-gray-100">
                  {notifications.slice(0, 5).map((notif) => (
                    <div
                      key={notif.id}
                      className={`p-3 cursor-pointer transition-colors ${
                        !notif.isRead
                          ? "bg-green-50 hover:bg-green-100"
                          : "bg-red-50 hover:bg-red-100"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {notif.title}
                          </h4>
                          <p className="text-gray-600 text-xs mt-1">
                            {notif.message}
                          </p>
                        </div>
                        {!notif.isRead && (
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-1"></span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate("/vendor/products/add")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition shadow-md shadow-blue-200"
          >
            <FaPlus className="text-xs" /> Add Product
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">
                  {stat.title}
                </p>
                <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
                  {stat.value}
                </h3>
              </div>
              <div
                className="p-2 rounded-lg bg-gray-50 text-xl"
                style={{ color: stat.color }}
              >
                {stat.icon}
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div
                className={`flex items-center text-xs font-bold ${stat.isPositive ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"} px-2 py-1 rounded-full`}
              >
                {stat.isPositive ? (
                  <FaArrowUp className="mr-1" />
                ) : (
                  <FaArrowDown className="mr-1" />
                )}
                {stat.growth}
              </div>
              <TinyChart color={stat.color} data={currentData} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Section */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-800">Sales Analytics</h2>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="text-xs text-gray-500">{timeRange}</span>
            </div>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={currentData}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="val"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorVal)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity / Tasks */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Pending Actions
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-3 rounded-lg bg-yellow-50 border border-yellow-100">
              <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full mt-1">
                <FaBox />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">
                  Low Stock Alert
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  Wireless Earbuds stock is below 10 units.
                </p>
                <button
                  onClick={() => navigate("/vendor/products")}
                  className="text-xs font-bold text-yellow-700 mt-2 hover:underline"
                >
                  Restock Now
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-lg bg-red-50 border border-red-100">
              <div className="bg-red-100 text-red-600 p-2 rounded-full mt-1">
                <FaWallet />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">
                  Verify Bank Account
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  Complete KYC to withdraw funds.
                </p>
                <button
                  onClick={() => navigate("/vendor/kyc")}
                  className="text-xs font-bold text-red-700 mt-2 hover:underline"
                >
                  Complete KYC
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
