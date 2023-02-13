import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Phonebook } from '../page/Phonebook/Phonebook';
import SimpleCard from '../page/Header';
import Register from './Header/Registry';
import SingIn from './Header/SingIn';
import PrivateRoute from './Route/PrivatRoute';
import PublicRoute from './Route/PublicRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/User/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<SimpleCard />}>
          <Route index element={<SingIn />} />
          <Route
            path="/phonebook"
            element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/phonebook"
                restricted
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                redirectTo="/phonebook"
                restricted
                component={<SingIn />}
              />
            }
          />
          <Route path="*" element={<h1> False page </h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
