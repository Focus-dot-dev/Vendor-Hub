import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBoxOpen,
  FaClipboardList,
  FaStore,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaBell,
  FaTimes,
  FaChartPie,
  FaUserShield,
} from "react-icons/fa";

const VendorLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/vendor/dashboard" },
    { name: "My Products", icon: <FaBoxOpen />, path: "/vendor/products" },
    { name: "Orders", icon: <FaClipboardList />, path: "/vendor/orders" },
    { name: "Analytics", icon: <FaChartPie />, path: "/vendor/analytics" },
    { name: "KYC & Compliance", icon: <FaUserShield />, path: "/vendor/kyc" },
    { name: "Store Profile", icon: <FaStore />, path: "/vendor/profile" },
    { name: "Settings", icon: <FaCog />, path: "/vendor/settings" },
  ];

  const closeMobileSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Mobile Overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          isMobile
            ? `fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : isSidebarOpen
              ? "w-64"
              : "w-20"
        } bg-blue-900 text-white transition-all duration-300 flex flex-col shadow-xl`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-blue-800">
          {isSidebarOpen ? (
            <>
              <h1 className="text-xl md:text-2xl font-bold font-serif italic">
                Vendor Portal
              </h1>
              {isMobile && (
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-white hover:text-blue-200"
                >
                  <FaTimes size={24} />
                </button>
              )}
            </>
          ) : (
            <span className="text-2xl font-bold font-serif italic mx-auto">
              V
            </span>
          )}
        </div>

        <nav className="flex-1 py-6 overflow-y-auto">
          <ul className="space-y-2 px-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={closeMobileSidebar}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "bg-blue-700 text-white shadow-md"
                      : "text-blue-100 hover:bg-blue-800 hover:text-white"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {(isSidebarOpen || isMobile) && (
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
            {(isSidebarOpen || isMobile) && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4 md:px-6 z-10">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-500 hover:text-blue-600 focus:outline-none"
          >
            <FaBars size={24} />
          </button>

          <div className="flex items-center gap-3 md:gap-6">
            <button className="relative text-gray-500 hover:text-blue-600 transition-colors">
              <FaBell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                V
              </div>
              <span className="text-gray-700 font-medium hidden md:block text-sm">
                Vendor
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default VendorLayout;
