import { createContext, useState, useContext } from 'react';

const LayoutPreferencesContext = createContext();

export const LayoutPreferencesProvider = ({ children }) => {
  const [spacing, setSpacing] = useState('normal');
  const [font, setFont] = useState('Arial');
  const changeSpacing = (newSpacing) => {
    setSpacing(newSpacing);
  };

  const changeFont = (newFont) => {
    setFont(newFont);
  };

  return (
    <LayoutPreferencesContext.Provider value={{ spacing, font, changeSpacing, changeFont }}>
      {children}
    </LayoutPreferencesContext.Provider>
  );
};

export const useLayoutPreferences = () => {
  return useContext(LayoutPreferencesContext);
};
