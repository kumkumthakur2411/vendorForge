import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold">EventForge</h1>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#how" className="hover:text-blue-600">How it Works</a>
          <a href="#why" className="hover:text-blue-600">Why Choose Us</a>
          <a href="#categories" className="hover:text-blue-600">Categories</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
        </div>

        <button
          className="md:hidden p-2 border rounded"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-100 p-4 space-y-2">
          <a href="#how" className="block">How it Works</a>
          <a href="#why" className="block">Why Choose Us</a>
          <a href="#categories" className="block">Categories</a>
          <a href="#testimonials" className="block">Testimonials</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
