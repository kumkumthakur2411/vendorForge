import React from 'react';

const Categories = () => {
  const categories = [
    "Decoration", "Catering", "Photography", "Music", "Venue", "Makeup", "Lighting", "Invitation"
  ];

  return (
    <section id="categories" className="bg-gray-50 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition-all"
          >
            <h3 className="font-semibold text-lg">{cat}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
