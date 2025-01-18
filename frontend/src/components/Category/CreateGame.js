import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateGame = () => {
  const navigate = useNavigate();
  const [gameName, setGameName] = useState('');

  const handleSubmit = () => {
    // Giả sử bạn gửi dữ liệu lên server để tạo mới game

    // Sau khi tạo xong, điều hướng về trang danh sách
    navigate('/games');
  };

  return (
    <div>
      <h1>Thêm Game Mới</h1>
      <input
        type="text"
        value={gameName}
        onChange={(e) => setGameName(e.target.value)}
      />
      <button onClick={handleSubmit}>Thêm</button>
    </div>
  );
};

export default CreateGame;
