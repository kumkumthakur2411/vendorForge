import React, { useEffect, useState } from "react";

const Leads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    setLeads([
      { id: 1, title: "Wedding Event - Mumbai", budget: "₹1,00,000", date: "12 Dec 2025" },
      { id: 2, title: "Corporate Party - Delhi", budget: "₹50,000", date: "5 Jan 2026" },
    ]);
  }, []);

  const handleQuote = (id) => alert(`Quotation sent for lead ID: ${id}`);

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Available Leads</h3>
      <div className="space-y-4">
        {leads.map((lead) => (
          <div key={lead.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <h4 className="font-bold">{lead.title}</h4>
              <p>Budget: {lead.budget}</p>
              <p>Date: {lead.date}</p>
            </div>
            <button onClick={() => handleQuote(lead.id)} className="bg-green-600 text-white px-4 py-2 rounded">Send Quotation</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leads;
