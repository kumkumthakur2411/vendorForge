import React, { useState } from 'react';
import PostRequirementForm from './PostRequirementForm';

const HeroSection = () => {

    const [showForm, setShowForm] = useState(false)
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary">
          Your all-in-one event vendor marketplace
        </h1>
        <p className="text-gray-600">
          Discover top event vendors for decoration, catering, music, and more — all in one place.
        </p>
      <div className="text-center mt-10">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Post Your Requirement
        </button>
     </div> 
      {showForm && <PostRequirementForm onClose={() => setShowForm(false)} />}    
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img src="/banner.jpg" alt="Event Banner" className="rounded-xl shadow-lg" />
      </div>
    </section>
  );
};

export default HeroSection;
