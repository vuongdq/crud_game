// components/GameList.js
import React, { useEffect, useState } from 'react';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/games')  // Đảm bảo URL API chính xác
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  return (
    <div>
      <h1>Games List</h1>
      {games.length === 0 ? (
        <p>No games available</p>
      ) : (
        <ul>
          {games.map(game => (
            <li key={game.id}>
              <h2>{game.name}</h2>
              <p>{game.description}</p>
              {game.thumbnail ? (
                <img src={game.thumbnail} alt={game.name} style={{ width: '200px', height: 'auto' }} />
              ) : (
                <p>No thumbnail available</p>
              )}
              {game.flashFile ? (
                <p><a href={game.flashFile} target="_blank" rel="noopener noreferrer">Play Flash File</a></p>
              ) : (
                <p>No flash file available</p>
              )}
              {game.category ? (
                <p>Category: {game.category.name}</p>
              ) : (
                <p>No category assigned</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GameList;
