import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useVendor } from "../../context/VendorProvider";
import { FaArrowLeft, FaCloudUploadAlt, FaSave } from "react-icons/fa";

// 1. Wrapper Component: Handles Key Resets
// This forces a complete re-mount when the ID changes, allowing us to use lazy state initialization cleanly.
const VendorAddProductWrapper = () => {
  const { id } = useParams();
  // Use 'new' or id as key to force re-mount on route change
  return <VendorAddProductContent key={id || "new"} />;
};

// 2. Content Component: The actual form
const VendorAddProductContent = () => {
  const { id } = useParams(); // If id exists, it's Edit mode
  const navigate = useNavigate();
  const { addProduct, updateProduct, getProduct } = useVendor();
  const isEditMode = !!id;

  // Lazy Initialization:
  // Since we force-remount on ID change, this runs exactly once per product view.
  // We can synchronously grab the product from context and set initial state.
  const [formData, setFormData] = useState(() => {
    if (isEditMode) {
      const product = getProduct(id);
      if (product) {
        return {
          name: product.name,
          price: product.price,
          category: product.category,
          stock: product.stock,
          description: product.description,
        };
      }
    }
    // Default / Fallback
    return {
      name: "",
      price: "",
      category: "",
      stock: "",
      description: "",
    };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      updateProduct(id, formData);
    } else {
      addProduct(formData);
    }
    navigate("/vendor/products");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate("/vendor/products")}
        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6 transition"
      >
        <FaArrowLeft /> Back to Products
      </button>

      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        {isEditMode ? "Edit Product" : "Add New Product"}
      </h1>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="e.g. Wireless Headset"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home & Garden">Home & Garden</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (₦)
              </label>
              <input
                type="number"
                name="price"
                required
                min="0"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity
              </label>
              <input
                type="number"
                name="stock"
                required
                min="0"
                value={formData.stock}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
              <FaCloudUploadAlt className="text-4xl mb-2 text-blue-400" />
              <p className="text-sm">Click or Drag to Upload Image</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Describe your product..."
            ></textarea>
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-100">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 shadow-md"
            >
              <FaSave /> {isEditMode ? "Update Product" : "Save Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorAddProductWrapper;
