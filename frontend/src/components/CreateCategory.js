import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCategory = () => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = () => {
    // Giả sử bạn gửi dữ liệu lên server để tạo mới category

    // Sau khi tạo xong, điều hướng về trang danh sách
    navigate('/categories');
  };

  return (
    <div>
      <h1>Thêm Category Mới</h1>
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button onClick={handleSubmit}>Thêm</button>
    </div>
  );
};

export default CreateCategory;
