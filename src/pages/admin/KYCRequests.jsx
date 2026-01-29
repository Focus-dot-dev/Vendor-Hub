import React, { useState } from "react";
import { FaFileAlt, FaCheck, FaTimes, FaSearch } from "react-icons/fa";

const KYCRequests = () => {
  // Mock Data
  const [requests, setRequests] = useState([
    {
      id: 101,
      vendor: "GreenGardens",
      docType: "Business License",
      docUrl: "#",
      submissionDate: "2026-01-20",
      status: "Pending",
    },
    {
      id: 102,
      vendor: "SportyLife",
      docType: "Tax ID",
      docUrl: "#",
      submissionDate: "2026-01-22",
      status: "Pending",
    },
    {
      id: 103,
      vendor: "GadgetWorld",
      docType: "ID Card",
      docUrl: "#",
      submissionDate: "2026-01-23",
      status: "Pending",
    },
  ]);

  const handleApprove = (id) => {
    // In a real app, this would call an API
    setRequests(requests.filter((req) => req.id !== id));
    // Ideally show a toast notification here
  };

  const handleReject = (id) => {
    setRequests(requests.filter((req) => req.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">KYC Verifications</h1>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search request..."
            className="outline-none text-sm text-gray-700"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.map((req) => (
          <div
            key={req.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-gray-800 text-lg">
                  {req.vendor}
                </h3>
                <p className="text-sm text-gray-500">
                  Submitted: {req.submissionDate}
                </p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
                {req.status}
              </span>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-100 flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded text-blue-600">
                <FaFileAlt size={20} />
              </div>
              <div>
                <p className="font-medium text-gray-700 text-sm">
                  {req.docType}
                </p>
                <a
                  href={req.docUrl}
                  className="text-xs text-blue-600 hover:underline"
                >
                  View Document
                </a>
              </div>
            </div>

            <div className="mt-auto flex gap-3">
              <button
                onClick={() => handleReject(req.id)}
                className="flex-1 flex items-center justify-center gap-2 border border-gray-200 text-gray-600 py-2 rounded-lg hover:bg-gray-50 hover:text-red-500 transition-colors font-medium text-sm"
              >
                <FaTimes /> Reject
              </button>
              <button
                onClick={() => handleApprove(req.id)}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm"
              >
                <FaCheck /> Approve
              </button>
            </div>
          </div>
        ))}

        {requests.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-500">
            <p>No pending KYC requests found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KYCRequests;
