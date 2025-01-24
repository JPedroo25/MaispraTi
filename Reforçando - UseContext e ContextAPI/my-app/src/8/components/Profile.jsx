import { useUserProfile } from '../context/UserProfileContext';

const Profile = () => {
  const { userProfile } = useUserProfile();

  return (
    <div>
      <h2>Profile Information</h2>
      <p><strong>Name:</strong> {userProfile.name}</p>
      <p><strong>Email:</strong> {userProfile.email}</p>
    </div>
  );
};

export default Profile;
