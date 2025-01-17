import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const GameEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState({ name: '', description: '', thumbnail: '', flashFile: '', categoryId: '' });

  useEffect(() => {
    const fetchGame = async () => {
      const response = await fetch(`http://localhost:3000/games/${id}`);
      const data = await response.json();
      setGame(data);
    };
    fetchGame();
  }, [id]);

  const handleUpdateGame = async () => {
    const response = await fetch(`http://localhost:3000/games/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(game),
    });
    if (response.ok) {
      navigate('/games');
    }
  };

  return (
    <div>
      <h1>Sửa Game</h1>
      <input
        type="text"
        value={game.name}
        onChange={(e) => setGame({ ...game, name: e.target.value })}
      />
      <textarea
        value={game.description}
        onChange={(e) => setGame({ ...game, description: e.target.value })}
      />
      <input
        type="text"
        value={game.thumbnail}
        onChange={(e) => setGame({ ...game, thumbnail: e.target.value })}
      />
      <input
        type="text"
        value={game.flashFile}
        onChange={(e) => setGame({ ...game, flashFile: e.target.value })}
      />
      <input
        type="text"
        value={game.categoryId}
        onChange={(e) => setGame({ ...game, categoryId: e.target.value })}
      />
      <button onClick={handleUpdateGame}>Cập nhật</button>
    </div>
  );
};

export default GameEdit;
