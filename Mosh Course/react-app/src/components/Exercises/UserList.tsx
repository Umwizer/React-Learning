import React, { useEffect, useState } from "react";
type User = {
  id: number;
  name: string;
};
export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
