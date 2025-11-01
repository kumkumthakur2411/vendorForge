import React, { useState } from "react";
import ClientPostRequirement from "./ClientPostRequirement";
import ClientMyEvents from "./ClientMyEvents";
import ClientProfile from "./ClientProfile";

const ClientDashboard = () => {
  const [activePage, setActivePage] = useState("postRequirement");

  const renderPage = () => {
    switch (activePage) {
      case "postRequirement":
        return <ClientPostRequirement />;
      case "myEvents":
        return <ClientMyEvents />;
      case "profile":
        return <ClientProfile />;
      default:
        return <ClientPostRequirement />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5">
        <h2 className="text-2xl font-semibold text-center mb-6">Client Dashboard</h2>
        <ul className="space-y-3">
          <li>
            <button
              onClick={() => setActivePage("postRequirement")}
              className={`w-full text-left px-4 py-2 rounded ${
                activePage === "postRequirement"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              Post Requirement
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage("myEvents")}
              className={`w-full text-left px-4 py-2 rounded ${
                activePage === "myEvents"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              My Events
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage("profile")}
              className={`w-full text-left px-4 py-2 rounded ${
                activePage === "profile"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              Profile
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{renderPage()}</main>
    </div>
  );
};

export default ClientDashboard;
