import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaUserCheck,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaBell,
} from "react-icons/fa";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/admin/dashboard" },
    { name: "Vendors", icon: <FaUsers />, path: "/admin/vendors" },
    { name: "KYC Requests", icon: <FaUserCheck />, path: "/admin/kyc" },
    { name: "Analytics", icon: <FaChartBar />, path: "/admin/analytics" },
    { name: "Settings", icon: <FaCog />, path: "/admin/settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-blue-900 text-white transition-all duration-300 flex flex-col shadow-xl z-20`}
      >
        <div className="h-16 flex items-center justify-center border-b border-blue-800">
          {isSidebarOpen ? (
            <h1 className="text-2xl font-bold font-serif italic">
              Vendora Admin
            </h1>
          ) : (
            <span className="text-2xl font-bold font-serif italic">V</span>
          )}
        </div>

        <nav className="flex-1 py-6 overflow-y-auto">
          <ul className="space-y-2 px-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-blue-100 hover:bg-blue-800 hover:text-white"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {isSidebarOpen && (
                    <span className="font-medium">{item.name}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-blue-800">
          <button className="flex items-center gap-4 text-blue-100 hover:text-red-300 transition-colors w-full px-4 py-2">
            <FaSignOutAlt className="text-xl" />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 z-10">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-500 hover:text-blue-600 focus:outline-none"
          >
            <FaBars size={24} />
          </button>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-blue-600 transition-colors">
              <FaBell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                A
              </div>
              <span className="text-gray-700 font-medium hidden md:block">
                Admin User
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
