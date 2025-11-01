import React from "react";
import { useParams, Link } from "react-router-dom";

const AdminClientProfile = () => {
  const { id } = useParams();

  // Dummy client data
  const client = {
    id,
    name: "Riya Sharma",
    email: "riya@example.com",
    phone: "9876543210",
    totalEvents: 4,
    joinedDate: "2024-06-20",
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Link to="/admin/clients" className="text-indigo-600 hover:underline mb-4 block">
        ← Back to Clients
      </Link>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Client Profile</h2>
      <div className="space-y-2 text-gray-700">
        <p><strong>Name:</strong> {client.name}</p>
        <p><strong>Email:</strong> {client.email}</p>
        <p><strong>Phone:</strong> {client.phone}</p>
        <p><strong>Total Events:</strong> {client.totalEvents}</p>
        <p><strong>Joined On:</strong> {client.joinedDate}</p>
      </div>
    </div>
  );
};

export default AdminClientProfile;
