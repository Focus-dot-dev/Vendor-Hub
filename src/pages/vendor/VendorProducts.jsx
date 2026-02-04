import React from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useVendor } from "../../context/VendorProvider";

const VendorProducts = () => {
  const navigate = useNavigate();
  const { products, deleteProduct } = useVendor();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Products</h1>
        <button
          onClick={() => navigate("/vendor/products/add")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 shadow-sm"
        >
          <FaPlus /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-gray-500 font-medium text-sm">
                  Product Name
                </th>
                <th className="px-6 py-4 text-gray-500 font-medium text-sm">
                  Price
                </th>
                <th className="px-6 py-4 text-gray-500 font-medium text-sm">
                  Stock
                </th>
                <th className="px-6 py-4 text-gray-500 font-medium text-sm">
                  Category
                </th>
                <th className="px-6 py-4 text-gray-500 font-medium text-sm">
                  Status
                </th>
                <th className="px-6 py-4 text-gray-500 font-medium text-sm text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50 transition group"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-800">
                      {product.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">₦{product.price}</td>
                  <td className="px-6 py-4 text-gray-600">{product.stock}</td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() =>
                          navigate(`/vendor/products/edit/${product.id}`)
                        }
                        className="text-gray-400 hover:text-blue-600 transition"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-gray-400 hover:text-red-600 transition"
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
        {products.length === 0 && (
          <div className="p-12 text-center text-gray-500 flex flex-col items-center">
            <p className="mb-4">No products found.</p>
            <button
              onClick={() => navigate("/vendor/products/add")}
              className="text-blue-600 hover:underline font-medium"
            >
              Add your first product
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorProducts;
