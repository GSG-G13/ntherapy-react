import React from 'react';

interface UserData {
    fullName?: string,
    role: string,
    id: string,
    profileImg?: string,
    username?: string

}
interface AppContextProps {
    children: React.ReactNode;
}

interface UserDataContextValue {
    userData: UserData[];
    setUserData: React.Dispatch<React.SetStateAction<UserData[]>>;
}

export type { AppContextProps, UserDataContextValue, UserData };
