import React from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();

  const event = {
    id ,
    title: "Wedding Event",
    date: "2025-12-10",
    location: "Mumbai",
    guestCount: 150,
    budget: "₹2,00,000 - ₹3,00,000",
    vendors: [
      { name: "ABC Decorators", status: "Accepted" },
      { name: "Elite Catering", status: "Pending" },
      { name: "Star Artists", status: "Rejected" },
    ],
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Guests:</strong> {event.guestCount}</p>
      <p><strong>Budget:</strong> {event.budget}</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Vendors Applied:</h3>
      <ul className="space-y-2">
        {event.vendors.map((v, i) => (
          <li key={i} className="border p-2 rounded flex justify-between">
            <span>{v.name}</span>
            <span className={`font-semibold ${
              v.status === "Accepted"
                ? "text-green-600"
                : v.status === "Rejected"
                ? "text-red-600"
                : "text-yellow-600"
            }`}>
              {v.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventDetails;
