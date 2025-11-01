import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import VendorRegister from './pages/Vendor/VendorRegister';
import VendorLogin from './pages/Vendor/VendorLogin';
import VendorDashboard from './pages/Vendor/VendorDashboard';
import PublicVendorProfile from './pages/Vendor/PublicVendorProfile';
import ClientRegister from './pages/client/ClientRegister';
import ClientLogin from './pages/client/ClientLogin';
import ClientDashboard from './pages/client/ClientDashboard';
import EventDetails from './pages/client/EventDetails';
import PostRequirement from './pages/client/ClientPostRequirement';
import MyEvents from './pages/client/ClientMyEvents';
import ClientProfile from './pages/client/ClientProfile';
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminLayout from "./pages/admin/AdminLayout";
import ClientManagement from "./pages/admin/ClientManagement";
import AdminClientProfile from "./pages/admin/AdminClientProfile";
import VendorManagement from "./pages/admin/VendorManagement";
// import VendorProfile from "./pages/Admin/VendorProfile";
import EventManagement from "./pages/admin/EventManagement";
import PaymentCommission from "./pages/admin/PaymentCommission";
import PlatformSettings from "./pages/admin/Settings/PlatformSettings"; 
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
        <Route path='/client/register' element={<ClientRegister />} />
        <Route path='/client/login' element={<ClientLogin />} />
        <Route path='/client/dashboard' element={<ClientDashboard />} />
        <Route path="/client/post-requirement" element={<PostRequirement />} />
        <Route path="/client/myevents" element={<MyEvents />} />
        <Route path="/client/event/:id" element={<EventDetails />} />
        <Route path="/client/profile" element={<ClientProfile />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="clients" element={<ClientManagement />} />
          <Route path="clients/:id" element={<AdminClientProfile />} />
          <Route path="vendors" element={<VendorManagement />} />
          <Route path="vendors/:id" element={<PublicVendorProfile />} />
          <Route path="events" element={<EventManagement />} />
          <Route path="payments" element={<PaymentCommission />} />
          <Route path="settings/*" element={<PlatformSettings />} />
        </Route>

      </Routes>
      
    </Router>
    </>
  )
}
export default App;