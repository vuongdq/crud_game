import React, { useState, useEffect } from 'react';

const GameList = () => {
  const [games, setGames] = useState([]);

  // Fetch dữ liệu game từ backend
  useEffect(() => {
    fetch('http://localhost:3000/games')  // URL backend
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  // Hàm xử lý xóa game
  const handleDelete = (gameId) => {
    fetch(`http://localhost:3000/games/${gameId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Cập nhật lại danh sách game sau khi xóa
          setGames(games.filter(game => game.id !== gameId));
        }
      })
      .catch(error => console.error('Error deleting game:', error));
  };

  // Hàm xử lý chỉnh sửa game
  const handleEdit = (gameId) => {
    // Điều hướng đến trang sửa game, ví dụ sử dụng React Router
    window.location.href = `/games/edit/${gameId}`;
  };

  return (
    <div>
      <h1>Game List</h1>
      {/* Nút thêm game */}
      <button onClick={() => window.location.href = '/games/new'}>Add New Game</button>

      {/* Hiển thị danh sách game trong bảng */}
      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Thumbnail</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {games.map(game => (
            <tr key={game.id}>
              <td>{game.id}</td>
              <td>{game.name}</td>
              <td>{game.description}</td>
              <td>{game.thumbnail ? <img src={game.thumbnail} alt="Thumbnail" width="50" /> : 'No Image'}</td>
              <td>{game.category ? game.category.name : 'No Category'}</td>
              <td>
                {/* Nút sửa */}
                <button onClick={() => handleEdit(game.id)}>Edit</button>
                {/* Nút xóa */}
                <button onClick={() => handleDelete(game.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameList;
