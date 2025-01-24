import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <div className="section">
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
    </div>
  );
}

export default Search;
