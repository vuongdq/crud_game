import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Trang chủ</h1>
      <p>Chào mừng đến với ứng dụng quản lý!</p>
      
      <h3>Chức năng quản lý:</h3>
      <ul>
        <li><Link to="/users">Quản lý User</Link></li>
        <li><Link to="/games">Quản lý Game</Link></li>
        <li><Link to="/categories">Quản lý Category</Link></li>
      </ul>
    </div>
  );
};

export default Home;
