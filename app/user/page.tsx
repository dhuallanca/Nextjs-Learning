export default async function User() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return (
    <div>Users
      <ul>
        {users.map((user: {id:number, name: string}) => {
          return (<li key={user.id}>
            <h3>{user.name}</h3>
          </li>)
        })}
      </ul>
    </div>
  );
}