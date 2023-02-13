import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isLoggenIn = useSelector(state => state.auth.isLoggedIn);
  return isLoggenIn ?  component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
