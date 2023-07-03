import React, {
  useState, useEffect, useMemo,
} from 'react';
import { axiosInstance } from '../utils/apis';
import { AppContextProps, UserData } from './types';
import userDataContext from './contextData';

const AuthContext: React.FC<AppContextProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUserData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('auth/');
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getUserData();
  }, []);
  const contextValue = useMemo(() => ({
    userData, setUserData, loading, setLoading,
  }), [loading, setLoading, userData, setUserData]);

  return (
    <userDataContext.Provider
      value={contextValue}
    >
      {children}
    </userDataContext.Provider>

  );
};

export default AuthContext;
