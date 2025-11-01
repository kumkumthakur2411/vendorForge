// import React, { useState } from "react";

// const ClientPostRequirement = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     eventType: "",
//     location: "",
//     date: "",
//     guestCount: "",
//     services: [],
//     budget: "",
//     message: "",
//   });

//   const eventTypes = ["Wedding", "Corporate", "Birthday Party", "Promotion", "Other"];
//   const servicesOptions = ["Catering", "Venue", "Decor", "Artist", "Manpower"];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === "checkbox") {
//       const newServices = checked
//         ? [...formData.services, value]
//         : formData.services.filter((s) => s !== value);
//       setFormData({ ...formData, services: newServices });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Requirement Submitted:", formData);
//     alert("Requirement posted successfully!");
//     setFormData({
//       name: "",
//       phone: "",
//       email: "",
//       eventType: "",
//       location: "",
//       date: "",
//       guestCount: "",
//       services: [],
//       budget: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold mb-6">Post Your Event Requirement</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="grid md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <select
//             name="eventType"
//             value={formData.eventType}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           >
//             <option value="">Select Event Type</option>
//             {eventTypes.map((event) => (
//               <option key={event} value={event}>
//                 {event}
//               </option>
//             ))}
//           </select>
//           <input
//             type="text"
//             name="location"
//             placeholder="Event Location"
//             value={formData.location}
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />
//         </div>

//         <div>
//           <label className="font-medium">Services Required:</label>
//           <div className="flex flex-wrap gap-3 mt-2">
//             {servicesOptions.map((service) => (
//               <label key={service} className="flex items-center gap-1">
//                 <input
//                   type="checkbox"
//                   value={service}
//                   checked={formData.services.includes(service)}
//                   onChange={handleChange}
//                   className="accent-blue-600"
//                 />
//                 {service}
//               </label>
//             ))}
//           </div>
//         </div>

//         <input
//           type="number"
//           name="guestCount"
//           placeholder="Guest Count"
//           value={formData.guestCount}
//           onChange={handleChange}
//           className="border p-2 rounded w-full"
//         />

//         <input
//           type="text"
//           name="budget"
//           placeholder="Budget Range (e.g. ₹50,000 - ₹1,00,000)"
//           value={formData.budget}
//           onChange={handleChange}
//           className="border p-2 rounded w-full"
//         />

//         <textarea
//           name="message"
//           placeholder="Additional Details"
//           value={formData.message}
//           onChange={handleChange}
//           rows={3}
//           className="border p-2 rounded w-full"
//         />

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//         >
//           Submit Requirement
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ClientPostRequirement;

import React, { useState } from "react";

const PostRequirement = () => {
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
    budgetRange: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((v) => v !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Requirement submitted:", formData);
    alert("Requirement submitted successfully!");
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Post Your Requirement</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 rounded" />
        <input name="phone" placeholder="Phone" onChange={handleChange} className="border p-2 rounded" />
        <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 rounded" />
        <select name="eventType" onChange={handleChange} className="border p-2 rounded">
          <option value="">Select Event Type</option>
          <option>Wedding</option>
          <option>Corporate</option>
          <option>Birthday</option>
          <option>Promotion</option>
        </select>
        <input name="location" placeholder="Location" onChange={handleChange} className="border p-2 rounded" />
        <input type="date" name="date" onChange={handleChange} className="border p-2 rounded" />
        <input name="guestCount" placeholder="Guest Count" onChange={handleChange} className="border p-2 rounded" />
        <input name="venueType" placeholder="Venue Type" onChange={handleChange} className="border p-2 rounded" />
        <label className="font-semibold mt-2">Services Required:</label>
        <div className="flex flex-wrap gap-4">
          {["Catering", "Venue", "Decor", "Artist", "Manpower"].map((service) => (
            <label key={service}>
              <input type="checkbox" value={service} onChange={handleChange} /> {service}
            </label>
          ))}
        </div>
        <input name="budgetRange" placeholder="Budget Range" onChange={handleChange} className="border p-2 rounded" />
        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
};

export default PostRequirement;
