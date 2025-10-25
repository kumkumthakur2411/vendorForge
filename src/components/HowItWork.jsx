import React from 'react';
import how1 from '../assets/how1.png';
import how2 from '../assets/how2.png';
import how3 from '../assets/how3.png';

const HowItWorks = () => {
  const steps = [
    { img: how1, title: "Search Vendors", desc: "Browse hundreds of verified event vendors." },
    { img: how2, title: "Compare & Choose", desc: "Filter, compare, and pick the perfect vendor." },
    { img: how3, title: "Book Easily", desc: "Connect and finalize your event seamlessly." },
  ];

  return (
    <section id="how" className="bg-gray-50 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {steps.map((step, i) => (
          <div key={i} className="w-64 text-center">
            <img src={step.img} alt={step.title} className="mx-auto mb-4 w-24 h-24" />
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
