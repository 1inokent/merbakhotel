import React from 'react';
import Footer from './Footer';

import Navbar from './Navbar';

import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout-style">
      <Navbar />
      <div className="outlet-style">
        <div className="background-style">{children}</div>
      </div>
      
      <Footer />
    </div>
  );
}
