
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const PublicRoute = ({ children }) => {
  const isLoggenIn = useSelector(state => state.auth.isLoggedIn);

  if (isLoggenIn) {
    return <Navigate to="/phonebook" />;
  }
  return children;
};
