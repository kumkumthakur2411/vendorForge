// import React from "react";
// import { Link } from "react-router-dom";

// const AdminDashboard = () => {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Link
//           to="/admin/manage-vendors"
//           className="bg-blue-600 text-white p-6 rounded-lg shadow hover:bg-blue-700 text-center"
//         >
//           Manage Vendors
//         </Link>
//         <Link
//           to="/admin/manage-clients"
//           className="bg-green-600 text-white p-6 rounded-lg shadow hover:bg-green-700 text-center"
//         >
//           Manage Clients
//         </Link>
//         <Link
//           to="/admin/manage-events"
//           className="bg-purple-600 text-white p-6 rounded-lg shadow hover:bg-purple-700 text-center"
//         >
//           Manage Events
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalVendors: 0,
    totalClients: 0,
    activeEvents: 0,
    pendingApprovals: 0,
    totalRevenue: 0,
  });

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Dummy stats
    const dummyStats = {
      totalVendors: 125,
      totalClients: 230,
      activeEvents: 18,
      pendingApprovals: 7,
      totalRevenue: 420000,
    };
    setStats(dummyStats);

    // Dummy chart data (monthly revenue)
    const dummyChartData = [
      { month: "Jan", revenue: 25000 },
      { month: "Feb", revenue: 35000 },
      { month: "Mar", revenue: 40000 },
      { month: "Apr", revenue: 30000 },
      { month: "May", revenue: 45000 },
      { month: "Jun", revenue: 50000 },
      { month: "Jul", revenue: 60000 },
      { month: "Aug", revenue: 55000 },
      { month: "Sep", revenue: 48000 },
      { month: "Oct", revenue: 53000 },
      { month: "Nov", revenue: 60000 },
      { month: "Dec", revenue: 70000 },
    ];
    setChartData(dummyChartData);
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Quick overview of your event management platform.
      </p>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
        <div className="bg-white shadow-md rounded-xl p-5 text-center border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-700">Total Vendors</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {stats.totalVendors}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-5 text-center border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-gray-700">Total Clients</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {stats.totalClients}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-5 text-center border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-gray-700">Active Events</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">
            {stats.activeEvents}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-5 text-center border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-gray-700">
            Pending Approvals
          </h3>
          <p className="text-3xl font-bold text-red-600 mt-2">
            {stats.pendingApprovals}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-5 text-center border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            ₹{stats.totalRevenue.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Monthly Revenue Overview
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#6366F1" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
