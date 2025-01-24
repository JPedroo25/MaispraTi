import { createContext, useState, useContext } from 'react';

const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {

  const [userProfile, setUserProfile] = useState({
    name: 'João Pedro',
    email: 'joaoPedro@exemplo.com',
  });

  const updateUserProfile = (newProfile) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      ...newProfile,
    }));
  };

  return (
    <UserProfileContext.Provider value={{ userProfile, updateUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => {
  return useContext(UserProfileContext);
};
