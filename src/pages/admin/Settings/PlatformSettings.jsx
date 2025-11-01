import React, { useState } from "react";
import AdminAccount from "./AdminAccount";
import RoleManagement from "./RoleManagement";
import ManageCategories from "./ManageCategories";

const PlatformSettings = () => {
  const [activeTab, setActiveTab] = useState("admin");

  const renderContent = () => {
    switch (activeTab) {
      case "admin":
        return <AdminAccount />;
      case "roles":
        return <RoleManagement />;
      case "categories":
        return <ManageCategories />;
      default:
        return <AdminAccount />;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">⚙️ Platform Configuration</h1>

      {/* Tabs */}
      <div className="flex space-x-4 border-b pb-2 mb-6">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "admin" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("admin")}
        >
          Admin Account
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "roles" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("roles")}
        >
          Role Management
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "categories" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("categories")}
        >
          Manage Categories / Services
        </button>
      </div>

      <div className="bg-white shadow p-6 rounded-lg">{renderContent()}</div>
    </div>
  );
};

export default PlatformSettings;
