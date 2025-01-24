import { useUserPreferences } from '../context/UserPreferencesContext';

const ViewModeSwitcher = () => {
  const { viewMode, toggleViewMode } = useUserPreferences();

  return (
    <div>
      <button onClick={toggleViewMode}>
        Switch to {viewMode === 'list' ? 'Grid' : 'List'} Mode
      </button>
    </div>
  );
};

export default ViewModeSwitcher;