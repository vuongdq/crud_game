import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/User/UserList';
import UserEdit from './components/User/UserEdit';
import UserAdd from './components/User/UserAdd'; // Import thêm UserAdd
import GameList from './components/Game/GameList';
import GameEdit from './components/Game/GameEdit';
import GameAdd from './components/Game/GameAdd';
import CategoryList from './components/Category/CategoryList';
import CategoryEdit from './components/Category/CategoryEdit'; // Import thêm CategoryEdit
import CategoryAdd from './components/Category/CategoryAdd'; // Import thêm CategoryAdd
import MainLayout from './components/Layout/MainLayout';

const App = () => (
  <Router>
    <MainLayout>
      <Routes>
        {/* Trang chủ */}
        <Route path="/" element={<Home />} />
        
        {/* Chức năng User */}
        <Route path="/users" element={<UserList />} />
        <Route path="/users/add" element={<UserAdd />} /> {/* Route thêm user */}
        <Route path="/users/edit/:id" element={<UserEdit />} />

        {/* Chức năng Game */}
        <Route path="/games" element={<GameList />} />
        <Route path="/games/add" element={<GameAdd />} />
        <Route path="/games/edit/:id" element={<GameEdit />} />


        {/* Chức năng Category */}
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/add" element={<CategoryAdd />} /> {/* Route thêm category */}
        <Route path="/categories/edit/:id" element={<CategoryEdit />} />

      </Routes>
    </MainLayout>
  </Router>
);

export default App;
