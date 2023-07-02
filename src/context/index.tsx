import React, {
  useState, createContext, useEffect, useMemo,
} from 'react';
import { axiosInstance } from '../utils/apis';

interface UserData {
    fullName?: string,
    role: string,
    id: string,
    profileImg?: string,
    username?:string

}
interface AppContextProps {
    children: React.ReactNode;
}

interface UserDataContextValue {
    userData: UserData[];
    setUserData: React.Dispatch<React.SetStateAction<UserData[]>>;
}

export const userDataContext = createContext < UserDataContextValue>(null!);
const AppContext: React.FC<AppContextProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData[]>([]);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axiosInstance.get('/');
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
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
