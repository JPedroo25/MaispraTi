import { useLayoutPreferences } from '../context/LayoutPreferencesContext';

const StyledComponent = () => {
  const { spacing, font } = useLayoutPreferences();

  const styles = {
    container: {
      fontFamily: font,
      padding: spacing === 'small' ? '5px' : spacing === 'large' ? '20px' : '10px',
      margin: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Styled Component</h2>
      <p>This is a sample component with dynamic styles based on your layout preferences.</p>
    </div>
  );
};

export default StyledComponent;
