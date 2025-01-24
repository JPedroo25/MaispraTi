import { useLayoutPreferences } from '../context/LayoutPreferencesContext';

const LayoutSwitcher = () => {
  const { spacing, font, changeSpacing, changeFont } = useLayoutPreferences();

  return (
    <div>
      <h2>Customize Your Layout</h2>
      
      <div>
        <label>Spacing:</label>
        <select value={spacing} onChange={(e) => changeSpacing(e.target.value)}>
          <option value="normal">Normal</option>
          <option value="large">Large</option>
          <option value="small">Small</option>
        </select>
      </div>

      <div>
        <label>Font:</label>
        <select value={font} onChange={(e) => changeFont(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
      </div>

      <div>
        <p>Current Spacing: {spacing}</p>
        <p>Current Font: {font}</p>
      </div>
    </div>
  );
};

export default LayoutSwitcher;
