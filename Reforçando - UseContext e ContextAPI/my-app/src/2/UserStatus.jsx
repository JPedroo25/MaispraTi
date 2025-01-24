import { useAuth } from "./AuthContext";

const UserStatus = () => {
  const { user } = useAuth();

  return (
    <p>
      {user ? `Bem-vindo, ${user}! Você está logado.` : "Você está deslogado."}
    </p>
  );
};

export default UserStatus;
