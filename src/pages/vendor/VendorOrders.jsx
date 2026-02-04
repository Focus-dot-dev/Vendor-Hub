import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useVendor } from "../../context/VendorProvider";

const VendorOrders = () => {
  const { orders } = useVendor();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Orders</h1>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-gray-500 font-medium text-sm">
                  Order ID
                </th>
                <th className="px-6 py-4 text-gray-500 font-medium text-sm">
                  Customer
                </th>
                <th className="px-6 py-4 text-gray-500 font-medium text-sm">
                  Date
                </th>
                <th className="px-6 py-4 text-gray-500 font-medium text-sm">
                  Items
                </th>
                <th className="px-6 py-4 text-gray-500 font-medium text-sm">
                  Total
                </th>
                <th className="px-6 py-4 text-gray-500 font-medium text-sm">
                  Status
                </th>
                <th className="px-6 py-4 text-gray-500 font-medium text-sm text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-gray-600">
                    {order.items.length}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    ₦{order.total}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      to={`/vendor/orders/${order.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 justify-end w-full"
                    >
                      <FaEye /> View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {orders.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No orders found yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorOrders;
