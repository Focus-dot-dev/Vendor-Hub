import React, { useState } from "react";
import {
  FaIdCard,
  FaBuilding,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaSpinner,
} from "react-icons/fa";

const VendorKYC = () => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState("pending"); // pending, submitted, verified, rejected

  // Mock status - in real app fetch from backend
  if (status === "submitted") {
    return (
      <div className="max-w-2xl mx-auto text-center py-20 bg-white rounded-xl shadow-sm mt-10">
        <div className="text-yellow-500 text-6xl mb-4 flex justify-center">
          <FaSpinner className="animate-spin" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Verification in Progress
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          We have received your documents and our team is reviewing them. This
          usually takes 24-48 hours. You will be notified via email once
          approved.
        </p>
        <button
          onClick={() => setStatus("pending")}
          className="mt-8 text-blue-600 hover:underline"
        >
          (Demo Only: Reset to Form)
        </button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3); // Demo success step
    setTimeout(() => setStatus("submitted"), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">KYC Verification</h1>
        <p className="text-gray-500 mt-2">
          To comply with regulations and ensure trust, we need to verify your
          identity and business details.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-10">
        <div
          className={`flex items-center ${step >= 1 ? "text-blue-600" : "text-gray-300"}`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? "border-blue-600 bg-blue-50 font-bold" : "border-gray-300"}`}
          >
            1
          </div>
          <span className="ml-2 font-medium hidden sm:block">
            Personal Info
          </span>
        </div>
        <div
          className={`w-16 h-1 bg-gray-200 mx-2 ${step >= 2 ? "bg-blue-600" : ""}`}
        ></div>
        <div
          className={`flex items-center ${step >= 2 ? "text-blue-600" : "text-gray-300"}`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? "border-blue-600 bg-blue-50 font-bold" : "border-gray-300"}`}
          >
            2
          </div>
          <span className="ml-2 font-medium hidden sm:block">Documents</span>
        </div>
        <div
          className={`w-16 h-1 bg-gray-200 mx-2 ${step >= 3 ? "bg-blue-600" : ""}`}
        ></div>
        <div
          className={`flex items-center ${step >= 3 ? "text-blue-600" : "text-gray-300"}`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? "border-blue-600 bg-blue-50 font-bold" : "border-gray-300"}`}
          >
            3
          </div>
          <span className="ml-2 font-medium hidden sm:block">Review</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <form onSubmit={handleSubmit} className="p-8">
          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FaIdCard className="text-blue-500" /> Personal Identity
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name (as on ID)
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="e.g. Johnathan Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nationality
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
                    <option>Select Country</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Nigeria</option>
                    <option>India</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    National ID / Passport Number
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="XXXX-XXXX-XXXX"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Documents */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FaBuilding className="text-blue-500" /> Document Upload
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition group">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition">
                    <FaIdCard />
                  </div>
                  <h4 className="font-bold text-gray-700">
                    Upload ID Card (Front)
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG or PDF up to 5MB
                  </p>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition group">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition">
                    <FaIdCard />
                  </div>
                  <h4 className="font-bold text-gray-700">
                    Upload ID Card (Back)
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG or PDF up to 5MB
                  </p>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition group md:col-span-2">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition">
                    <FaBuilding />
                  </div>
                  <h4 className="font-bold text-gray-700">
                    Business License / Registration
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Required for Business Accounts
                  </p>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-gray-500 hover:text-gray-700 font-medium"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                >
                  <FaCheckCircle /> Submit verification
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Success Animation (Handled by Status specific render above for simplicity, but could be a step) */}
        </form>
      </div>
    </div>
  );
};

export default VendorKYC;
