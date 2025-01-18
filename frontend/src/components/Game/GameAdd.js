import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GameAdd = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [flashFile, setFlashFile] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Lấy danh sách các categories từ backend
  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newGame = {
      name,
      description,
      thumbnail,
      flashFile,
      categoryId,
    };

    fetch('http://localhost:3000/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newGame),
    })
      .then(response => response.json())
      .then(() => {
        console.log('Game added');
        navigate('/games');
      })
      .catch(error => console.error('Error adding game:', error));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Add New Game</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">Thumbnail URL</label>
          <input
            type="text"
            className="form-control"
            id="thumbnail"
            value={thumbnail}
            onChange={e => setThumbnail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="flashFile" className="form-label">Flash File URL</label>
          <input
            type="text"
            className="form-control"
            id="flashFile"
            value={flashFile}
            onChange={e => setFlashFile(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            id="category"
            className="form-select"
            value={categoryId}
            onChange={e => setCategoryId(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add Game</button>
      </form>
    </div>
  );
};

export default GameAdd;
