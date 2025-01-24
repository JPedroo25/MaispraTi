import { useTheme } from "./ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  
  const buttonStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      Alternar para o tema {theme === "light" ? "Escuro" : "Claro"}
    </button>
  );
};

export default ThemeButton;
