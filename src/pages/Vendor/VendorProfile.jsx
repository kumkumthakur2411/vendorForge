import React from "react";

const VendorProfile = () => {
  const profileCompleted = true; // dynamic in real case
  return (
    <div className="p-6 bg-white shadow-md rounded">
      <h3 className="text-2xl font-semibold mb-4">Vendor Profile</h3>
      <p>Status: <span className={`font-bold ${profileCompleted ? "text-green-600" : "text-red-600"}`}>{profileCompleted ? "Completed" : "Incomplete"}</span></p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Edit Profile</button>
    </div>
  );
};

export default VendorProfile;
