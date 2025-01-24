

import { ThemeProvider } from "./1/ThemeContext"; // Importando o provedor do contexto
import ThemeButton from "./1/ThemeButton"; // Importando o botão de troca de tema

import { AuthProvider } from "./2/AuthContext"; // Importando o provedor do contexto
import LoginButton from "./2/LoginButton"; // Importando o botão de login
import LogoutButton from "./2/LogoutButton"; // Importando o botão de logout
import UserStatus from "./2/UserStatus";

import { CartProvider } from "./3/components/context/CartContext";
import ProductList from "./3/components/ProductList";
import Cart from "./3/components/Cart";

import { LanguageProvider } from './4/context/LanguageContext';
import Greeting from './4/components/Greeting';
import LanguageSwitcher from './4/components/LanguageSwitcher';

import { UserPreferencesProvider } from './5/context/UserPreferencesContext';
import ViewModeSwitcher from './5/components/ViewModeSwitcher';
import ItemList from './5/components/ItemList';

import { NotificationSettingsProvider } from './6/context/NotificationSettingsContext';
import NotificationToggle from './6/components/NotificationToggle';
import NotificationStatus from './6/components/NotificationStatus';

import { DynamicThemeProvider } from './7/context/DynamicThemeContext';
import ThemeSelector from './7/components/ThemeSelector';
import ThemedComponent from './7/components/ThemedComponent';

import { UserProfileProvider } from './8/context/UserProfileContext';
import Profile from './8/components/Profile';
import EditProfile from './8/components/EditProfile';

import { FavoritesProvider } from './9/context/FavoritesContext';
import AddToFavorites from './9/components/AddToFavorites';
import FavoritesList from './9/components/FavoritesList';

import { AdvancedLanguageProvider } from './10/context/AdvancedLanguageContext';
import LanguageRegionSwitcher from './10/components/LanguageRegionSwitcher';
import LocalizedContent from './10/components/LocalizedContent';

import { LayoutPreferencesProvider } from './11/context/LayoutPreferencesContext';
import LayoutSwitcher from './11/components/LayoutSwitcher';
import StyledComponent from './11/components/StyledComponent';

import { NavigationHistoryProvider } from './12/context/NavigationHistoryContext';
import NavigationTracker from './12/components/NavigationTracker';
import HistoryList from './12/components/HistoryList';


function App() {
  return (
    <>
      <ThemeProvider>
        <div className="section">
          <h1>Bem-vindo ao aplicativo de tema</h1>
          <ThemeButton />
        </div>
      </ThemeProvider>

      <AuthProvider>
        <div className="section">
          <h1>Gerenciamento de Autenticação</h1>
          <UserStatus />
          <LoginButton />
          <LogoutButton />
        </div>
      </AuthProvider>

      <CartProvider>
        <div className="section">
          <h1>Loja Online</h1>
          <ProductList />
          <Cart />
        </div>
      </CartProvider>

      <LanguageProvider>
      <div className="section">
        <h1>Language Context Example</h1>
        <LanguageSwitcher />
        <Greeting />
      </div>
    </LanguageProvider>

    <UserPreferencesProvider>
      <div className="section">
        <h1>User Preferences Context Example</h1>
        <ViewModeSwitcher />
        <ItemList />
      </div>
    </UserPreferencesProvider>

    <NotificationSettingsProvider>
      <div className="section">
        <h1>Notification Settings</h1>
        <NotificationToggle />
        <NotificationStatus />
      </div>
    </NotificationSettingsProvider>

    <DynamicThemeProvider>
      <div className="section">
        <h1>Dynamic Theme Selector</h1>
        <ThemeSelector />
        <ThemedComponent />
      </div>
    </DynamicThemeProvider>

    <UserProfileProvider>
      <div className="section">
        <h1>User Profile</h1>
        <Profile />
        <EditProfile />
      </div>
    </UserProfileProvider>

    <FavoritesProvider>
      <div className="section">
        <h1>My Favorite Items</h1>
        <AddToFavorites />
        <FavoritesList />
      </div>
    </FavoritesProvider>

    <AdvancedLanguageProvider>
      <div className="section">
        <h1>Advanced Language and Region Switcher</h1>
        <LanguageRegionSwitcher />
        <LocalizedContent />
      </div>
    </AdvancedLanguageProvider>

    <LayoutPreferencesProvider>
      <div className="section">
        <h1>Layout Preferences App</h1>
        <LayoutSwitcher />
        <StyledComponent />
      </div>
    </LayoutPreferencesProvider>

    <NavigationHistoryProvider>
      <div className="section">
        <h1>Navigation History App</h1>
        <NavigationTracker />
        <HistoryList />
      </div>
    </NavigationHistoryProvider>
    </>
  );
}

export default App;
