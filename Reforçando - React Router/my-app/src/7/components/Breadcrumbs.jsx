import { useLocation, Link } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter(x => x);

  const generateLink = (index) => {
    return '/' + pathnames.slice(0, index + 1).join('/');
  };

  return (
    <div className="section">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const path = generateLink(index);
          return (
            <li key={index} className="breadcrumb-item">
              {index === pathnames.length - 1 ? (
                <span>{value}</span>
              ) : (
                <Link to={path}>{value}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
    </div>
  );
}

export default Breadcrumbs;
