import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', email: '', password: '' });

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // Handle Add User
  const handleAddUser = async () => {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    setUsers((prevUsers) => [...prevUsers, data]);
  };

  // Handle Delete User
  const handleDeleteUser = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, { method: 'DELETE' });
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>Danh sách Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.username} - {user.email}</p>
            <button onClick={() => handleDeleteUser(user.id)}>Xóa</button>
          </li>
        ))}
      </ul>
      <h3>Thêm User</h3>
      <input
        type="text"
        placeholder="Username"
        value={newUser.username}
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />
      <button onClick={handleAddUser}>Thêm User</button>
    </div>
  );
};

export default UserList;
