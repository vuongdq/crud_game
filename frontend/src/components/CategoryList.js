import React, { useEffect, useState } from 'react';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: '', isActive: false });

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('http://localhost:3000/categories');
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  // Handle Add Category
  const handleAddCategory = async () => {
    const response = await fetch('http://localhost:3000/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCategory),
    });
    const data = await response.json();
    setCategories((prevCategories) => [...prevCategories, data]);
  };

  // Handle Delete Category
  const handleDeleteCategory = async (id) => {
    await fetch(`http://localhost:3000/categories/${id}`, { method: 'DELETE' });
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div>
      <h1>Danh sách Category</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <h3>{category.name}</h3>
            <p>{category.isActive ? 'Hoạt động' : 'Không hoạt động'}</p>
            <button onClick={() => handleDeleteCategory(category.id)}>Xóa</button>
          </li>
        ))}
      </ul>
      <h3>Thêm Category</h3>
      <input
        type="text"
        placeholder="Tên Category"
        value={newCategory.name}
        onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
      />
      <label>
        Hoạt động:
        <input
          type="checkbox"
          checked={newCategory.isActive}
          onChange={() => setNewCategory({ ...newCategory, isActive: !newCategory.isActive })}
        />
      </label>
      <button onClick={handleAddCategory}>Thêm Category</button>
    </div>
  );
};

export default CategoryList;
