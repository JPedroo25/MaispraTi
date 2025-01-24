import { Link } from 'react-router-dom';

function UserList() {
  const users = [
    { id: 1, name: 'João' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'Pedro' },
  ];

  return (
    <div className="section">
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
