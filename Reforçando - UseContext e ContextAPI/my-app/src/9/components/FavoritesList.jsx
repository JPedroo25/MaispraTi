import { useFavorites } from '../context/FavoritesContext';

const FavoritesList = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div>
      <h2>My Favorite Items</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet!</p>
      ) : (
        <ul>
          {favorites.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => removeFromFavorites(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
