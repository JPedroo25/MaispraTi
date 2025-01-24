import { createContext, useState, useContext } from 'react';

const NotificationSettingsContext = createContext();

export const NotificationSettingsProvider = ({ children }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(prevState => !prevState);
  };

  return (
    <NotificationSettingsContext.Provider value={{ notificationsEnabled, toggleNotifications }}>
      {children}
    </NotificationSettingsContext.Provider>
  );
};

export const useNotificationSettings = () => {
  return useContext(NotificationSettingsContext);
};
