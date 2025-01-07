import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { set } from 'react-hook-form';

interface User {
  id: number;
  name: string;
  email: string;
}


function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
      .then((res) => {
        setUsers(res.data)
        setLoading(false);
      })
      .catch(err => setError(err.message));

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>))}
      </ul>
    </>
  );
}

export default App;