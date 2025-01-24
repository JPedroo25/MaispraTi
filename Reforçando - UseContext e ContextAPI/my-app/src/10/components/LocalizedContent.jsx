import { useAdvancedLanguage } from '../context/AdvancedLanguageContext';

const LocalizedContent = () => {
  const { language, region } = useAdvancedLanguage();

  const getGreeting = () => {
    if (language === 'en') {
      return region === 'US' ? 'Hello, how are you?' : 'Hello, how are you in Brazil?';
    } else if (language === 'pt') {
      return region === 'BR' ? 'Olá, como você está?' : 'Olá, como você está nos Estados Unidos?';
    }
  };

  return (
    <div>
      <h2>Localized Content</h2>
      <p>{getGreeting()}</p>
    </div>
  );
};

export default LocalizedContent;
