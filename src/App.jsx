import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';

import VendorRegister from './pages/Vendor/VendorRegister';
import VendorLogin from './pages/Vendor/VendorLogin';
import VendorDashboard from './pages/Vendor/VendorDashboard';
import PublicVendorProfile from './pages/Vendor/PublicVendorProfile';

export const App = () => {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/vendor/register" element={<VendorRegister />} />
        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/vendor/:id" element={<PublicVendorProfile />} />
      </Routes>
      
    </Router>
    </>
  )
}
export default App;