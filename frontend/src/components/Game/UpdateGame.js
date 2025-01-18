import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateGame = () => {
  const { id } = useParams();  // Lấy id từ URL
  const navigate = useNavigate();  // Hàm điều hướng
  const [game, setGame] = useState('');

  useEffect(() => {
    // Giả sử bạn gọi API hoặc lấy thông tin từ một nơi nào đó để cập nhật
    // setGame(apiResponse);
  }, [id]);

  const handleSubmit = () => {
    // Xử lý cập nhật thông tin game ở đây

    // Sau khi cập nhật thành công, điều hướng về trang danh sách
    navigate('/games');
  };

  return (
    <div>
      <h1>Cập nhật Game {id}</h1>
      <input
        type="text"
        value={game}
        onChange={(e) => setGame(e.target.value)}
      />
      <button onClick={handleSubmit}>Cập nhật</button>
    </div>
  );
};

export default UpdateGame;
