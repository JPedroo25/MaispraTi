import { useLanguage } from '../context/LanguageContext';

const Greeting = () => {
  const { language } = useLanguage();

  const greetingMessage = language === 'en' ? 'Hello, Welcome!' : 'Olá, Bem-vindo!';

  return <h2>{greetingMessage}</h2>;
};

export default Greeting;
