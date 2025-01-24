import { createContext, useState, useContext } from 'react';

const AdvancedLanguageContext = createContext();

export const AdvancedLanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState('en');
  const [region, setRegion] = useState('US');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const changeRegion = (newRegion) => {
    setRegion(newRegion);
  };

  return (
    <AdvancedLanguageContext.Provider value={{ language, region, changeLanguage, changeRegion }}>
      {children}
    </AdvancedLanguageContext.Provider>
  );
};

export const useAdvancedLanguage = () => {
  return useContext(AdvancedLanguageContext);
};
