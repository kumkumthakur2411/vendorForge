import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const AdminLayout = () => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Client Management", path: "/admin/clients" },
    { name: "Vendor Management", path: "/admin/vendors" },
    { name: "Event Management", path: "/admin/events" },
    { name: "Payment & Commission", path: "/admin/payments" },
    { name: "Platform Settings", path: "/admin/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5">
        <h2 className="text-2xl font-bold mb-6 text-indigo-600">Admin Panel</h2>
        <nav className="space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded-md font-medium ${
                location.pathname === item.path
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-indigo-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
