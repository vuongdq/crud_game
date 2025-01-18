import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Navigation</h3>
      <ul>
        <li><Link to="/">Trang chủ</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/games">Games</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
