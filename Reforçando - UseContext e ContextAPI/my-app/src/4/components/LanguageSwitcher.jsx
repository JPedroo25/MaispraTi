import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div>
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'Switch to Portuguese' : 'Switch to English'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
