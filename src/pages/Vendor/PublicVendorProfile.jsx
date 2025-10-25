import React from "react";
import { useParams } from "react-router-dom";

const PublicVendorProfile = () => {
  const { id } = useParams();

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="text-center">
        <img src="/profile.png" alt="Vendor" className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">Vendor Name #{id}</h2>
        <p className="text-gray-600">Business Name • Category • City</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">About Vendor</h3>
        <p className="text-gray-700">
          Experienced wedding and event decorator providing premium services for all event types.
        </p>
      </div>
    </div>
  );
};

export default PublicVendorProfile;
