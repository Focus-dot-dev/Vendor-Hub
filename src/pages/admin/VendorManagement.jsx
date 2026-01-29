import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaEllipsisV,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const VendorManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const vendors = [
    {
      id: 1,
      name: "TechGiant Ltd",
      email: "contact@techgiant.com",
      category: "Electronics",
      status: "Active",
      joinDate: "2025-12-01",
      sales: "$12,450",
    },
    {
      id: 2,
      name: "FashionHub",
      email: "info@fashionhub.store",
      category: "Fashion",
      status: "Active",
      joinDate: "2026-01-10",
      sales: "$8,230",
    },
    {
      id: 3,
      name: "GreenGardens",
      email: "sales@greengardens.co",
      category: "Home & Garden",
      status: "Pending",
      joinDate: "2026-01-20",
      sales: "$0",
    },
    {
      id: 4,
      name: "LuxuryBeauty",
      email: "support@luxurybeauty.net",
      category: "Beauty",
      status: "Suspended",
      joinDate: "2025-11-15",
      sales: "$45,120",
    },
    {
      id: 5,
      name: "SpeedyAuto",
      email: "parts@speedyauto.com",
      category: "Automotive",
      status: "Active",
      joinDate: "2026-01-05",
      sales: "$3,400",
    },
    {
      id: 6,
      name: "SportyLife",
      email: "team@sportylife.fit",
      category: "Sports",
      status: "Pending",
      joinDate: "2026-01-22",
      sales: "$0",
    },
  ];

  const filteredVendors = vendors.filter(
    (vendor) =>
      (statusFilter === "All" || vendor.status === statusFilter) &&
      (vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.email.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Vendor Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
          + Add New Vendor
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search vendors..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <FaFilter className="text-gray-400" />
          <select
            className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Vendor Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Join Date</th>
                <th className="px-6 py-4">Total Sales</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredVendors.map((vendor) => (
                <tr
                  key={vendor.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-semibold text-gray-800">
                        {vendor.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {vendor.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{vendor.category}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          vendor.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : vendor.status === "Pending"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-red-100 text-red-700"
                        }`}
                    >
                      {vendor.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{vendor.joinDate}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {vendor.sales}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <FaEye />
                      </button>
                      <button
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
          <span>
            Showing {filteredVendors.length} of {vendors.length} vendors
          </span>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorManagement;
