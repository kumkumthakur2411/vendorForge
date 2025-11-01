import React, { useState } from "react";

const RoleManagement = () => {
  const [roles] = useState([
    { id: 1, role: "Super Admin", permissions: "All Access" },
    { id: 2, role: "Manager", permissions: "View & Approve Events" },
    { id: 3, role: "Finance", permissions: "View Payments Only" },
  ]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Role Management</h2>
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Role</th>
            <th className="px-4 py-2 border">Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((r) => (
            <tr key={r.id} className="border-b">
              <td className="px-4 py-2 border">{r.role}</td>
              <td className="px-4 py-2 border">{r.permissions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
