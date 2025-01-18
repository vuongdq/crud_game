import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState('');

  useEffect(() => {
    // Lấy thông tin category từ API hoặc state (giả sử)
    // setCategory(apiResponse);
  }, [id]);

  const handleSubmit = () => {
    // Xử lý cập nhật category ở đây

    // Sau khi cập nhật thành công, điều hướng về trang danh sách
    navigate('/categories');
  };

  return (
    <div>
      <h1>Cập nhật Category {id}</h1>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleSubmit}>Cập nhật</button>
    </div>
  );
};

export default UpdateCategory;
