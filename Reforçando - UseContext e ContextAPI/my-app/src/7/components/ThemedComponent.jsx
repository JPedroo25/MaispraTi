import { useDynamicTheme } from '../context/DynamicThemeContext';

const ThemedComponent = () => {
  const { theme } = useDynamicTheme();

  const getThemeStyles = () => {
    switch (theme) {
      case 'light':
        return { backgroundColor: '#fff', color: '#000' };
      case 'dark':
        return { backgroundColor: '#333', color: '#fff' };
      case 'blue':
        return { backgroundColor: '#007bff', color: '#fff' };
      case 'green':
        return { backgroundColor: '#28a745', color: '#fff' };
      default:
        return { backgroundColor: '#fff', color: '#000' };
    }
  };

  return (
    <div style={getThemeStyles()} className="ThemedComponent">
      <h2>Themed Component</h2>
      <p>This component adapts to the selected theme!</p>
    </div>
  );
};

export default ThemedComponent;
