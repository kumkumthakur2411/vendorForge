import React, { useState } from "react";

const PaymentCommission = () => {
  const [transactions] = useState([
    {
      id: 1,
      vendorName: "Elegant Decorators",
      eventName: "Wedding at Sunset Hall",
      commission: "₹5,000",
      platformShare: "₹500",
      paymentStatus: "Paid",
      paymentMode: "Online",
      transactionId: "TXN12345",
      date: "2025-10-20",
    },
    {
      id: 2,
      vendorName: "Catering Kings",
      eventName: "Corporate Annual Meet",
      commission: "₹10,000",
      platformShare: "₹1,000",
      paymentStatus: "Unpaid",
      paymentMode: "Cash",
      transactionId: "TXN56789",
      date: "2025-10-25",
    },
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">💰 Payment & Commission</h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg p-4">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-3">Vendor</th>
              <th className="px-4 py-3">Event</th>
              <th className="px-4 py-3">Commission</th>
              <th className="px-4 py-3">Platform Share</th>
              <th className="px-4 py-3">Payment Status</th>
              <th className="px-4 py-3">Mode</th>
              <th className="px-4 py-3">Transaction ID</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((txn) => (
              <tr
                key={txn.id}
                className="border-b hover:bg-gray-50 transition-all"
              >
                <td className="px-4 py-3 font-medium">{txn.vendorName}</td>
                <td className="px-4 py-3">{txn.eventName}</td>
                <td className="px-4 py-3 text-green-600">{txn.commission}</td>
                <td className="px-4 py-3 text-blue-600">{txn.platformShare}</td>
                <td
                  className={`px-4 py-3 font-semibold ${
                    txn.paymentStatus === "Paid"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {txn.paymentStatus}
                </td>
                <td className="px-4 py-3">{txn.paymentMode}</td>
                <td className="px-4 py-3">{txn.transactionId}</td>
                <td className="px-4 py-3">{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentCommission;
