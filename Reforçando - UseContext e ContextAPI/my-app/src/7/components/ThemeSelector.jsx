import { useDynamicTheme } from '../context/DynamicThemeContext';

const ThemeSelector = () => {
  const { theme, changeTheme, themes } = useDynamicTheme();

  return (
    <div>
      <h2>Choose a theme:</h2>
      <select value={theme} onChange={(e) => changeTheme(e.target.value)}>
        {themes.map((themeOption) => (
          <option key={themeOption} value={themeOption}>
            {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSelector;
