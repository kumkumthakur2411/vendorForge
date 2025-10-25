// import React from 'react';

// const Footer = () => (
//   <footer className=" bottom-0 left-0 w-full bg-gray-900 text-gray-300 text-center py-3 z-50">
//     <p>© 2025 EventForge. All Rights Reserved.</p>
//   </footer>
// );

// export default Footer;
const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div>
        <h4 className="font-semibold mb-2 text-white">VendorForge</h4>
        <p className="text-sm">Your all-in-one event vendor marketplace.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-white">Quick Links</h4>
        <ul className="text-sm space-y-1">
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Vendors</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-white">Follow Us</h4>
        <div className="flex space-x-3 text-lg">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
    <div className="text-center text-xs text-gray-500 mt-6">
      © 2025 VendorForge. All rights reserved.
    </div>
  </footer>
);
export default Footer;
