import React from 'react';
import testimonial1 from '../assets/testimonial1.jpg';
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';

const Testimonials = () => {
  const data = [
    { img: testimonial1, name: "Aarav Mehta", review: "Amazing experience! Found the best decorator in minutes." },
    { img: testimonial2, name: "Priya Sharma", review: "Super easy to book vendors. Highly recommend!" },
    { img: testimonial3, name: "Rohan Das", review: "The platform made my wedding planning stress-free." },
    
  ];

  return (
    <section id="testimonials" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
      <div className="flex overflow-x-auto space-x-6 px-6 scrollbar-hide">
        {data.map((t, i) => (
          <div key={i} className="min-w-[250px] bg-white p-6 rounded-lg shadow-md">
            <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="italic text-gray-600">"{t.review}"</p>
            <h4 className="mt-3 font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
