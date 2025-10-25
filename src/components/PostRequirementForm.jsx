import React, { useState } from "react";

const PostRequirementForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    location: "",
    date: "",
    guestCount: "",
    venueType: "",
    services: [],
    budget: "",
    message: "",
  });

  const eventTypes = ["Wedding", "Corporate", "Birthday Party", "Promotion", "Other"];
  const servicesOptions = ["Catering", "Venue", "Decor", "Artist", "Manpower"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let newServices = [...formData.services];
      if (checked) {
        newServices.push(value);
      } else {
        newServices = newServices.filter((s) => s !== value);
      }
      setFormData({ ...formData, services: newServices });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Later: send data to backend via API
    alert("Requirement submitted successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4">Post Your Requirement</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Select Event Type</option>
              {eventTypes.map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="number"
              name="guestCount"
              placeholder="Guest Count"
              value={formData.guestCount}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="venueType"
              placeholder="Venue Type"
              value={formData.venueType}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="font-medium mb-1 block">Services Required:</label>
            <div className="flex flex-wrap gap-3">
              {servicesOptions.map((service) => (
                <label key={service} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-1">Budget Range:</label>
            <input
              type="text"
              name="budget"
              placeholder="e.g., 50,000 - 1,00,000"
              value={formData.budget}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block mb-1">Additional Details:</label>
            <textarea
              name="message"
              placeholder="Write any extra details here"
              value={formData.message}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Requirement
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostRequirementForm;
