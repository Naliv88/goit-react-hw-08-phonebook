import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ component, redirectTo = '/', restricted = 'false' }) => {
  const isLoggenIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggenIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};

export default PublicRoute;
