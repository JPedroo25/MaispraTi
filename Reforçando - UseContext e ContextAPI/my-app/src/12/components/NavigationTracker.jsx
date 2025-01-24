import { useState } from 'react';
import { useNavigationHistory } from '../context/NavigationHistoryContext';

const NavigationTracker = () => {
  const [url, setUrl] = useState('');
  const { addToHistory } = useNavigationHistory();

  const handleAddToHistory = () => {
    if (url) {
      addToHistory(url);
      setUrl('');
    }
  };

  return (
    <div>
      <h2>Track Navigation</h2>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={handleAddToHistory}>Add to History</button>
    </div>
  );
};

export default NavigationTracker;
