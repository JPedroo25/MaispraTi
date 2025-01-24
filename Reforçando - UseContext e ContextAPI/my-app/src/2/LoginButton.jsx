import { useAuth } from "./AuthContext";

const LoginButton = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login("Usuário");
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginButton;
