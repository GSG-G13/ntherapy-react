import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userDataContext } from '../context';
import { Admin } from '../pages';

interface TypeChildren {
    children: ReactNode;

}
const ProtectedAdmin = () => {
  const userContext = useContext(userDataContext);
  // userContext?.setUserChange(!userContext?.userChange);
  if (userContext?.userData?.username !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return <Admin />;
};

const ProtectedUser = ({ children }: TypeChildren) => {
  const userContext = useContext(userDataContext);

  const userData = userContext?.userData;
  if (userData) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export { ProtectedAdmin, ProtectedUser };
