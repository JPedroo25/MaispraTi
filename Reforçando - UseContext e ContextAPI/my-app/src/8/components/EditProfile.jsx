import { useState } from 'react';
import { useUserProfile } from '../context/UserProfileContext';

const EditProfile = () => {
  const { userProfile, updateUserProfile } = useUserProfile();  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile({ name, email });
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default EditProfile;
