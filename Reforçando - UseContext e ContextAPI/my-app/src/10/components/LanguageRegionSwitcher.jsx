import { useAdvancedLanguage } from '../context/AdvancedLanguageContext';

const LanguageRegionSwitcher = () => {
  const { language, region, changeLanguage, changeRegion } = useAdvancedLanguage();

  return (
    <div>
      <h2>Change Language and Region</h2>
      <div>
        <label>Language:</label>
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="pt">Português</option>
        </select>
      </div>
      <div>
        <label>Region:</label>
        <select
          value={region}
          onChange={(e) => changeRegion(e.target.value)}
        >
          <option value="US">United States</option>
          <option value="BR">Brazil</option>
        </select>
      </div>
      <div>
        <p>Selected Language: {language === 'en' ? 'English' : 'Português'}</p>
        <p>Selected Region: {region === 'US' ? 'United States' : 'Brazil'}</p>
      </div>
    </div>
  );
};

export default LanguageRegionSwitcher;
