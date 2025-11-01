import React from "react";

const AdminAccount = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Admin Account Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600">Admin Name</label>
          <input
            type="text"
            className="w-full border rounded-md p-2 mt-1"
            placeholder="Enter admin name"
            defaultValue="Super Admin"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full border rounded-md p-2 mt-1"
            placeholder="admin@example.com"
            defaultValue="admin@eventhub.com"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="w-full border rounded-md p-2 mt-1"
            placeholder="Enter new password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AdminAccount;
