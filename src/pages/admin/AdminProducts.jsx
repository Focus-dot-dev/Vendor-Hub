import React, { useState } from "react";
import {
  FaSearch,
  FaCheck,
  FaTimes,
  FaStar,
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";

const AdminProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      vendor: "TechHub Nigeria",
      category: "Electronics",
      price: 45000,
      stock: 50,
      status: "approved",
      featured: true,
    },
    {
      id: 2,
      name: "Smart Watch",
      vendor: "GadgetWorld",
      category: "Electronics",
      price: 125000,
      stock: 30,
      status: "pending",
      featured: false,
    },
    {
      id: 3,
      name: "Leather Wallet",
      vendor: "Fashion Hub",
      category: "Accessories",
      price: 18000,
      stock: 100,
      status: "approved",
      featured: false,
    },
    {
      id: 4,
      name: "Running Shoes",
      vendor: "SportZone",
      category: "Fashion",
      price: 35000,
      stock: 0,
      status: "rejected",
      featured: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterVendor, setFilterVendor] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const approveProduct = (id) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, status: "approved" } : p)),
    );
  };

  const rejectProduct = (id) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, status: "rejected" } : p)),
    );
  };

  const toggleFeatured = (id) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p)),
    );
  };

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const vendors = ["all", ...new Set(products.map((p) => p.vendor))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVendor =
      filterVendor === "all" || product.vendor === filterVendor;
    const matchesStatus =
      filterStatus === "all" || product.status === filterStatus;
    return matchesSearch && matchesVendor && matchesStatus;
  });

  const getStatusBadge = (status) => {
    const styles = {
      approved: "bg-green-100 text-green-700",
      pending: "bg-yellow-100 text-yellow-700",
      rejected: "bg-red-100 text-red-700",
    };
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-semibold ${styles[status]}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Product Management
        </h1>
        <p className="text-gray-600">Manage all products across vendors</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products or vendors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <select
            value={filterVendor}
            onChange={(e) => setFilterVendor(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {vendors.map((vendor) => (
              <option key={vendor} value={vendor}>
                {vendor === "all" ? "All Vendors" : vendor}
              </option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="all">All Status</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vendor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">
                        {product.name}
                      </span>
                      {product.featured && (
                        <FaStar className="text-yellow-500" title="Featured" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{product.vendor}</td>
                  <td className="px-6 py-4 text-gray-700">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-medium">
                    ₦{product.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`${
                        product.stock > 0 ? "text-gray-700" : "text-red-600"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(product.status)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {product.status === "pending" && (
                        <>
                          <button
                            onClick={() => approveProduct(product.id)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors"
                            title="Approve"
                          >
                            <FaCheck />
                          </button>
                          <button
                            onClick={() => rejectProduct(product.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Reject"
                          >
                            <FaTimes />
                          </button>
                        </>
                      )}
                      <button
                        onClick={() => toggleFeatured(product.id)}
                        className={`p-2 rounded transition-colors ${
                          product.featured
                            ? "text-yellow-500 hover:bg-yellow-50"
                            : "text-gray-400 hover:bg-gray-100"
                        }`}
                        title={
                          product.featured ? "Unfeature" : "Feature product"
                        }
                      >
                        <FaStar />
                      </button>
                      <button
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        title="View details"
                      >
                        <FaEye />
                      </button>
                      <button
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProducts;
