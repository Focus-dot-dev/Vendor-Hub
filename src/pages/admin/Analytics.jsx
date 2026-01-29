import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { FaCalendarAlt, FaDownload } from "react-icons/fa";

const Analytics = () => {
  const salesData = [
    { name: "Mon", sales: 4000, visits: 2400 },
    { name: "Tue", sales: 3000, visits: 1398 },
    { name: "Wed", sales: 2000, visits: 9800 },
    { name: "Thu", sales: 2780, visits: 3908 },
    { name: "Fri", sales: 1890, visits: 4800 },
    { name: "Sat", sales: 2390, visits: 3800 },
    { name: "Sun", sales: 3490, visits: 4300 },
  ];

  const trafficData = [
    { name: "Direct", value: 400 },
    { name: "Social", value: 300 },
    { name: "Organic", value: 300 },
    { name: "Referral", value: 200 },
  ];

  const demographicsData = [
    { name: "18-24", value: 2400 },
    { name: "25-34", value: 4567 },
    { name: "35-44", value: 1398 },
    { name: "45-54", value: 9800 },
    { name: "55+", value: 3908 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Analytics Dashboard
          </h1>
          <p className="text-gray-500 text-sm">
            Detailed insights into platform performance
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <FaCalendarAlt /> Last 7 Days
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <FaDownload /> Export Report
          </button>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales & Traffic Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Sales & Visits Overview
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={salesData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorSales)"
                />
                <Area
                  type="monotone"
                  dataKey="visits"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorVisits)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Demographics Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            User Demographics
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demographicsData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Legend />
                <Bar
                  dataKey="value"
                  fill="#4F46E5"
                  radius={[4, 4, 0, 0]}
                  name="Users"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Secondary Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Traffic Sources Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 col-span-1">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Traffic Sources
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trafficData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {trafficData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Small Stats Cards or Additional Widgets */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 col-span-2">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Top Performing Products
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-gray-500 border-b border-gray-100">
                <tr>
                  <th className="pb-3 font-medium">Product Name</th>
                  <th className="pb-3 font-medium">Units Sold</th>
                  <th className="pb-3 font-medium">Revenue</th>
                  <th className="pb-3 font-medium text-right">Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr className="group hover:bg-gray-50 transition-colors">
                  <td className="py-3 text-gray-800 font-medium">
                    Wireless Headphones
                  </td>
                  <td className="py-3 text-gray-600">1,234</td>
                  <td className="py-3 text-gray-600">$45,670</td>
                  <td className="py-3 text-green-500 font-medium text-right">
                    +12%
                  </td>
                </tr>
                <tr className="group hover:bg-gray-50 transition-colors">
                  <td className="py-3 text-gray-800 font-medium">
                    Smart Watch Series 5
                  </td>
                  <td className="py-3 text-gray-600">980</td>
                  <td className="py-3 text-gray-600">$32,100</td>
                  <td className="py-3 text-green-500 font-medium text-right">
                    +8.5%
                  </td>
                </tr>
                <tr className="group hover:bg-gray-50 transition-colors">
                  <td className="py-3 text-gray-800 font-medium">
                    Gaming Laptop
                  </td>
                  <td className="py-3 text-gray-600">540</td>
                  <td className="py-3 text-gray-600">$120,500</td>
                  <td className="py-3 text-red-500 font-medium text-right">
                    -2.4%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
