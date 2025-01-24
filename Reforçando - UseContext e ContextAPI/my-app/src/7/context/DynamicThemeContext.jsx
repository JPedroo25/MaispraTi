import { createContext, useState, useContext } from 'react';

const DynamicThemeContext = createContext();

export const DynamicThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const themes = ['light', 'dark', 'blue', 'green'];

  const changeTheme = (newTheme) => {
    if (themes.includes(newTheme)) {
      setTheme(newTheme);
    }
  };

  return (
    <DynamicThemeContext.Provider value={{ theme, changeTheme, themes }}>
      {children}
    </DynamicThemeContext.Provider>
  );
};

export const useDynamicTheme = () => {
  return useContext(DynamicThemeContext);
};
