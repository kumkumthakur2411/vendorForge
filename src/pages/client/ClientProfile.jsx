import React, { useState } from "react";

const ClientProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "9876543210",
    city: "Mumbai",
  });

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      <div className="space-y-4">
        <p>
          <span className="font-semibold">Name:</span> {profile.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {profile.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {profile.phone}
        </p>
        <p>
          <span className="font-semibold">City:</span> {profile.city}
        </p>
      </div>
      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Edit Profile
      </button>
    </div>
  );
};

export default ClientProfile;
