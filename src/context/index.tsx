import React, {
  useState, useEffect, useMemo,
} from 'react';
import { enqueueSnackbar } from 'notistack';
import { AxiosError } from 'axios';
import { axiosInstance } from '../utils/apis';
import { AppContextProps, UserData } from './types';
import userDataContext from './contextData';

const AppContext: React.FC<AppContextProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData[]>([]);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axiosInstance.get('auth/');
        setUserData(response.data);
      } catch (error) {
        const axiosError = error as AxiosError;
        enqueueSnackbar(axiosError.message, { variant: 'error' });
      }
    };
    getUserData();
  }, []);
  const contextValue = useMemo(() => ({ userData, setUserData }), [userData, setUserData]);

  return (
    <userDataContext.Provider
      value={contextValue}
    >
      {children}
    </userDataContext.Provider>

  );
};

export default AppContext;
