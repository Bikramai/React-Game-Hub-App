import axios from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}


function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/comments')
      .then(res => 
        setUsers(res.data));
  }, []);

  return <ul>
    {users.map(user => <li key={user.id}>{user.name}</li>)}
  </ul>; 
}

export default App;