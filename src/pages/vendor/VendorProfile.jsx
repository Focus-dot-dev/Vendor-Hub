import React from "react";

const VendorProfile = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Store Profile</h1>

      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Store Name
              </label>
              <input
                type="text"
                defaultValue="My Awesome Store"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Store Slug
              </label>
              <input
                type="text"
                defaultValue="my-awesome-store"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 text-gray-500"
                readOnly
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              defaultValue="We sell high quality electronics and accessories."
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Store Logo
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-blue-500 transition">
                <span className="text-sm">Click to upload logo</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Banner Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-blue-500 transition">
                <span className="text-sm">Click to upload banner</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorProfile;
