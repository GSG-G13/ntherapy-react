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
    userData: UserData | null;
    setUserData: React.Dispatch<React.SetStateAction<UserData|null>>;
}

export type { AppContextProps, UserDataContextValue, UserData };
