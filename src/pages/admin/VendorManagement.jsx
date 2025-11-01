import React from "react";
import { Link } from "react-router-dom";

const VendorManagement = () => {
  const vendors = [
    { id: 1, name: "Elegant Decor", category: "Decoration", phone: "9876543211" },
    { id: 2, name: "Tasty Bites Catering", category: "Catering", phone: "9876501122" },
    { id: 3, name: "DJ Vibes", category: "Music", phone: "9866123456" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Vendor Management</h1>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Category</th>
            <th className="py-2 px-4 text-left">Phone</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{vendor.name}</td>
              <td className="py-2 px-4">{vendor.category}</td>
              <td className="py-2 px-4">{vendor.phone}</td>
              <td className="py-2 px-4 text-center">
                <Link
                  to={`/admin/vendors/${vendor.id}`}
                  className="text-indigo-600 hover:underline font-medium"
                >
                  View Profile
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorManagement;
