import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import UserList from "./1/pages/UserList";
import UserDetail from "./1/pages/UserDetail";

import Login from "./2/pages/Login";
import Profile from "./2/pages/Profile";

import Dashboard from "./3/pages/Dashboard";
import Overview from "./3/pages/Overview";
import Settings from "./3/pages/Settings";
import Reports from "./3/pages/Reports";

import HomePage from "./4/pages/HomePage";
import ProfilePage from "./4/pages/ProfilePage";
import SettingsPage from "./4/pages/SettingsPage";
import NotFoundPage from "./4/pages/NotFoundPage";
import ProtectedRoute from "./4/pages/ProtectedRoute";

import { AuthProvider } from "./5/context/AuthContext";
import PrivateRoute from "./5/components/PrivateRoute";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";

import Breadcrumbs from "./7/components/Breadcrumbs";

import Search from "./8/components/Search";
import SearchResults from "./8/pages/SearchResults";

import React, { Suspense } from "react";
const HeavyComponent1 = React.lazy(() =>
  import("./9/components/HeavyComponent1")
);
const HeavyComponent2 = React.lazy(() =>
  import("./9/components/HeavyComponent2")
);
const Fallback = () => <div>Carregando...</div>;

import Tabs from "./10/components/Tabs";
import TabContent1 from "./10/components/TabContent1";
import TabContent2 from "./10/components/TabContent2";
import TabContent3 from "./10/components/TabContent3";

import Modal from "./11/components/Modal";

function App() {
  return (
    <Router>
      <Breadcrumbs />
      <Search />
      <Tabs />
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.pathname} timeout={500} classNames="fade">
          <div className="page-container">
            <nav>
              <ul className="section">
                <li>
                  <Link to="/">Home</Link>
                  <li>
                    <Link to="/heavy1">Componente Pesado 1</Link>
                  </li>
                  <li>
                    <Link to="/heavy2">Componente Pesado 2</Link>
                  </li>
                </li>
                <li>
                  <Link to="/users">Usuários</Link>
                </li>

                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>

                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>

              <div className="section">
                <h1>Minha Aplicação com Modal</h1>
                <li className="list">
                  <Link to="/modal">Abrir Modal</Link>
                </li>
              </div>
            </nav>

            <Suspense fallback={<Fallback />}>
              <AuthProvider>
                <Routes>
                  <Route path="/" element={<h1 className="section">Bem-vindo ao sistema</h1>} />
                  <Route path="/users" element={<UserList />} />
                  <Route path="/user/:userId" element={<UserDetail />} />{" "}
                  {/* Rota dinâmica */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="dashboard" element={<Dashboard />}>
                    <Route path="overview" element={<Overview />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="reports" element={<Reports />} />
                  </Route>
                  {/* Rota pública */}
                  <Route path="/" element={<HomePage />} />
                  {/* Rota protegida (ProfilePage) */}
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <ProfilePage />
                      </ProtectedRoute>
                    }
                  />
                  {/* Rota pública para configurações */}
                  <Route path="/settings" element={<SettingsPage />} />
                  {/* Rota para páginas não encontradas */}
                  <Route path="*" element={<NotFoundPage />} />
                  {/* Rota protegida */}
                  <Route
                    path="/dashboard"
                    element={<PrivateRoute element={<Dashboard />} />}
                  />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/heavy1" element={<HeavyComponent1 />} />
                  <Route path="/heavy2" element={<HeavyComponent2 />} />
                  <Route path="/tab1" element={<TabContent1 />} />
                  <Route path="/tab2" element={<TabContent2 />} />
                  <Route path="/tab3" element={<TabContent3 />} />
                  <Route path="/modal" element={<Modal />} />
                </Routes>
              </AuthProvider>
            </Suspense>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
}

export default App;
