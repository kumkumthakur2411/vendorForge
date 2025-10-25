import React, { useState } from "react";
import axios from "axios";

const VendorRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    city: "",
    businessType: "",
    gst: "",
    pan: "",
    profilePhoto: null,
    password: "",
  });

  const categories = [
    "Decoration",
    "Catering",
    "Photography",
    "Music",
    "Venue",
    "Makeup",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setFormData({ ...formData, [name]: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (let key in formData) formDataToSend.append(key, formData[key]);

    await axios.post("http://localhost:5000/api/vendor/register", formDataToSend, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    alert("Vendor registered successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Vendor Registration</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="p-2 border" />
        <input name="businessName" placeholder="Business Name" onChange={handleChange} className="p-2 border" />
        <input name="phone" placeholder="Phone No" onChange={handleChange} className="p-2 border" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="p-2 border" />
        <input name="city" placeholder="City" onChange={handleChange} className="p-2 border" />
        <select name="businessType" onChange={handleChange} className="p-2 border">
          <option>Select Business Type</option>
          {categories.map((cat) => <option key={cat}>{cat}</option>)}
        </select>
        <input name="gst" placeholder="GST No (optional)" onChange={handleChange} className="p-2 border" />
        <input name="pan" placeholder="PAN No (optional)" onChange={handleChange} className="p-2 border" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="p-2 border" />
        <input type="file" name="profilePhoto" onChange={handleChange} className="col-span-2 p-2 border" />
        <button className="col-span-2 bg-blue-600 text-white py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default VendorRegister;
