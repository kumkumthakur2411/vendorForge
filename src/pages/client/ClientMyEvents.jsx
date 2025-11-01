import React from "react";
import { Link } from "react-router-dom";

const MyEvents = () => {
  const events = [
    { id: 1, title: "Wedding Event", date: "2025-12-10", status: "Open" },
    { id: 2, title: "Corporate Party", date: "2025-11-20", status: "Closed" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">My Posted Events</h2>
      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event.id} className="border p-4 rounded flex justify-between items-center">
            <div>
              <h3 className="font-bold">{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Status: {event.status}</p>
            </div>
            <Link
              to={`/client/event/${event.id}`}
              className="text-blue-600 hover:underline"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyEvents;
