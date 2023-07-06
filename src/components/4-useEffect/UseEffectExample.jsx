import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  const url = "https://jsonplaceholder.typicode.com/users";


  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setUsers(result);
      // console.log(result);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h2>Hello UseEffect</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <h3>{user.username}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default UseEffectExample;
