// import React from "react";
// import { useParams } from "react-router-dom";

// const PublicVendorProfile = () => {
//   const { id } = useParams();

//   return (
//     <div className="max-w-3xl mx-auto p-8">
//       <div className="text-center">
//         <img src="/profile.png" alt="Vendor" className="w-32 h-32 rounded-full mx-auto mb-4" />
//         <h2 className="text-3xl font-bold mb-2">Vendor Name #{id}</h2>
//         <p className="text-gray-600">Business Name • Category • City</p>
//       </div>

//       <div className="mt-6">
//         <h3 className="text-xl font-semibold mb-2">About Vendor</h3>
//         <p className="text-gray-700">
//           Experienced wedding and event decorator providing premium services for all event types.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PublicVendorProfile;
import React from "react";
import { useParams, Link } from "react-router-dom";

const PublicVendorProfile = () => {
  const { id } = useParams();

  const vendor = {
    id,
    name: "Elegant Decor",
    category: "Decoration",
    phone: "9876543211",
    email: "elegantdecor@example.com",
    joinedDate: "2024-04-12",
    totalEvents: 12,
    rating: 4.8,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Link to="/admin/vendors" className="text-indigo-600 hover:underline mb-4 block">
        ← Back to Vendors
      </Link>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vendor Profile</h2>
      <div className="space-y-2 text-gray-700">
        <p><strong>Name:</strong> {vendor.name}</p>
        <p><strong>Category:</strong> {vendor.category}</p>
        <p><strong>Email:</strong> {vendor.email}</p>
        <p><strong>Phone:</strong> {vendor.phone}</p>
        <p><strong>Joined On:</strong> {vendor.joinedDate}</p>
        <p><strong>Total Events:</strong> {vendor.totalEvents}</p>
        <p><strong>Rating:</strong> ⭐ {vendor.rating}</p>
      </div>
    </div>
  );
};

export default PublicVendorProfile;
