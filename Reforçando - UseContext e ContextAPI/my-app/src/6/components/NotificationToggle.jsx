import { useNotificationSettings } from '../context/NotificationSettingsContext';

const NotificationToggle = () => {
  const { notificationsEnabled, toggleNotifications } = useNotificationSettings();

  return (
    <div>
      <button onClick={toggleNotifications}>
        {notificationsEnabled ? 'Disable Notifications' : 'Enable Notifications'}
      </button>
    </div>
  );
};

export default NotificationToggle;
