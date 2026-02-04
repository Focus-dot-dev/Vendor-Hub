import { useParams, useNavigate } from "react-router-dom";
import { useVendor } from "../../context/VendorProvider";
import {
  FaArrowLeft,
  FaBox,
  FaTruck,
  FaCheckCircle,
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const VendorOrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOrder, updateOrderStatus } = useVendor();

  const order = getOrder(id);

  if (!order)
    return (
      <div className="p-10 text-center">
        Loading Order... (or Order Not Found)
      </div>
    );

  const handleStatusChange = (newStatus) => {
    updateOrderStatus(id, newStatus);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <button
        onClick={() => navigate("/vendor/orders")}
        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6 transition"
      >
        <FaArrowLeft /> Back to Orders
      </button>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            Order {order.id}
            <span
              className={`text-sm px-3 py-1 rounded-full border ${
                order.status === "Pending"
                  ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                  : order.status === "Shipped"
                    ? "bg-blue-50 text-blue-700 border-blue-200"
                    : "bg-green-50 text-green-700 border-green-200"
              }`}
            >
              {order.status}
            </span>
          </h1>
          <p className="text-gray-500 mt-1">Placed on {order.date}</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => handleStatusChange("Pending")}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${order.status === "Pending" ? "bg-yellow-100 border-yellow-300 text-yellow-800" : "bg-white border-gray-200 hover:bg-gray-50"}`}
          >
            Pending
          </button>
          <button
            onClick={() => handleStatusChange("Shipped")}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${order.status === "Shipped" ? "bg-blue-100 border-blue-300 text-blue-800" : "bg-white border-gray-200 hover:bg-gray-50"}`}
          >
            Shipped
          </button>
          <button
            onClick={() => handleStatusChange("Delivered")}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${order.status === "Delivered" ? "bg-green-100 border-green-300 text-green-800" : "bg-white border-gray-200 hover:bg-gray-50"}`}
          >
            Delivered
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Order Items */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 font-medium text-gray-700">
            Order Items
          </div>
          <div className="p-6">
            {order.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                    <FaBox />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="font-bold text-gray-800">₦{item.price}</div>
              </div>
            ))}
            <div className="flex justify-between items-center pt-6 mt-2 border-t border-gray-100">
              <span className="font-medium text-gray-600">Total Amount</span>
              <span className="text-2xl font-bold text-blue-600">
                ₦{order.total}
              </span>
            </div>
          </div>
        </div>

        {/* Customer Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 font-medium text-gray-700">
              Customer Details
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-gray-400">
                  <FaUser />
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 text-sm">
                    Customer Name
                  </h5>
                  <p className="text-gray-600 text-sm">{order.customer}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-gray-400">
                  <FaEnvelope />
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 text-sm">
                    Email Address
                  </h5>
                  <p className="text-gray-600 text-sm">{order.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-gray-400">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 text-sm">
                    Shipping Address
                  </h5>
                  <p className="text-gray-600 text-sm">{order.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorOrderDetails;
