import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => setError(err.message));

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .then(() => setUsers(users.filter((u) => u.id !== user.id)))
      .catch((err: AxiosError) => setError(err.message));
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUsers = { id: 0, name: 'Bikram'};
    setUsers([...users, newUsers]);
    
    axios
      .post('https://jsonplaceholder.typicode.com/xusers', newUsers)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
          .catch((err) => {
            setError(err.message);
            setUsers(originalUsers);
          });
      };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn-primary mb-3" onClick={addUser}>Add</button>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            {user.name}
            <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
