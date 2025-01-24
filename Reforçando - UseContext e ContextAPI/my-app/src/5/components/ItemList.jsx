import { useUserPreferences } from '../context/UserPreferencesContext';

const ItemList = () => {
  const { viewMode } = useUserPreferences();
  
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
  ];

  return (
    <div className={viewMode === 'list' ? 'list-mode' : 'grid-mode'}>
      {items.map((item) => (
        <div key={item.id} className="item">
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default ItemList;