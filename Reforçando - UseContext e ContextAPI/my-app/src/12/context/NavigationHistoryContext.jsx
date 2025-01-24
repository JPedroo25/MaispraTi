import { createContext, useState, useContext } from 'react';

const NavigationHistoryContext = createContext();

export const NavigationHistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addToHistory = (url) => {
    setHistory((prevHistory) => [...prevHistory, url]);
  };

  return (
    <NavigationHistoryContext.Provider value={{ history, addToHistory }}>
      {children}
    </NavigationHistoryContext.Provider>
  );
};

export const useNavigationHistory = () => {
  return useContext(NavigationHistoryContext);
};
