import React from 'react';
import './MainLayout.css'; // Import CSS file
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MainLayout = ({ children }) => (
  <div className="main-layout">
    <Sidebar className="sidebar" />
    <div className="main-content">
      <Header className="header" />
      {children}
      <Footer className="footer" />
    </div>
  </div>
);

export default MainLayout;
