import React, { useState } from "react";

const ManageCategories = () => {
  const [categories, setCategories] = useState([
    "Wedding",
    "Corporate Event",
    "Birthday Party",
    "Promotion",
  ]);

  const [services, setServices] = useState([
    "Catering",
    "Venue",
    "Decor",
    "Artist",
    "Manpower",
  ]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Manage Categories / Services</h2>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-md font-medium mb-2">Event Categories</h3>
          <ul className="space-y-2">
            {categories.map((c, idx) => (
              <li
                key={idx}
                className="border px-3 py-2 rounded-md flex justify-between"
              >
                {c}
                <button className="text-red-500 hover:text-red-700">✖</button>
              </li>
            ))}
          </ul>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">
            + Add Category
          </button>
        </div>

        <div>
          <h3 className="text-md font-medium mb-2">Service Types</h3>
          <ul className="space-y-2">
            {services.map((s, idx) => (
              <li
                key={idx}
                className="border px-3 py-2 rounded-md flex justify-between"
              >
                {s}
                <button className="text-red-500 hover:text-red-700">✖</button>
              </li>
            ))}
          </ul>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">
            + Add Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;
