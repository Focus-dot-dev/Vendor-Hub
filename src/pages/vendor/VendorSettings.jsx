import React from "react";

const VendorSettings = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Account Settings
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="vendor@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
            />
          </div>
          <div className="pt-2">
            <button className="text-blue-600 hover:underline text-sm font-medium">
              Change Password
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Notifications</h2>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 text-blue-600 rounded"
            />
            <span className="text-gray-700">
              Email me when I get a new order
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
            <span className="text-gray-700">
              Email me about platform updates
            </span>
          </label>
        </div>
        <div className="pt-6 flex justify-end">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorSettings;
