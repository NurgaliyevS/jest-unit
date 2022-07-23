import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div data-testid="users-page">
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id} data-testid="user-item">
          {user.name}
        </Link>
      ))}
    </div>
  );
}

export default Users;
