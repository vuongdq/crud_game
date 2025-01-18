import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GameList = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/games')  // Đảm bảo URL API chính xác
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  const handleEdit = (id) => {
    navigate(`/games/edit/${id}`);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/games/${id}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          setGames(games.filter(game => game.id !== id));
        } else {
          console.error('Failed to delete game');
        }
      })
      .catch(error => console.error('Error deleting game:', error));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Games List</h1>
      <div className="mb-3 text-end">
        <button className="btn btn-primary" onClick={() => navigate('/games/add')}>Add New Game</button>
      </div>
      {games.length === 0 ? (
        <p>No games available</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
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
                <td>{game.name}</td>
                <td>{game.description}</td>
                <td>
                  {game.thumbnail ? (
                    <img src={game.thumbnail} alt={game.name} style={{ width: '100px', height: 'auto' }} />
                  ) : (
                    'No thumbnail'
                  )}
                </td>
                <td>{game.category ? game.category.name : 'No category'}</td>
                <td>
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(game.id)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(game.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GameList;
