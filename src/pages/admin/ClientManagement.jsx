import React from "react";
import { Link } from "react-router-dom";

const ClientManagement = () => {
  const clients = [
    { id: 1, name: "Riya Sharma", email: "riya@example.com", phone: "9876543210" },
    { id: 2, name: "Arjun Mehta", email: "arjun@example.com", phone: "9876501234" },
    { id: 3, name: "Priya Patel", email: "priya@example.com", phone: "9854123456" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Client Management</h1>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Phone</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{client.name}</td>
              <td className="py-2 px-4">{client.email}</td>
              <td className="py-2 px-4">{client.phone}</td>
              <td className="py-2 px-4 text-center">
                <Link
                  to={`/admin/clients/${client.id}`}
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

export default ClientManagement;
