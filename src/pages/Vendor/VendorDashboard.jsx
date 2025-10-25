import React, { useState } from "react";
import VendorProfile from "./VendorProfile";
import Leads from "./Leads";
import Notifications from "./Notifications";
import PastEvents from "./PastEvents";
import Activity from "./Activity";

const VendorDashboard = () => {
  const [tab, setTab] = useState("profile");

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {["profile", "leads", "myevents", "notifications", "activity"].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`px-4 py-2 rounded ${
              tab === item ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {item === "profile" && "Profile"}
            {item === "leads" && "Leads"}
            {item === "myevents" && "My Events"}
            {item === "notifications" && "Notifications"}
            {item === "activity" && "Activity"}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      {tab === "profile" && <VendorProfile />}
      {tab === "leads" && <Leads />}
      {tab === "myevents" && <PastEvents />}
      {tab === "notifications" && <Notifications />}
      {tab === "activity" && <Activity />}
    </div>
  );
};

export default VendorDashboard;
