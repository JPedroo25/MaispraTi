import { useNavigationHistory } from '../context/NavigationHistoryContext';

const HistoryList = () => {
  const { history } = useNavigationHistory();

  return (
    <div>
      <h2>Navigation History</h2>
      <ul>
        {history.length === 0 ? (
          <li>No history recorded yet.</li>
        ) : (
          history.map((url, index) => <li key={index}>{url}</li>)
        )}
      </ul>
    </div>
  );
};

export default HistoryList;
