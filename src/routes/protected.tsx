import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userDataContext } from '../context';
import { Admin } from '../pages';

interface TypeChildren {
    children: ReactNode;

}
const ProtectedAdmin = () => {
  const userContext = useContext(userDataContext);

  if (userContext?.userData?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return <Admin />;
};

const ProtectedUser = ({ children }: TypeChildren) => {
  const userContext = useContext(userDataContext);
  console.log(userContext);
  const userData = userContext?.userData;
  if (userData) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export { ProtectedAdmin, ProtectedUser };
