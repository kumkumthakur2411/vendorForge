import React from "react";

const EventDetails = ({ event, vendors, onBack }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <button
        onClick={onBack}
        className="text-indigo-600 hover:underline mb-4 block"
      >
        ← Back to All Events
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Details</h2>
      <div className="mb-6 space-y-1 text-gray-700">
        <p><strong>Name:</strong> {event.name}</p>
        <p><strong>Type:</strong> {event.type}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Status:</strong> {event.status}</p>
      </div>

      <h3 className="text-xl font-semibold mb-3 text-gray-800">Vendors Applied</h3>
      {vendors.length > 0 ? (
        <table className="w-full bg-gray-50 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="py-2 px-4 text-left">Vendor Name</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => (
              <tr key={vendor.id} className="border-b">
                <td className="py-2 px-4">{vendor.name}</td>
                <td className="py-2 px-4">{vendor.category}</td>
                <td className="py-2 px-4">{vendor.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No vendors have applied yet.</p>
      )}
    </div>
  );
};

export default EventDetails;
