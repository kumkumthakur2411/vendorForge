import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VendorLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/vendor/login", form);
    localStorage.setItem("vendorToken", res.data.token);
    navigate("/vendor/dashboard");
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Vendor Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border" />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default VendorLogin;
