import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  
  const getQueryParam = () => {
    const params = new URLSearchParams(location.search);
    return params.get('query');
  };

  const query = getQueryParam();

  const results = query
    ? [`Resultado 1 para "${query}"`, `Resultado 2 para "${query}"`, `Resultado 3 para "${query}"`]
    : [];

  return (
    <div className="section">
      <h1>Resultados de Busca</h1>
      {query ? (
        <div>
          <p>Resultados para: <strong>{query}</strong></p>
          <ul>
            {results.length ? (
              results.map((result, index) => <li key={index}>{result}</li>)
            ) : (
              <p>Nenhum resultado encontrado.</p>
            )}
          </ul>
        </div>
      ) : (
        <p>Digite um termo de busca para ver os resultados.</p>
      )}
    </div>
  );
}

export default SearchResults;
