import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="section">
      <h2>Painel de Controle</h2>
      <nav>
        <ul>
          <li>
            <Link to="overview">Visão Geral</Link>
          </li>
          <li>
            <Link to="settings">Configurações</Link>
          </li>
          <li>
            <Link to="reports">Relatórios</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Dashboard;
