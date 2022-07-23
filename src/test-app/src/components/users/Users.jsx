import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/users"
    );
    setUsers(response.data);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} data-testid="user-item">
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default Users;
