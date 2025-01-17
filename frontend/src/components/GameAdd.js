import React, { useState, useEffect } from 'react';

const GameAdd = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [flashFile, setFlashFile] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);

  // Lấy danh sách các categories từ backend
  useEffect(() => {
    fetch('http://localhost:3000/categories')  // URL của API categories
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
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

    // Gửi dữ liệu game mới tới backend
    fetch('http://localhost:3000/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newGame),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Game added:', data);
        // Sau khi thêm game thành công, bạn có thể điều hướng lại trang game list
        window.location.href = '/games';
      })
      .catch((error) => console.error('Error adding game:', error));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-6">
        <h1 className="text-center mb-4">Add New Game</h1>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              required
            />
          </div>

          {/* Thumbnail URL */}
          <div className="mb-3">
            <label className="form-label" htmlFor="thumbnail">
              Thumbnail URL
            </label>
            <input
              type="text"
              id="thumbnail"
              className="form-control"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>

          {/* Flash File URL */}
          <div className="mb-3">
            <label className="form-label" htmlFor="flashFile">
              Flash File URL
            </label>
            <input
              type="text"
              id="flashFile"
              className="form-control"
              value={flashFile}
              onChange={(e) => setFlashFile(e.target.value)}
            />
          </div>

          {/* Category */}
          <div className="mb-3">
            <label className="form-label" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              className="form-select"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-primary">
              Add Game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GameAdd;
