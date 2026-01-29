import React from "react";
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
} from "react-icons/fa";

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
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-sm md:text-base">
          Download Report
        </button>
      </div>

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
