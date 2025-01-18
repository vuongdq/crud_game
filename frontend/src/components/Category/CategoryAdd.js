import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryAdd = () => {
  const [newCategory, setNewCategory] = useState({ name: '', isActive: false });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewCategory({
      ...newCategory,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCategory),
      });
      if (response.ok) {
        navigate('/categories'); // Redirect to category list
      } else {
        console.error('Failed to add category');
      }
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div>
      <h1>Thêm Category</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Tên Category:</label>
          <input
            type="text"
            name="name"
            value={newCategory.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>
            Hoạt động:
            <input
              type="checkbox"
              name="isActive"
              checked={newCategory.isActive}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Thêm Category</button>
      </form>
    </div>
  );
};

export default CategoryAdd;
