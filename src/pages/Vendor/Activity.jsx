import React, { useState, useEffect } from "react";

const Activity = () => {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    // Dummy data — replace later with API call
    const dummyData = [
      {
        id: 1,
        eventName: "Corporate Annual Meet",
        date: "2025-03-15",
        price: 25000,
        message: "Catering and decoration included.",
        status: "Accepted",
      },
      {
        id: 2,
        eventName: "Wedding Reception",
        date: "2025-04-10",
        price: 40000,
        message: "Full package with lights and music.",
        status: "Pending",
      },
      {
        id: 3,
        eventName: "Birthday Bash",
        date: "2025-02-05",
        price: 10000,
        message: "Basic decoration and cake service.",
        status: "Rejected",
      },
    ];
    setActivity(dummyData);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Activity</h2>
      <p className="text-gray-500 mb-6">Track all quotations you’ve sent for events.</p>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Event Name</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Message</th>
              <th className="py-3 px-6 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {activity.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-100 transition-colors"
              >
                <td className="py-3 px-6 text-left">{item.eventName}</td>
                <td className="py-3 px-6 text-left">{item.date}</td>
                <td className="py-3 px-6 text-left">₹{item.price}</td>
                <td className="py-3 px-6 text-left">{item.message}</td>
                <td className="py-3 px-6 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Accepted"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
            {activity.length === 0 && (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  No quotations sent yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Activity;
