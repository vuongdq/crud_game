import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('http://localhost:3000/categories');
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleDeleteCategory = async (id) => {
    await fetch(`http://localhost:3000/categories/${id}`, { method: 'DELETE' });
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div className="category-list">
      <h1>Danh sách Category</h1>
      <Link to="/categories/add" className="btn btn-primary mb-3">Thêm Category</Link>
      <ul className="list-group">
        {categories.map((category) => (
          <li key={category.id} className="list-group-item">
            <div>
              <h3>{category.name}</h3>
              <p>{category.isActive ? 'Hoạt động' : 'Không hoạt động'}</p>
            </div>
            <div>
              <Link to={`/categories/edit/${category.id}`} className="btn btn-secondary">
                Sửa
              </Link>
              <button onClick={() => handleDeleteCategory(category.id)} className="btn btn-danger">
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
