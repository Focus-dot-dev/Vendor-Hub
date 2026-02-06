import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  FaDollarSign,
  FaUsers,
  FaUserCheck,
  FaShoppingCart,
  FaTimes,
  FaDownload,
  FaCalendar,
  FaBell,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const StatsCard = ({ title, value, icon, color, trend }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex items-start justify-between border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
    <div>
      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
        {title}
      </p>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
        {value}
      </h3>
      {trend && (
        <p
          className={`text-xs font-semibold mt-2 ${trend >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {trend >= 0 ? "+" : ""}
          {trend}% from last month
        </p>
      )}
    </div>
    <div className={`p-3 rounded-lg ${color} text-white`}>{icon}</div>
  </div>
);

const AdminDashboard = () => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportType, setReportType] = useState("day");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  // Mock notifications
  const notifications = [
    {
      id: 1,
      title: "New Vendor Registration",
      message: "TechHub Nigeria pending approval",
      isRead: false,
    },
    {
      id: 2,
      title: "KYC Document Submitted",
      message: "GadgetWorld submitted documents",
      isRead: false,
    },
    {
      id: 3,
      title: "System Update Complete",
      message: "Maintenance completed",
      isRead: true,
    },
  ];

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleDownloadReport = () => {
    // Generate report based on selected options
    const reportData = {
      type: reportType,
      startDate: startDate || "N/A",
      endDate: endDate || "N/A",
      generatedAt: new Date().toISOString(),
    };

    // Create a simple CSV report
    const csvContent = `Dashboard Report
Generated: ${new Date().toLocaleString()}
Report Type: ${reportType}
${reportType === "custom" ? `Start Date: ${startDate}\nEnd Date: ${endDate}` : ""}

Total Revenue: $54,239
Total Vendors: 1,254
Pending KYC: 45
Total Orders: 8,543
`;

    // Download the report
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dashboard-report-${reportType}-${Date.now()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    setShowReportModal(false);
  };

  const data = [
    { name: "Jan", revenue: 4000, vendors: 24 },
    { name: "Feb", revenue: 3000, vendors: 13 },
    { name: "Mar", revenue: 2000, vendors: 98 },
    { name: "Apr", revenue: 2780, vendors: 39 },
    { name: "May", revenue: 1890, vendors: 48 },
    { name: "Jun", revenue: 2390, vendors: 38 },
    { name: "Jul", revenue: 3490, vendors: 43 },
  ];

  const recentActivity = [
    {
      id: 1,
      user: "John Doe",
      action: "Registered as Vendor",
      time: "2 mins ago",
      status: "Pending",
    },
    {
      id: 2,
      user: "Sarah Smith",
      action: "New Order #1234",
      time: "15 mins ago",
      status: "Completed",
    },
    {
      id: 3,
      user: "TechGiant Ltd",
      action: "KYC Document Uploaded",
      time: "1 hour ago",
      status: "Review",
    },
    {
      id: 4,
      user: "Mike Johnson",
      action: "Withdrawal Request",
      time: "3 hours ago",
      status: "Processing",
    },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          Dashboard Overview
        </h1>
        <div className="flex items-center gap-3">
          {/* Notification Bell */}
          <div className="relative">
            <button
              onClick={() => setIsNotifOpen(!isNotifOpen)}
              className="relative text-gray-600 hover:text-blue-600 transition-colors p-2"
            >
              <FaBell size={20} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown */}
            {isNotifOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-bold text-gray-900">Notifications</h3>
                  <Link
                    to="/admin/notifications"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
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
            onClick={() => setShowReportModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-sm md:text-base flex items-center gap-2"
          >
            <FaDownload />
            Download Report
          </button>
        </div>
      </div>

      {/* Report Generation Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Generate Report
              </h2>
              <button
                onClick={() => setShowReportModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Report Period
                </label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="day">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>

              {reportType === "custom" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleDownloadReport}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <FaDownload />
                  Download
                </button>
                <button
                  onClick={() => setShowReportModal(false)}
                  className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value="$54,239"
          icon={<FaDollarSign size={20} />}
          color="bg-blue-600"
          trend={12.5}
        />
        <StatsCard
          title="Total Vendors"
          value="1,254"
          icon={<FaUsers size={20} />}
          color="bg-indigo-500"
          trend={8.2}
        />
        <StatsCard
          title="Pending KYC"
          value="45"
          icon={<FaUserCheck size={20} />}
          color="bg-orange-500"
          trend={-2.4}
        />
        <StatsCard
          title="Total Orders"
          value="8,543"
          icon={<FaShoppingCart size={20} />}
          color="bg-green-500"
          trend={24.5}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4">
            Revenue Analytics
          </h3>
          <div className="h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563EB"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4">
            Vendor Growth
          </h3>
          <div className="h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Bar dataKey="vendors" fill="#4F46E5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 md:p-6 border-b border-gray-100">
          <h3 className="text-base md:text-lg font-bold text-gray-800">
            Recent Activity
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-4 md:px-6 py-3 md:py-4">User</th>
                <th className="px-4 md:px-6 py-3 md:py-4">Action</th>
                <th className="px-4 md:px-6 py-3 md:py-4 hidden sm:table-cell">
                  Time
                </th>
                <th className="px-4 md:px-6 py-3 md:py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentActivity.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 md:px-6 py-3 md:py-4 font-medium text-gray-800">
                    {item.user}
                  </td>
                  <td className="px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {item.action}
                  </td>
                  <td className="px-4 md:px-6 py-3 md:py-4 text-gray-500 hidden sm:table-cell">
                    {item.time}
                  </td>
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          item.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Pending"
                              ? "bg-blue-100 text-blue-700"
                              : item.status === "Review"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-gray-100 text-gray-700"
                        }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
