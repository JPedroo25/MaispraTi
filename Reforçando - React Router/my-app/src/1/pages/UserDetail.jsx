import { useParams } from 'react-router-dom';

function UserDetail() {
  const { userId } = useParams();

  const users = [
    { id: 1, name: 'João', email: 'joao@example.com', age: 25 },
    { id: 2, name: 'Maria', email: 'maria@example.com', age: 30 },
    { id: 3, name: 'Pedro', email: 'pedro@example.com', age: 22 },
  ];

  const user = users.find(u => u.id === parseInt(userId));

  if (!user) {
    return <div>Usuário não encontrado!</div>;
  }

  return (
    <div className="section">
      <h2>Detalhes do Usuário</h2>
      <p><strong>Nome:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Idade:</strong> {user.age}</p>
    </div>
  );
}

export default UserDetail;
