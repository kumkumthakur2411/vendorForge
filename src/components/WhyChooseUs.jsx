import React from 'react';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';

const WhyChooseUs = () => {
  const features = [
    { img: feature1, title: "Trusted Vendors", desc: "All vendors are verified for quality and reliability." },
    { img: feature2, title: "Easy Booking", desc: "Book vendors in just a few clicks." },
    { img: feature3, title: "Affordable Pricing", desc: "Get the best deals without compromising quality." },
  ];

  return (
    <section id="why" className="py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {features.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={item.img} alt={item.title} className="mx-auto mb-4 w-20 h-20" />
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
