import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import UserList from './components/UserList';
import UserEdit from './components/UserEdit';
import GameList from './components/GameList';
import GameEdit from './components/GameEdit';
import GameAdd from './components/GameAdd';  // Import component GameAdd
import CategoryList from './components/CategoryList';

const App = () => (
  <Router>
    <Routes>
      {/* Trang chủ */}
      <Route path="/" element={<Home />} />
      
      {/* Chức năng User */}
      <Route path="/users" element={<UserList />} />
      <Route path="/users/edit/:id" element={<UserEdit />} />

      {/* Chức năng Game */}
      <Route path="/games" element={<GameList />} />
      <Route path="/games/edit/:id" element={<GameEdit />} />
      <Route path="/games/new" element={<GameAdd />} />  {/* Thêm route cho Add New Game */}

      {/* Chức năng Category */}
      <Route path="/categories" element={<CategoryList />} />
    </Routes>
  </Router>
);

export default App;
