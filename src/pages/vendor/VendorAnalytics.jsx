import React from "react";
import {
  LineChart,
  Line,
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
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "Mon", sales: 4000, visits: 2400 },
  { name: "Tue", sales: 3000, visits: 1398 },
  { name: "Wed", sales: 2000, visits: 9800 },
  { name: "Thu", sales: 2780, visits: 3908 },
  { name: "Fri", sales: 1890, visits: 4800 },
  { name: "Sat", sales: 2390, visits: 3800 },
  { name: "Sun", sales: 3490, visits: 4300 },
];

const pieData = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 300 },
  { name: "Home", value: 300 },
  { name: "Others", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const VendorAnalytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Analytics & Reports
          </h1>
          <p className="text-gray-500 mt-1">
            Deep dive into your store's performance
          </p>
        </div>
        <div>
          <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm outline-none">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* Main Revenue Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-bold text-gray-700 mb-6">
          Revenue Overview
        </h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorSales)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visitor Stats */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold text-gray-700 mb-6">Store Visits</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Bar dataKey="visits" fill="#8884d8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-gray-700 mb-2">
            Sales by Category
          </h3>
          <div className="h-64 w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 text-sm text-gray-600 mt-4">
            {pieData.map((entry, index) => (
              <div key={index} className="flex items-center gap-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                ></div>
                <span>{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorAnalytics;
