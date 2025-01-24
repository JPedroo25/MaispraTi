import { useState } from 'react';
import { useFavorites } from '../context/FavoritesContext';

const AddToFavorites = () => {
  const [newItem, setNewItem] = useState('');
  const { addToFavorites } = useFavorites();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem) {
      addToFavorites(newItem);
      setNewItem('');
    }
  };

  return (
    <div>
      <h2>Add to Favorites</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item name"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddToFavorites;