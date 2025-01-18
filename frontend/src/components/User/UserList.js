import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, { method: 'DELETE' });
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="user-list">
      <h1>Danh sách Users</h1>
      <Link to="/users/add" className="btn btn-primary mb-3">Thêm User</Link>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            <div>
              <p>{user.username} - {user.email}</p>
            </div>
            <div>
              <Link to={`/users/edit/${user.id}`} className="btn btn-secondary">
                Sửa
              </Link>
              <button onClick={() => handleDeleteUser(user.id)} className="btn btn-danger">
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
