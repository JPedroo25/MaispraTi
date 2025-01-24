import { useNotificationSettings } from '../context/NotificationSettingsContext';

const NotificationStatus = () => {
  const { notificationsEnabled } = useNotificationSettings();

  return (
    <div>
      <h2>Notifications are {notificationsEnabled ? 'Enabled' : 'Disabled'}</h2>
    </div>
  );
};

export default NotificationStatus;
