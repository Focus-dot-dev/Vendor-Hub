import React, { useState } from "react";
import {
  FaBell,
  FaCheck,
  FaUserPlus,
  FaFileAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "vendor",
      title: "New Vendor Registration",
      message: "TechHub Nigeria has registered and pending approval",
      time: "5 minutes ago",
      isRead: false,
    },
    {
      id: 2,
      type: "kyc",
      title: "KYC Document Submitted",
      message: "GadgetWorld submitted KYC documents for review",
      time: "1 hour ago",
      isRead: false,
    },
    {
      id: 3,
      type: "system",
      title: "System Update Complete",
      message: "Platform maintenance completed successfully",
      time: "3 hours ago",
      isRead: true,
    },
    {
      id: 4,
      type: "alert",
      title: "High Order Volume",
      message: "Order volume increased by 45% today",
      time: "5 hours ago",
      isRead: true,
    },
    {
      id: 5,
      type: "vendor",
      title: "Vendor Suspended",
      message: "Fashion Hub account suspended due to policy violation",
      time: "1 day ago",
      isRead: true,
    },
  ]);

  const [filter, setFilter] = useState("all");

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notif) => ({ ...notif, isRead: true })),
    );
  };

  const getIcon = (type) => {
    switch (type) {
      case "vendor":
        return <FaUserPlus className="text-blue-500" />;
      case "kyc":
        return <FaFileAlt className="text-purple-500" />;
      case "alert":
        return <FaExclamationTriangle className="text-orange-500" />;
      default:
        return <FaBell className="text-gray-500" />;
    }
  };

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === "unread") return !notif.isRead;
    if (filter === "read") return notif.isRead;
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
          <p className="text-gray-600 text-sm mt-1">
            {unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}
          </p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            <FaCheck />
            Mark all as read
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 font-medium transition-colors ${
            filter === "all"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          All ({notifications.length})
        </button>
        <button
          onClick={() => setFilter("unread")}
          className={`px-4 py-2 font-medium transition-colors ${
            filter === "unread"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Unread ({unreadCount})
        </button>
        <button
          onClick={() => setFilter("read")}
          className={`px-4 py-2 font-medium transition-colors ${
            filter === "read"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Read ({notifications.length - unreadCount})
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() =>
                !notification.isRead && markAsRead(notification.id)
              }
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                !notification.isRead
                  ? "bg-green-50 border-green-200 hover:bg-green-100"
                  : "bg-red-50 border-red-200 hover:bg-red-100"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-gray-900">
                      {notification.title}
                    </h3>
                    {!notification.isRead && (
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-gray-700 text-sm mt-1">
                    {notification.message}
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    {notification.time}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-xl">
            <FaBell className="text-5xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">No notifications to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNotifications;
