import React, { useState } from "react";

const PastEvents = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Wedding Decoration - Pune",
      date: "10 June 2024",
      description: "Handled stage decoration and lighting setup for a royal wedding.",
      image: "/wedding1.jpg",
    },
    {
      id: 2,
      title: "Corporate Gala - Mumbai",
      date: "25 March 2024",
      description: "Catering and decoration for a corporate success party.",
      image: "/corporate1.jpg",
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setNewEvent({ ...newEvent, image: URL.createObjectURL(files[0]) });
    else setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    const id = events.length + 1;
    setEvents([...events, { ...newEvent, id }]);
    setNewEvent({ title: "", date: "", description: "", image: null });
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">My Completed Events</h3>

      {/* Form to Add Event */}
      <form
        onSubmit={handleAddEvent}
        className="bg-gray-50 p-4 rounded-md shadow mb-8 grid md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={newEvent.description}
          onChange={handleChange}
          className="md:col-span-2 p-2 border rounded"
          rows={3}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="md:col-span-2"
        />
        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Event
        </button>
      </form>

      {/* Events List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition-all"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h4 className="font-semibold text-lg">{event.title}</h4>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p className="text-gray-700 mt-2 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEvents;
