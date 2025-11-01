import React, { useState } from "react";
import EventDetails from "./EventDetails";

const EventManagement = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Dummy event data
  const allEvents = [
    { id: 1, name: "Wedding of Riya", type: "Wedding", date: "2025-11-15", location: "Mumbai", status: "Completed" },
    { id: 2, name: "Corporate Party", type: "Corporate", date: "2025-12-01", location: "Pune", status: "Active" },
    { id: 3, name: "Birthday Bash", type: "Birthday", date: "2025-12-10", location: "Delhi", status: "Upcoming" },
  ];

  const pendingEvents = [
    { id: 4, name: "Music Concert", client: "Arjun Mehta", type: "Promotion", date: "2025-12-20", location: "Goa", guestCount: 500, budget: "₹2,00,000" },
    { id: 5, name: "Engagement Event", client: "Priya Patel", type: "Wedding", date: "2025-12-25", location: "Jaipur", guestCount: 300, budget: "₹1,20,000" },
  ];

  // Dummy vendors applied for each event
  const vendorsByEvent = {
    1: [
      { id: 101, name: "Elegant Decor", category: "Decoration", status: "Accepted" },
      { id: 102, name: "Tasty Bites Catering", category: "Catering", status: "Pending" },
    ],
    2: [
      { id: 103, name: "DJ Vibes", category: "Music", status: "Rejected" },
      { id: 104, name: "Elite Events", category: "Manpower", status: "Pending" },
    ],
    3: [
      { id: 105, name: "Happy Moments Decor", category: "Decoration", status: "Pending" },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Event Management</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b border-gray-300">
        <button
          onClick={() => { setActiveTab("all"); setSelectedEvent(null); }}
          className={`pb-2 px-3 text-lg font-medium ${activeTab === "all" ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-500"}`}
        >
          All Events
        </button>
        <button
          onClick={() => { setActiveTab("approvals"); setSelectedEvent(null); }}
          className={`pb-2 px-3 text-lg font-medium ${activeTab === "approvals" ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-500"}`}
        >
          Event Approvals
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "all" && (
        <div>
          {!selectedEvent ? (
            <table className="w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="py-2 px-4 text-left">Event Name</th>
                  <th className="py-2 px-4 text-left">Type</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Location</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {allEvents.map((event) => (
                  <tr key={event.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{event.name}</td>
                    <td className="py-2 px-4">{event.type}</td>
                    <td className="py-2 px-4">{event.date}</td>
                    <td className="py-2 px-4">{event.location}</td>
                    <td className="py-2 px-4">{event.status}</td>
                    <td className="py-2 px-4 text-center">
                      <button
                        onClick={() => setSelectedEvent(event)}
                        className="text-indigo-600 hover:underline font-medium"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <EventDetails event={selectedEvent} vendors={vendorsByEvent[selectedEvent.id] || []} onBack={() => setSelectedEvent(null)} />
          )}
        </div>
      )}

      {activeTab === "approvals" && (
        <div>
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="py-2 px-4 text-left">Event Name</th>
                <th className="py-2 px-4 text-left">Client</th>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Location</th>
                <th className="py-2 px-4 text-left">Guest Count</th>
                <th className="py-2 px-4 text-left">Budget</th>
              </tr>
            </thead>
            <tbody>
              {pendingEvents.map((event) => (
                <tr key={event.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{event.name}</td>
                  <td className="py-2 px-4">{event.client}</td>
                  <td className="py-2 px-4">{event.type}</td>
                  <td className="py-2 px-4">{event.date}</td>
                  <td className="py-2 px-4">{event.location}</td>
                  <td className="py-2 px-4">{event.guestCount}</td>
                  <td className="py-2 px-4">{event.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EventManagement;
