import { createContext, useState, useContext } from 'react';

const UserPreferencesContext = createContext();

export const UserPreferencesProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState('list');

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'list' ? 'grid' : 'list'));
  };

  return (
    <UserPreferencesContext.Provider value={{ viewMode, toggleViewMode }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => {
  return useContext(UserPreferencesContext);
};