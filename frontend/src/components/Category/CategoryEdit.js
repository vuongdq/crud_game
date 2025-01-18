import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryEdit = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({ name: '', isActive: false });
  const navigate = useNavigate();

  // Fetch category details by ID
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`http://localhost:3000/categories/${id}`);
        if (response.ok) {
          const data = await response.json();
          setCategory(data);
        } else {
          console.error('Failed to fetch category');
        }
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };
    fetchCategory();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCategory({
      ...category,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/categories/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(category),
      });
      if (response.ok) {
        navigate('/categories'); // Redirect to category list
      } else {
        console.error('Failed to update category');
      }
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <div>
      <h1>Chỉnh sửa Category</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Tên Category:</label>
          <input
            type="text"
            name="name"
            value={category.name}
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
              checked={category.isActive}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Cập nhật Category</button>
      </form>
    </div>
  );
};

export default CategoryEdit;
